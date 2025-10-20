import React from 'react'
import ButtonV1 from '../components/ButtonV1'
import { Search } from 'lucide-react'

const DomainPage = () => {
  return (
    <div className='flex flex-col items-center'>

        <h1 className='text-4xl font-medium mt-13 mb-3 w-[40%] text-center'>Domain name search – buy a domain in minutes</h1>

        <div className='flex flex-col w-full items-center gap-4 my-6'>
            <ButtonV1 content="Domain search" classname="w-40 h-10"/>
            <div className='w-[50%] relative flex flex-row justify-center items-center border-2 border-secondary'>
                <input type="text" placeholder='Type the domain you want' className='h-15 w-[100%] border-none outline-none text-xl px-4'/>
                <button className='cursor-pointer bg-secondary hover:bg-secondary_lite absolute right-0 h-full w-17 flex justify-center items-center'><Search className='text-primary'/></button>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default DomainPage