import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen relative'>
        <Header/>

        <main className='flex-grow'><Outlet/></main>
        <div className='bg-secondary h-70'>Footer</div>
    </div>
  )
}

export default MainLayout