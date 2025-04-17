"use client"
import React, { useEffect, useState } from 'react'
import Charts from '../assets/Charts.png';
import circle from '../assets/circle.png';
import vertical from '../assets/vertical.png';
import Image from 'next/image';
import FlyInSection from '../FlyInSection/FlyInSection';

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
      <div className='my-10 flex justify-between mx-auto w-[80%] relative flex-col md:flex-row gap-5 mt-[250px]' 
        style={{
          transform: isDarkMode ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 1s ease-in-out',
        }}
      >
        <FlyInSection delay={0.5}>
        <div className={`absolute w-[150%] md:w-full h-[1px] bg-blue-900 top-[50%] rotate-90 md:rotate-0 md:top-[23%] left-[-25%] md:left-[-0%]`}></div>
        </FlyInSection>
        <div className={`text-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0`}>
        <FlyInSection delay={0.5}>
            <h2 className='text-md text-blue-900 text-md font-bold'>2019</h2>
          </FlyInSection>
            <Image  src={circle} alt="" />
            <Image className='hidden md:block' src={vertical} alt=''/>
          <FlyInSection delay={0.5}>
            <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>🩺 700+ Doctors Hosted
            Successfully hosted over 700 doctors.</p>
          </FlyInSection>
        </div>
        <div className='text-center flex flex-row items-center gap-5 scale-y-[-1] md:translate-y-[-162px] translate-y-0 md:flex-col scale-x-[-1] md:scale-x-1 translate-x-[-76px] md:translate-x-0'>
        <FlyInSection delay={1.5}>
          <h2 className='text-md text-blue-900 scale-y-[-1] text-md font-bold scale-x-[-1]'>2020</h2>
          </FlyInSection>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt='' />
          <FlyInSection delay={1.5}>
          <p className='scale-y-[-1] scale-x-[-1] md:scale-x-1 text-start md-text-center ms-[-40px] md:ms-0 me-[50px] md:me-[0]'>🇺🇸 180+ New Patients (USA)
          Expanded into the U.S. market with 180+ new patient acquisitions.</p>
          </FlyInSection>
        </div>
        <div className='ttext-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0'>
        <FlyInSection delay={2.5}>
          <h2 className='text-md text-blue-900 text-md font-bold'>2021</h2>
          </FlyInSection>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt=''/>
          <FlyInSection delay={2.5}>
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>🇺🇸 500+ New Patients (USA)
          Growth momentum continued, more than doubling the previous year.</p>
          </FlyInSection>
        </div>
        <div className='text-center flex flex-row items-center gap-5 scale-y-[-1] md:translate-y-[-162px] translate-y-0 md:flex-col scale-x-[-1] md:scale-x-1 translate-x-[-76px] md:translate-x-0'>
          
        <FlyInSection delay={3.5}>
          <h2 className='text-md text-blue-900 scale-y-[-1] text-md font-bold scale-x-[-1]'>2022</h2>
          </FlyInSection>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt=''/>
          <FlyInSection delay={3.5}>
          <p className='scale-y-[-1] scale-x-[-1] md:scale-x-1 text-start md-text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>🇺🇸 700+ New Patients (USA)
          Sustained patient growth across key U.S. regions.</p>
          </FlyInSection>
        </div>
        <div className='text-center flex items-center gap-5 flex-row md:flex-col translate-x-[76px] md:translate-x-0'>
        <FlyInSection delay={4.5}>
          <h2 className='text-md text-blue-900 text-md font-bold'>2025</h2>
        </FlyInSection>
          <Image src={circle} alt=''/>
          <Image className='hidden md:block' src={vertical} alt=''/>
          <FlyInSection delay={4.5}>
          <p className='text-end md:text-center ms-[-30px] md:ms-0 me-[50px] md:me-[0]'>Aiming to surpass 1,000 new patients with improved outreach and services.</p>
          </FlyInSection>
        </div>
      </div>

    </>
  )
}

export default ChartMileStone