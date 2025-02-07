const mongoose = require ("mongoose");
const User = require ("../models/User.js");
const Transaction = require ("../models/Transaction.js");

exports.getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;

    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: { path: "$affiliateStats", preserveNullAndEmptyArrays: true } }, // Handle empty results
    ]);

    if (!userWithStats.length) {
      return res.status(404).json({ message: "User not found" });
    }

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats?.affiliateSales?.map((id) => {
        return Transaction.findById(id);
      }) || []
    );

    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res.status(200).json({user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
