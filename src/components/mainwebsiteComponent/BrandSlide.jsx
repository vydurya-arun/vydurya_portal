import React from 'react'
import { branditems } from '../../constants/branditems'

const BrandSlide = () => {
  return (
    <div className='my-10 flex flex-col items-center justify-center space-y-6'>
        <h1 className='text-3xl'>Trusted by ambitious teams and product builders</h1>
        <div className='flex flex-row h-25 gap-13 items-center'>
            {branditems.map((item)=>(
                <img key={item.id} src={item.imageUrl} alt={item.title} />
            ))}
        </div>
    </div>
  )
}

export default BrandSlide