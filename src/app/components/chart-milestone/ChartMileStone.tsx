import React, { useEffect, useState } from 'react'
import Charts from '../assets/Charts.png';
import circle from '../assets/circle.png';
import vertical from '../assets/vertical.png';
import Image from 'next/image';

function ChartMileStone() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Trigger the slide-in on mount
    const timeout = setTimeout(() => {
      setIsDarkMode(true)
    }, 100) // slight delay for smoother effect
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <div className='my-10 flex justify-between mx-auto w-[80%] relative flex-col md:flex-row gap-5' 
        style={{
          transform: isDarkMode ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 1s ease-in-out',
        }}
      >
        <div className={`absolute w-[150%] md:w-full h-[1px] bg-blue-900 top-[50%] rotate-90 md:rotate-0 md:top-[23%] left-[-25%] md:left-[-0%]`}></div>
        <div className={`text-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0`}>
          <h2 className='text-md text-blue-900 text-md font-bold'>2008</h2>
          <Image className='w-[10%] md:w-auto' src={circle} alt="" />
          <Image className='hidden md:block' src={vertical} alt=''/>
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Dr. Choudhry founded NorthStart Surgery Specialists, PA</p>
        </div>
        <div className='text-center flex flex-row items-center gap-5 scale-y-[-1] md:translate-y-[-30px] translate-y-0 md:flex-col scale-x-[-1] md:scale-x-1 translate-x-[-76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 scale-y-[-1] text-md font-bold scale-x-[-1]'>2008</h2>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt='' />
          <p className='scale-y-[-1] scale-x-[-1] md:scale-x-1 text-start md-text-center ms-[-40px] md:ms-0 me-[50px] md:me-[0]'>Awarded Stanford's who's who and America's top surgeosm</p>
        </div>
        <div className='ttext-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 text-md font-bold'>2008</h2>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt=''/>
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Dr. Choudhry founded NorthStart Surgery Specialists, PA</p>
        </div>
        <div className='text-center flex flex-row items-center gap-5 scale-y-[-1] md:translate-y-[-30px] translate-y-0 md:flex-col scale-x-[-1] md:scale-x-1 translate-x-[-76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 scale-y-[-1] text-md font-bold scale-x-[-1]'>2008</h2>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt=''/>
          <p className='scale-y-[-1] scale-x-[-1] md:scale-x-1 text-start md-text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Awarded Stanford's who's who and America's top surgeosm</p>
        </div>
        <div className='text-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0'>
          <h2 className='text-md text-blue-900 text-md font-bold'>2008</h2>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt=''/>
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Dr. Choudhry founded NorthStart Surgery Specialists, PA</p>
        </div>
      </div>

    </>
  )
}

export default ChartMileStone