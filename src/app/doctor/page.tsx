"use client"
import React, { useRef, useEffect } from "react";
import Hero from "../components/hero/Hero";
import Image from "next/image";
import docImg from "../components/assets/images/image 5.png"
import { Icon } from '@iconify/react';
import inguinalImg from '../components/assets/images/image 3.png'
import hiatalImg from '../components/assets/images/image 4.png'
import umblicalImg from '../components/assets/images/Bronx Hernia Specialists _ Hernia Surgery - Opera 5_15_2023 4_38_28 PM 1 (1).png'
import specialtyImg from '../components/assets/images/Does Every Umbilical Hernia Corrects Itself_ Know here https___goo_gl_jGw3rE 1.png'
import data from "../data";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import gallbladderImg from './img/image copy 6.png'
import daVinciImg from './img/image copy 5.png'
import breastImg from './img/image copy 4.png'
import smallImg from './img/image copy 3.png'
import mastectomyImg from './img/image copy 2.png'
import colonImg from './img/image copy.png'
import endoscopyImg from './img/image.png'


function Page() {

  return (
    <div>
      <Hero title={''} description={''} />
      {/* <section className="hero bg-[#00000058] bg-blend-overlay">
                <div className="backdrop-blur-sm">
                    <div className="md:max-w-[85%] m-auto pt-[7rem] p-4 pb-[8rem]"></div>
                </div>
            </section> */}

      <section className="doctor">
        <div className="md:max-w-[85%] m-auto pt-[6rem] p-4 pb-[6rem] ">
          <header className="bg-[#fff] w-[95%] lg:w-[50%] m-auto left-[11px] lg:left-[24%] flex gap-1 md:gap-[2rem] md:items-center shadow-md absolute top-[230px] py-3 px-[1rem] rounded-full text-[#000]">
            <div className="doc-img w-[130px] md:w-[230px] h-[130px] md:h-[230px]">
              <Image src={docImg} className="rounded-full w-full h-full" alt="alt" />
            </div>

            <div className="doc-stat flex flex-col gap-[1rem]">
              <header className="leading-[6mm] md:leading-[10mm]">
                <h1 className="text-[#449DD1] font-bold text-[20px] md:text-[30px]">Vinnet Choudry, MD</h1>
                <p className="font-[500] flex items-center gap-2 md:text-[20px]">Surgeon</p>
              </header>
              <div className="rating">
                <small className="text-[8px] md:text-[12px] font-bold">Rating 5.3</small>
                <div className="flex items-center md:text-[12px]">
                  <Icon icon="material-symbols:star" className="text-[10px] text-[#eae249]"></Icon>
                  <Icon icon="material-symbols:star" className="text-[10px] text-[#eae249]"></Icon>
                  <Icon icon="material-symbols:star" className="text-[10px] text-[#eae249]"></Icon>
                  <Icon icon="material-symbols:star" className="text-[10px] text-[#eae249]"></Icon>
                  <Icon icon="material-symbols:star" className="text-[10px] text-[#eae249]"></Icon>
                </div>
              </div>
              <div className="location">
                <p className="text-[8px] md:text-[14px] font-bold ">{data.city}, {data.state}</p>
              </div>

              <div className="flex gap-[2rem]">
                <p className="flex items-center gap-2 md:text-[18px]">Certified <Icon icon="ph:seal-check-fill" className="text-[#379c4a]"></Icon></p>
                <p className="flex items-center gap-2 md:text-[18px]">Accepting new patients <Icon icon="mdi:briefcase" className="text-[#747272]"></Icon></p>
              </div>
            </div>
          </header>

          <div className="info gap-8 justify-between md:mt-[7rem] md:w-[80%] m-auto">
            <h1 className="text-[#449DD1] font-bold text-[20px] md:text-[30px]">About Dr. Choudhry</h1>
            <p className="text-[15px] font-[500] leading-[8mm] md:w-[80%]">
              Vineet Choudhry was born near Chicago and has lived in various places growing up such as Kansas City and San Francisco. However, he moved to Ft. Worth, Texas in 1984 and now considers himself a native Texan.

            </p>
            <p className="text-[15px] font-[500] leading-[8mm] md:w-[100%]">
              He graduated with a Bachelor of Science in Biochemistry from the University of Texas at Austin in 1997. He then received his medical degree at Texas A&M Health Science Center College of Medicine. After successfully completing his specialty training residency in General Surgery at the University of Kansas School of Medicine in Wichita, Kansas, he returned to Austin in 2008 to open his medical practice.
            </p>
          </div>
        </div>
      </section>

      <section className='get-inTouch relative mb-[7rem]'>
        <div className='md:max-w-[85%] m-auto p-4 md:pb-[4rem]'>
          <div className="form bg-[#FFF] w-[350px] m-auto p-4 rounded-lg relative  top-[100px] md:left-[-30%] shadow-md">
            <header className='text-center'>
              <h2 className='text-[#449DD1] font-bold text-[23px] md:text-[26px]'>Get In Touch</h2>
              <p className="my-6">With Choudry</p>
            </header>
            <form className='bg-transparent grid grid-cols-2 gap-4'>
              <div className="name col-span-2 border p-3 rounded-xl">
                <input type="text" placeholder='Name' className='w-full outline-none border-0' />
              </div>
              <div className="email border p-3 rounded-xl col-span-1">
                <input type="email" placeholder='Email' className='w-full outline-none border-0' />
              </div>
              <div className="phone border p-3 rounded-xl col-span-1">
                <input type="tel" placeholder='Phone' className='w-full outline-none border-0' />
              </div>
              <div className='col-span-2 border p-3 rounded-xl'>
                <select name="reason-for-contact" id="reason" title="res" className='outline-none border-none'>
                  <option value="reason1" selected>Reason for contact</option>
                  <option value="surgery-appointment">Surgery Appointment</option>
                  <option value="in-house-appointment">In-house Appointment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="submit col-span-2 border p-3 rounded-full text-center text-[#fff] bg-[#449DD1]">
                <button>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className='do-you-need'>
        <div className='md:max-w-[85%] m-auto p-4'>
          <header className='py-[3rem]'>
            <h2 className='text-[#449DD1] text-[20px] md:text-[30px] font-extrabold text-center md:w-[40%] m-auto'>
              Do You Need A Hernia Specialist?
            </h2>
          </header>

          <div className="hernias">
            <div className="inguinal md:flex flex-row-reverse gap-4">
              <div>
                <Image src={inguinalImg} alt="alt" />
              </div>

              <div className="text md:w-[50%]">
                <h2 className='my-4 font-bold text-[20px]'>Inguinal Hernia</h2>
                <p className='font-[500] text-[#000000a4]'>
                  Inguinal hernias are the most common type of hernia encountered. They occur in women but occur more commonly in males. About 1 in 4 males will have an inguinal hernia at some point in their lifetime. The testicle descending from the abdomen into the scrotum predisposes males to have a natural weakness in the groin where inguinal hernias occur.
                </p>
              </div>
            </div>


            <div className="inguinal my-[4rem] md:flex gap-4">
              <div >
                <Image src={hiatalImg} alt="alt" />
              </div>

              <div className="text md:w-[50%]">
                <h2 className='my-4 font-bold text-[20px]'>Hiatal Hernia</h2>
                <p className='font-[500] text-[#000000a4]'>
                  Hiatal hernias typically occur later in life and cause a myriad of symptoms. Symptoms may include heartburn, nausea, vomiting, regurgitation, abdominal pain, chest pain, difficulty swallowing, bloating, belching, or coughing. The term hiatal comes from hiatus (or opening), specifically the esophageal hiatus.
                </p>
              </div>

            </div>

            <div className="inguinal md:flex flex-row-reverse gap-4">
              <div>
                <Image src={umblicalImg} alt="alt" />
              </div>

              <div className="text md:w-[50%]">
                <h2 className='my-4 font-bold text-[20px]'>Umbilical Hernia</h2>
                <p className='font-[500] text-[#000000a4]'>
                  Umbilical hernias are one of the most common hernias encountered. They are naturally occurring hernias, common in all ages from infants to the elderly. They occur at the navel, also known as the umbilicus. This is the site that the umbilical cord previously passed through and acts as a natural site of weakness in the abdominal wall.
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="specialties">
        <div className="md:max-w-[85%] m-auto p-4">
          <header>
            <h1 className='text-[#449DD1] text-[20px] md:text-[30px] font-extrabold text-center'>Specialties</h1>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 my-4 justify-center items-center m-auto w-full">
            <div className="relative overflow-hidden rounded-lg">
              <Image src={specialtyImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[5%] ">
              <Icon icon="material-symbols:health-metrics" className="text-[40px] text-[#fff]"></Icon>
                <h2 className="text-[20px] text-[#fff] font-[500]">Hernia</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image src={gallbladderImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[0%] bg-[#0000006f]">
              <Icon icon="material-symbols:health-metrics" className="text-[40px] text-[#fff]"></Icon>
                <h2 className="text-[20px] text-[#fff] font-[500]">Gallbladder</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image src={daVinciImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[0%] bg-[#0000006f]">
              <Icon icon="material-symbols:health-metrics" className="text-[40px] text-[#fff]"></Icon>
                <h2 className="text-[20px] text-[#fff] text-center font-[500]">Da Vinci Robotic Surgery</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image src={breastImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[0%] bg-[#0000006f]">
              <Icon icon="material-symbols:health-metrics" className="text-[40px] text-[#fff]"></Icon>
                <h2 className="text-[20px] text-[#fff] font-[500]">Breast Cancer</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image src={smallImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[0%] bg-[#0000006f]">
              <Icon icon="material-symbols:health-metrics"></Icon>
                <h2 className="text-[20px] text-[#fff] font-[500]">Small intestine</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image src={mastectomyImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[0%] bg-[#0000006f]">  
                <Icon icon="material-symbols:health-metrics"  className="text-[40px] text-[#fff]"></Icon>
                <h2 className="text-[20px] text-[#fff] font-[500]">Mastecomy</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image src={colonImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[0%] bg-[#0000006f]">
              <Icon icon="material-symbols:health-metrics" className="text-[40px] text-[#fff]"></Icon>
                <h2 className="text-[20px] text-[#fff] font-[500]">Colon Surgery</h2>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image src={endoscopyImg} className="h-[170px] rounded-lg" alt="alt" />
              <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-[0%] bg-[#0000006f]">
              <Icon icon="material-symbols:health-metrics" className="text-[40px] text-[#fff]"></Icon>
                <h2 className="text-[20px] text-[#fff] font-[500]">Endoscopy</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="md:max-w-[85%] m-auto p-4 py-[2rem]">

          <Swiper className="px-[2rem]"
            modules={[Pagination, A11y]}
            spaceBetween={20}
            // slidesPerView={3}
            // navigation
            loop={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide className="p-3 md:p-[4rem] shadow-lg rounded-xl my-[3rem]">
              <div className=" rating flex items-center text-[18px]">
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
              </div>
              <div className="review text-[14px] md:text-[18px] ">
                <h2 className="font-bold my-[.5rem]">Steven Weitzman</h2>
                <p>
                  &quot;I was very happy with the hernia procedure that Dr Choudry performed. He explained everything to me and spent a lot of time going over the surgery. No pain no side affects and a fast recovery. I highly recommend him. &quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-3 md:p-[4rem] shadow-lg rounded-xl my-[3rem]">
              <div className=" rating flex items-center text-[18px]">
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
              </div>
              <div className="review text-[14px] md:text-[18px]">
                <h2 className="font-bold my-[.5rem]">Steven Weitzman</h2>
                <p>
                  &quot;I was very happy with the hernia procedure that Dr Choudry performed. He explained everything to me and spent a lot of time going over the surgery. No pain no side affects and a fast recovery. I highly recommend him. &quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-3 md:p-[4rem] shadow-lg rounded-xl my-[3rem]">
              <div className=" rating flex items-center text-[18px]">
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
                <Icon icon="material-symbols:star" className="text-[#eae249]"></Icon>
              </div>
              <div className="review text-[14px] md:text-[18px]">
                <h2 className="font-bold my-[.5rem]">Steven Weitzman</h2>
                <p>
                  &quot;I was very happy with the hernia procedure that Dr Choudry performed. He explained everything to me and spent a lot of time going over the surgery. No pain no side affects and a fast recovery. I highly recommend him. &quot;
                </p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Page;
