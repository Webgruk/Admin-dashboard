import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { themeSettings } from './theme.js'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  Route,
} from 'react-router-dom'

import Dashboard from './scenes/dashboard/index.jsx'
import Layout from './scenes/layout/index.jsx'
import Products from './scenes/products/index.jsx'
import Customers from './scenes/customers/index.jsx'
import Transactions from './scenes/Transactions/index.jsx'
import Geograhpy from './scenes/geograhpy/index.jsx'
import Overview from './scenes/overview/index.jsx'
import Daily from './scenes/daily/index.jsx'
import Monthly from './scenes/monthly/index.jsx'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/geography" element={<Geograhpy />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/monthly" element={<Monthly />} />
      </Route>,
    ),
  )

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
