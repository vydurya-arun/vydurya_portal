import React from 'react'
import ButtonV1 from '../components/ButtonV1'

const HomePage = () => {
  return (
    <div className='my-10 flex flex-row justify-between'>
      <div className='w-[60%] space-y-5 py-5'>
        <h1 className='text-7xl '>Quality Websites at Affordable Rates</h1>
        <p className='w-[76%]'>Transform your digital footprint into an unforgettable experience, where every click leads to meaningful connections</p>
        <div className='flex flex-row gap-4'>
          <ButtonV1/>
          <button className='h-12 text-secondary border-1 border-secondary px-3 font-semibold'>Contact sales</button>

        </div>

      </div>
      <div>
        <img src="/images/hero_image.png" alt="hero" />
      </div>

    </div>
  )
}

export default HomePage