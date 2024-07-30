import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout/index";
import Dashboard from "./scenes/dasboard/index";
import Products from "./scenes/products/index";
import Customers from "./scenes/customers/index";
import Transactions from "./scenes/transactions/index";
import Geography from "./scenes/geography/index";
import Overview from "./scenes/overview/index";
import Daily from "./scenes/daily/index";
import Monthly from "./scenes/monthly/index";
import Breakdown from "./scenes/breakdown/index";
import Admins from "./scenes/admins";
import Performance from "./scenes/performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" 
              element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Products" element={<Products/>} />
              <Route path="/Customers" element={<Customers/>} />
              <Route path="/Transactions" element={<Transactions/>} />
              <Route path="/Geography" element={<Geography/>} />
              <Route path="/Overview" element={<Overview/>} /> 
              <Route path="/Daily" element={<Daily/>} />   
              <Route path="/Monthly" element={<Monthly/>} />
              <Route path="/Breakdown" element={<Breakdown/>} />
              <Route path="/Admins" element={<Admins/>} />
              <Route path="/Performance" element={<Performance/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;