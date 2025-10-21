import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import PricingPage from './pages/PricingPage'
import DomainPage from './pages/domainPages/DomainPage'

const App = () => {
  return (
    <Routes>
      {/* Main website routes */}
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/domain' element={<DomainPage/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />

      </Route>
    </Routes>
  )
}

export default App