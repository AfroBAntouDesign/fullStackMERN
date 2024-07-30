
const User = require('./../models/User') ;
const OverallStat = require("../models/OverallStat.js");
const Transaction = require("../models/Transaction.js") ;




    exports.getAllFiles = async(req,res)=>{
        try{
            const user= await User.find() ;
            res.status(200).json({
            status: 'success',
            length: user.length,
            data :{
                user
            }
            }) ;
    }catch(error){
        res.status(404).json({
            status : 'fail',
            mesaage : error.mesaage
        }) ;
    } ;



} ;

exports.getFiles = async(req,res)=>{
    try{
        const {id} = req.params
        const user= await User.findById(id) ;
        res.status(200).json({
            status: 'success',
            data :{
                user
            } 
        }) ;
    }catch(err){
        res.status(404).json({
            status : 'failed',
            mesaage : err.mesaage
        }) ;
    } ;
    

} ;





exports.createFile = async(req,res)=>{
   try {
    const user = User.create(req.body)

    res.status(201).json({
        status : 'sucess' ,
        data : {
           user
        }
    })
    
   } catch(err){
        res.status(404).json({
            status : 'fail ',
            message : err.message
        })

   }
   
 } ;

 exports.getDashboardStats = async (req, res) => {
    try {
      // hardcoded values
      const currentMonth = "November";
      const currentYear = 2021;
      const currentDay = "2021-11-15";
  
      /* Recent Transactions */
      const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 });
  
      /* Overall Stats */
      const overallStat = await OverallStat.find({ year: currentYear });
  
      const {
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
      } = overallStat[0];
  
      const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
        return month === currentMonth;
      });
  
      const todayStats = overallStat[0].dailyData.find(({ date }) => {
        return date === currentDay;
      });
  
      res.status(200).json({
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
        thisMonthStats,
        todayStats,
        transactions,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


exports.upDateFile = async(req,res)=>{    
    // try{
    //     const upDatedFile= await fileModel.findByIdAndUpdate( req.params.id, req.body, {new:true, runValidators:true}) ;
    //     res.status(200).json({
    //         status: 'success',
    //         length: fileModel.length,
           
    //         data :{
    //             fileModel:upDatedFile
    //        }
    //    }) ;
    // }catch(err){
    //     res.status(404).json({
    //         status : 'fail',
    //         mesaage : err.mesaage
    //     }) ;
    // } ;
   

 } ;

exports.deleteFile = async(req,res)=>{
    // try{         await fileModel.findByIdAndDelete( req.params.id, req.body, {new:true, runValidators:true}) ;       
                
    // res.status(204).json({             status: 'success',
    //         length: fileModel.length,
    //          data :null
    //      }) ;
    //  }catch(err){
    //      res.status(404).json({
    //          status : 'fail',
    //          mesaage : err.mesaage
    // }) ;
   
    // } 
} ;