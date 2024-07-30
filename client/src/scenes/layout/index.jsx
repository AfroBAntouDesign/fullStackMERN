import React ,{useState}from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import NaveBar from '../../component/NavBar';
import SideBar from '../../component/SideBar' ;
import { useGetUserQuery } from '../../state/api';
import { useSelector } from 'react-redux';

function Layout() {
  const isNonMoblie= useMediaQuery("(min-with:600px)");
  const [isSidebarOpen, setIsSidebarOpen]= useState(true);

  const userId = useSelector((state)=> state.global.userId) ;
  const {data} = useGetUserQuery(userId);

  

  return <Box display={isNonMoblie? "flex": "block"} width="100%" height="100%">

      <SideBar
        user = {data|| {}}
        isNonMoblie ={isNonMoblie}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <NaveBar
        user = {data|| {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen = {setIsSidebarOpen}
        />
        <Outlet/>
      </Box> 
  </Box>
}

export default Layout
