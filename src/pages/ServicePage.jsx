import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import React from 'react'

const ServicePage = () => {

  useGSAP(()=>{
    gsap.to("#box",{
      x:300,
      repeat:-1,
      yoyo:true
    })


  },[])

  return (
    <div className='h-[100vh]'>
      ServicePage
      <div id="box" className='w-20 h-20 bg-red-500'></div>
    </div>
  )
}

export default ServicePage