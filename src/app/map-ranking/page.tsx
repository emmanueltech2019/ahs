import React from 'react'
import Hero from '../components/hero/Hero'
import PricingCard from '../components/PricingCard/PricingCard'
import { NextPage } from 'next'

const page: NextPage = () => {
  return (
    <div className='mb-40'>
        <Hero title={'Pricing.'} description={''} />
        <div className=' md:px-32 py-20 px-5 md:h-[100vh] h-fit text-center'>
            <h2 className="text-2xl font-bold mb-4 text-[#449DD1] text-center">Pricing Option</h2>
            <span className='text-[#6B6B6B] py-10 mb-10'>Take control of your health with transparent pricing – Contact us today for a personalized quote!</span>

            <div className="container mx-auto px-4 py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <PricingCard
          title="Online Presense & Visibility"
          price="$450"
          description="Turn Online Searches into Valuable Patient Appointments"
          features={[
            '2-3 New Patient Acquisition monthly',
            'Establish a professional website showcasing your expertise and services.',
            'Optimize your website for search engines (SEO) to improve patient visibility.',
            'Attract new patients searching for hernia surgeons in your area.',
          ]}
        />
        <PricingCard
          title="Patient Engagement"
          price="$950"
          description="Website Development + SEO & Google My Business (GMB) Optimization"
          features={[
            '4-9 New Patient Acquisition monthly',
            'Implement comprehensive SEO strategies to improve local search ranking.',
            'Optimize your Google My Business (GMB) listing for increased visibility.',
            'Attract qualified hernia patients actively searching for Hernia Surgeon specialists online.',
          ]}
          highlighted={true}
        />
        <PricingCard
          title="Promotions + Patient Engagement"
          price="$2950"
          description="Website Development + SEO + GMB Optimization & Exclusive Luncheon Events"
          features={[
            '10-12 New Patient Acquisition monthly',
            'Create a premium website that sets you apart from the competition.',
            'Implement advanced SEO strategies for superior search ranking visibility.',
            'Optimize your GMB listing to attract local hernia patients.',
          ]}
        />
      </div>
    </div>
        </div>
    </div>
  )
}

export default page