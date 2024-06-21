import React from 'react'
import Hero from '../components/hero/Hero'
import PricingCard from '../components/PricingCard/PricingCard'
import { NextPage } from 'next'

const page: NextPage = () => {
  return (
    <div>
        <Hero title={'Pricing.'} description={'Lorem ipsum dolor sit amet consectetur. Nec aliquet enim placerat id at. Elementum enim.'} />
        <div className=' md:px-32 py-20 px-5 md:h-[100vh] h-fit text-center'>
            <h2 className="text-2xl font-bold mb-4 text-[#449DD1] text-center">Pricing Option</h2>
            <span className='text-[#6B6B6B] py-10 mb-10'>Take control of your health with transparent pricing – Contact us today for a personalized quote!</span>

            <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Lorem"
          price="$50"
          description="Lorem ipsum dolor sit amet"
          features={[
            'Lorem ipsum dolor sit amet consectetur. Convallis porttitor.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur. Mi.',
          ]}
        />
        <PricingCard
          title="Lorem"
          price="$180"
          description="Lorem ipsum dolor sit"
          features={[
            'Lorem ipsum dolor sit amet consectetur. In.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur.',
          ]}
          highlighted={true}
        />
        <PricingCard
          title="Lorem ipsum"
          price="$500"
          description="Whats included;"
          features={[
            'Lorem ipsum dolor sit amet consectetur. Ut.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur. Sem pretium erat.',
          ]}
        />
      </div>
    </div>
        </div>
    </div>
  )
}

export default page