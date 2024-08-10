import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium'>No. 1 Job Search Website</span>
            <h1 className='text-5xl font-bold'>Ready for a Change? <br /> <span className='text-[#6A38c2]'>Find the Perfect Job Match Here!</span></h1>

            <div className='flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto '>
                <input 
                type="text"
                placeholder='Search your dream jobs '
                className=' outline-none border-none w-full'
                 />
                 <Button className=" rounded-r-full bg-[#6A38c2] hover:bg-[#5423a8]">
                    <Search className='h-5 w-5'/>
                 </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection