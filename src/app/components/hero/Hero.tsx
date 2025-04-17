import React from 'react'
import FlyInSection from '../FlyInSection/FlyInSection';

interface HeroProps {
    title: string;
    description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
    return (
    <div>
              <section className="hero bg-[#00000058] bg-blend-overlay">
        <div className="backdrop-blur-sm">
          <div className='md:max-w-[85%] m-auto pt-[7rem] p-4 pb-[6rem] min-h-[40vh]'>
            <header className='mt-[6.5rem]'>
              <FlyInSection>
                <h1 className='md:w-[85%] text-[37px] md:text-[60px] font-bold text-[#fff] leading-10 md:leading-[16mm]'>
                {title}
                </h1>
                <p className='text-[#f4f4f4] md:text-[18px] md:w-[40%] my-[1.4rem]'>
                {description}
                </p>
              </FlyInSection>
            </header>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero