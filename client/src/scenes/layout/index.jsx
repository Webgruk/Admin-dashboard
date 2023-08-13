import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useMediaQuery, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../../component/Navbar'

function Layout() {
  useMediaQuery

  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
