"use client";
import React, { FormEvent, useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "./data";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import ImageOrbit from "./components/3d/ImageOrbit";
import Head from "next/head";
import ChartMileStone from "./components/chart-milestone/ChartMileStone";
import Image from "next/image";
import HerniaPatientsChart from "./components/chart/Chart";
import FlyInSection from "./components/FlyInSection/FlyInSection";
// import Vid from "./components/"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
export default function Home() {
  const embedSrc =
    "https://sketchfab.com/models/48ee970a23964b59b9c85d06fff540f6/embed";
  const modelUrl =
    "https://sketchfab.com/3d-models/rt-inguinal-hernia-containing-the-bladder-48ee970a23964b59b9c85d06fff540f6?utm_medium=embed&utm_campaign=share-popup&utm_content=48ee970a23964b59b9c85d06fff540f6";
  const authorUrl =
    "https://sketchfab.com/tl0615?utm_medium=embed&utm_campaign=share-popup&utm_content=48ee970a23964b59b9c85d06fff540f6";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios
        .post(
          "https://api-14hs.devemmy.com/appointments",
          { name, email, type, phone, brand: data.brand },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          Toast.fire({
            icon: "success",
            text: "We would reach out to you shortly",
            timer: 2000,
          }).then(() => {
            setName("");
            setEmail("");
            setPhone("");
            setType("");
          });
        });
    } catch (error: any) {
      Toast.fire({
        icon: "error",
        text: "unsuccessful",
        timer: 2000,
      }).then(() => {
        // window.location.reload();
      });
      // Handle login errors (e.g., invalid credentials)
      // console.error('Login error:', error.response?.data);
      // setError(error.response?.data.message || 'An error occurred.');
    }
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const imageRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1, // zoom out to normal size
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [inView, controls]);
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="qtF6bh1d2Fs5IN5P9-UIymEDB64u8AuQyVBbWI6dNB8"
        />
      </Head>
      {/* <section className="hero bg-[#00000058] bg-blend-overlay">
        <div className="backdrop-blur-sm">
          <div className='md:max-w-[85%] m-auto pt-[7rem] p-4 pb-[6rem] min-h-[100vh]'>
            <header className='mt-[6.5rem]'>
              <h1 className='md:w-[85%] text-[37px] md:text-[60px] font-bold text-[#fff] leading-10 md:leading-[18mm]'>
                Find your <br className='md:hidden' />
                Hernia<br className='hidden md:block' />Specialists in {data.city}, {data.state}
              </h1>

              <p className='text-[#f4f4f4] md:text-[18px] md:w-[40%] my-[1.4rem]'>
                Your trusted destination for
                premier hernia care in {data.city} 
                {''} and Surrounding Areas.
              </p>
            </header>

            <div className="buttons flex justify-between gap-3 text-center mt-[6rem] md:w-[40%]">
                <div className="about-us bg-[#fff] p-2 py-3 font-bold rounded-full w-full">
              <Link href={'/about'} >
                  <button>About Us</button>
              </Link>
                </div>
                <div className="contact-us bg-[#449DD1] text-[#fff] p-2 py-3 font-bold rounded-full w-full">
              <Link href={'/contact'} >
                  <button>Contact Us</button>
              </Link>
                </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className=" relative overflow-hidden min-h-screen">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src={
              "https://res.cloudinary.com/wise-solution-inc/video/upload/v1744247251/Introducing_da_Vinci_5__our_most_advanced_and_integrated_robotic_system_ever._rjbljt.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

        <div className="relative z-10 backdrop-blur-sm">
          <div className="md:max-w-[85%] m-auto pt-[7rem] p-4 pb-[6rem] min-h-[100vh]">
            <FlyInSection>
              <header className="mt-[6.5rem]">
                <h1 className="md:w-[85%] text-[37px] md:text-[60px] font-bold text-white leading-10 md:leading-[18mm]">
                  Find your <br className="md:hidden" />
                  Hernia
                  <br className="hidden md:block" />
                  Specialists in {data.city}
                </h1>

                <p className="text-[#f4f4f4] md:text-[18px] md:w-[40%] my-[1.4rem]">
                  Your trusted destination for premier hernia care in{" "}
                  {data.city} and surrounding areas.
                </p>
              </header>
            </FlyInSection>
            <FlyInSection>
              <div className="buttons flex justify-between gap-3 text-center mt-[6rem] md:w-[40%]">
                <div className="about-us bg-white p-2 py-3 font-bold rounded-full w-full">
                  <Link href="/about">
                    <button>About Us</button>
                  </Link>
                </div>
                <div className="contact-us bg-[#449DD1] text-white p-2 py-3 font-bold rounded-full w-full">
                  <Link href="/contact">
                    <button>Contact Us</button>
                  </Link>
                </div>
              </div>
            </FlyInSection>
          </div>
        </div>
      </section>

      {/* <section className='bg-[#fff] relative'>
        <div className='md:max-w-[85%] m-auto p-4'>
          <header className='bg-[#fff] w-[95%] lg:w-[60%] m-auto left-[11px] lg:left-[20%] grid grid-cols-2 md:grid-cols-4 gap-3 shadow-md absolute top-[-50px] py-8 px-[2rem] rounded-full text-[#000]'>
            <div className="location p-2 rounded-full bg-[#ddd]">
              <input type="text" placeholder='Location' className='bg-transparent text-[14px] outline-none border-0' />
            </div>
            <div className="date p-2 rounded-full bg-[#ddd]">
              <input type="date" placeholder='Date' className='bg-transparent text-[14px] outline-none border-0' />
            </div>
            <div className="specialty p-2 rounded-full bg-[#ddd]">
              <input type="text" placeholder='Specialty' className='bg-transparent text-[14px] outline-none border-0' />
            </div>
            <div className="search p-2 rounded-full bg-[#ddd] text-center text-[#449DD1]">
              <button>Search</button>
            </div>
          </header>

          <div className="step mt-[10rem] mb-[3rem] md:mb-[7rem]">
            <header className='my-[4rem]'>
              <h2 className='text-[#449DD1] text-[20px] md:text-[30px] md:w-[40%] m-auto font-extrabold text-center'>
                Your Journey to Hernia Relief starts here.
              </h2>
            </header>

            <div className='steps grid gap-7 md:grid-cols-3'>
              <div className="location text-center px-[2.2rem]">
                <div className="location-icon mb-[2rem]">
                  <Icon icon="humbleicons:location" className='text-[80px] m-auto w-full'></Icon>
                </div>
                <h6 className='font-bold text-[18px]'>
                  Choose a location 
                </h6>
                <p className='font-thin text-[16px]'>
                  Choose your location in {data.city} and surrounding areas.
                </p>
              </div>
              <div className="scheduling text-center px-[2.2rem]">
                <div className="location-icon mb-[2rem]">
                  <Icon icon="arcticons:calendar-simple-19" className='text-[80px] m-auto w-full'></Icon>
                </div>
                <h6 className='font-bold text-[18px]'>
                  Connect with your doctor instantly.
                </h6>
                <p className='font-thin text-[16px]'>
                  Schedule and appointment with your hernia specialists.  
                </p>
              
              </div>
              <div className="finding text-center px-[2.2rem]">
                <div className="location-icon mb-[2rem]">
                  <Icon icon="uil:stethoscope-alt" className='text-[80px] m-auto w-full'></Icon>
                </div>
                <h6 className='font-bold text-[18px]'>
                  Find your expert hernia surgeon.
                </h6>
                <p className='font-thin text-[16px]'>
                  We have a the best expert in hernia surgery in {data.city}
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="risk bg-[#fff]">
        <div className="md:max-w-[85%] m-auto py-8 pb-[6rem]">
          <FlyInSection>
            <header className="py-[3rem]">
              <h2 className="text-[#449DD1] text-[20px] md:text-[45px] font-extrabold text-center">
                WHAT IS AN HERNIA?
              </h2>
            </header>
          </FlyInSection>

          <div className="md:flex justify-center gap-[4rem]">
            <div className="relative md:w-[70%] hernia-list  bg-[#f4f4f4] p-8 ps-[4rem] m-4 rounded-lg">
              <h6 className="text-[21px] font-extrabold py-5">
                Common Hernia Conditions.
              </h6>
              <div className="absolute left-0 bg-[#449DD1] w-[40px] h-[30px]"></div>
              {/* <ul className='grid gap-3 text-[#0000009b]'>
                <li className='text-[20px] font-extrabold'>Ingunial hernia</li>
                <li className='text-[20px] font-extrabold'>Incisional hernia</li>
                <li className='text-[20px] font-extrabold'>Hiatal hernia</li>
                <li className='text-[20px] font-extrabold'>Femoral hernia</li>
                <li className='text-[20px] font-extrabold'>Ventral hernia</li>
                <li className='text-[20px] font-extrabold'>Umblical hernia</li>
                <li className='text-[20px] font-extrabold'>Recurrent hernia</li>
                <li className='text-[20px] font-extrabold'>Diaphragmatic hernia</li>
                <li className='text-[20px] font-extrabold'>Spigelian hernia</li>
                <li className='text-[20px] font-extrabold'>Flank hernia</li>
              </ul> */}
              <ul className="grid gap-3 text-[#0000009b]">
                {[
                  "Ingunial hernia",
                  "Incisional hernia",
                  "Hiatal hernia",
                  "Femoral hernia",
                  "Ventral hernia",
                  "Umblical hernia",
                  "Recurrent hernia",
                  "Diaphragmatic hernia",
                  "Spigelian hernia",
                  "Flank hernia",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-[20px] font-extrabold flex items-start gap-2"
                  >
                    <span className="mt-2 w-2 h-2 bg-[#449DD1] rounded-full shrink-0" />
                    <FlyInSection>{item}</FlyInSection>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[1rem]">
              {/* <div className="img h-[180px] md:h-[300px] overflow-hidden ">
                <FlyInSection>
                  <iframe
                    className="md:h-[320px] md:w-[590px] w-screen h-[50vh]"
                    src="https://www.youtube.com/embed/Oxar0r6-HEU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </FlyInSection>
              </div> */}
<div className="img overflow-hidden">
  <FlyInSection>
    <iframe
      className="w-screen h-[50vh] md:h-[320px] md:w-[590px]"
      src="https://www.youtube.com/embed/Oxar0r6-HEU"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </FlyInSection>
</div>

              <div className="text p-4 pl-4 font-[500] md:w-[80%]">
                <h5 className="font-bold text-[18px] ">Condition</h5>
                <FlyInSection>
                  <p>
                    An incarcerated hernia can cut off blood flow to part of
                    your intestine. Strangulation can lead to the death of the
                    affected bowel tissue. A strangulated hernia is
                    life-threatening and requires immediate surgery.
                    <br />
                    <br />
                  </p>
                </FlyInSection>
                <FlyInSection>
                  <h5 className="font-bold text-[18px]">Symptoms</h5>
                  <p>
                    Symptoms of a strangulated hernia can include severe pain,
                    nausea, vomiting, and fever. In some cases, a hernia can be
                    gently pushed back into place, but a strangulated hernia
                    requires surgery to repair.
                  </p>
                </FlyInSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FlyInSection>
        <section className="get-inTouch min-h-[70vh] flex items-center justify-center px-4 py-10 bg-[#f5f5f5]">
          <div className="w-full max-w-[550px] bg-white p-8 md:p-10 rounded-lg shadow-md">
            <FlyInSection>
              <header className="text-center mb-6">
                <h5 className="text-[#449DD1] font-bold text-[23px] md:text-[26px]">
                  Get In Touch
                </h5>
                <p>Improve the quality of your life</p>
              </header>
            </FlyInSection>

            <FlyInSection>
              <form
                className="bg-transparent grid grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                <div className="col-span-2 border p-3 rounded-xl">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full outline-none border-none"
                  />
                </div>
                <div className="border p-3 rounded-xl col-span-2 md:col-span-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full outline-none border-none"
                  />
                </div>
                <div className="border p-3 rounded-xl col-span-2 md:col-span-1">
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full outline-none border-none"
                  />
                </div>
                <div className="col-span-2 border p-3 rounded-xl">
                  <select
                    name="reason-for-contact"
                    id="reason"
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full outline-none border-none"
                  >
                    <option value="">Select Reason for contact</option>
                    <option value="surgery-appointment">
                      Surgery Appointment
                    </option>
                    <option value="in-house-appointment">
                      In-house Appointment
                    </option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-white bg-[#449DD1] font-semibold"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </FlyInSection>
          </div>
        </section>

        {/* <section className="get-inTouch relative mb-[7rem]">
          <div className="md:max-w-[85%] m-auto p-4 md:pb-[4rem]">
            <div className="form bg-[#FFF] md:w-[550px] m-auto p-10 rounded-lg relative  top-[100px] md:left-[-30%] shadow-md">
              <FlyInSection>
                <header className="text-center">
                  <h5 className="text-[#449DD1] font-bold text-[23px] md:text-[26px]">
                    Get In Touch
                  </h5>
                  <p>Improve the quality if your life</p>
                </header>
              </FlyInSection>
              <FlyInSection>
                <form
                  className="bg-transparent grid grid-cols-2 gap-4 "
                  onSubmit={handleSubmit}
                >
                  <div className="name col-span-2 border p-3 my-3 rounded-xl">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full outline-none border-0"
                    />
                  </div>
                  <div className="email border p-3 rounded-xl my-3 col-span-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full outline-none border-0"
                    />
                  </div>
                  <div className="phone border p-3 rounded-xl my-3 col-span-1">
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full outline-none border-0"
                    />
                  </div>
                  <div className="col-span-2 border p-3 rounded-xl my-3">
                    <select
                      name="reason-for-contact"
                      id="reason"
                      required
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      title="res"
                      className="outline-none border-none"
                    >
                      <option value="">Select Reason for contact</option>
                      <option value="surgery-appointment">
                        Surgery Appointment
                      </option>
                      <option value="in-house-appointment">
                        In-house Appointment
                      </option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="submit col-span-2 border p-3 rounded-full text-center text-[#fff] bg-[#449DD1]">
                    <button type="submit">SUBMIT</button>
                  </div>
                </form>
              </FlyInSection>
            </div>
          </div>
        </section> */}
      </FlyInSection>
      <section className="do-you-need">
        <div className="md:max-w-[85%] m-auto p-4">
          <FlyInSection>
            <header className="py-[3rem]">
              <h3 className="text-[#449DD1] text-[30px] md:text-[45px] font-extrabold text-center md:w-[40%] m-auto">
                Do You Need a Hernia Specialist?
              </h3>
            </header>
          </FlyInSection>
          <div className="hernias">
            <div className="inguinal md:flex flex-row-reverse gap-4">
              <FlyInSection>
                <div className="md:w-[50vw] md:h-[50vh]">
                  <ImageOrbit imageUrl="https://res.cloudinary.com/wise-solution-inc/image/upload/v1719851207/inguinal-hernia_p6n6lc.png" />
                </div>
              </FlyInSection>
              <div className="text md:w-[50%]">
                <FlyInSection>
                  <h5 className="my-4 font-bold text-[25px]">
                    Inguinal Hernia
                  </h5>
                  <p className="font-[500] text-[#000000a4]">
                    Inguinal hernias are the most common type of hernia
                    encountered. They occur in women but occur more commonly in
                    males. About 1 in 4 males will have an inguinal hernia at
                    some point in their lifetime. The testicle descending from
                    the abdomen into the scrotum predisposes males to have a
                    natural weakness in the groin where inguinal hernias occur.
                  </p>
                  <p className="font-[500] text-[#000000a4] py-2">
                    Inguinal hernias are the most common type of hernia
                    encountered. They occur in women but occur more commonly in
                    males. About 1 in 4 males will have an inguinal hernia at
                    some point in their lifetime. The testicle descending from
                    the abdomen into the scrotum predisposes males to have a
                    natural weakness in the groin where inguinal hernias occur.
                  </p>
                </FlyInSection>
              </div>
            </div>

            <div className="inguinal my-[4rem] md:flex gap-4">
              <FlyInSection>
                <div className="md:w-[50vw] md:h-[50vh]">
                  <ImageOrbit imageUrl="https://res.cloudinary.com/wise-solution-inc/image/upload/v1719852288/haital-hernia_j1nqeu.png" />
                </div>
              </FlyInSection>
              <div className="text md:w-[50%]">
                <FlyInSection>
                  <h5 className="my-4 font-bold text-[25px]">Hiatal Hernia</h5>
                  <p className="font-[500] text-[#000000a4]">
                    Hiatal hernias typically occur later in life and cause a
                    myriad of symptoms. Symptoms may include heartburn, nausea,
                    vomiting, regurgitation, abdominal pain, chest pain,
                    difficulty swallowing, bloating, belching, or coughing. The
                    term hiatal comes from hiatus (or opening), specifically the
                    esophageal hiatus.
                  </p>
                  <p className="font-[500] text-[#000000a4] py-2">
                    Hiatal hernias typically occur later in life and cause a
                    myriad of symptoms. Symptoms may include heartburn, nausea,
                    vomiting, regurgitation, abdominal pain, chest pain,
                    difficulty swallowing, bloating, belching, or coughing. The
                    term hiatal comes from hiatus (or opening), specifically the
                    esophageal hiatus.
                  </p>
                </FlyInSection>
              </div>
            </div>

            <div className="inguinal md:flex flex-row-reverse gap-4">
              <FlyInSection>
                <div className="md:w-[50vw] md:h-[50vh]">
                  <ImageOrbit imageUrl="https://res.cloudinary.com/wise-solution-inc/image/upload/v1720021228/umblical-removebg-preview_pupiag.png" />
                </div>
              </FlyInSection>
              <div className="text md:w-[50%]">
                <FlyInSection>
                  <h5 className="my-4 font-bold text-[25px]">
                    Umbilical Hernia
                  </h5>
                  <p className="font-[500] text-[#000000a4]">
                    Umbilical hernias are one of the most common hernias
                    encountered. They are naturally occurring hernias, common in
                    all ages from infants to the elderly. They occur at the
                    navel, also known as the umbilicus. This is the site that
                    the umbilical cord previously passed through and acts as a
                    natural site of weakness in the abdominal wall.
                  </p>
                </FlyInSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ChartMileStone/> */}
      <FlyInSection>
        <HerniaPatientsChart />
      </FlyInSection>
      <section>
        <div className="md:max-w-[100%] m-auto p-4 py-[6rem]">
          <FlyInSection>
            <header>
              {/* <h4 className="uppercase text-[#449DD1] text-[30px] md:text-[45px] font-extrabold text-center w-[100%] md:w-[30%] m-auto my-[2rem] flex">
                {data.city} HERNIA SPECIALISTS
              </h4> */}
              {/* <h4 className="uppercase text-[#449DD1] text-[clamp(1.5rem,5vw,2.5rem)] font-extrabold text-center w-full whitespace-nowrap mx-auto my-[2rem]">
                {data.city} HERNIA SPECIALISTS
              </h4> */}
              <h4 className="uppercase text-[#449DD1] text-[clamp(1.5rem,5vw,2.5rem)] font-extrabold text-center w-full mx-auto my-[2rem]">
                <span className="block md:inline">{data.city}</span> HERNIA
                SPECIALISTS
              </h4>
            </header>
          </FlyInSection>
          <div className="cards md:flex  gap-7 my-10">
            <div className=" flex items-center">
              <FlyInSection>
                <div className="md:p-7 rounded-xl">
                  <h5 className="text-[#449DD1] text-[20px] md:text-[30px] font-extrabold  md:w-[80%] my-4">
                    How Do I Know If My Hernia Needs Surgery?
                  </h5>
                  <p className="text-[13px] md:text-[16px] pb-4 md:pb-0">
                    A hernia is a common but frequently misunderstood condition.
                    You may have a hernia if you have swelling and a bulge that
                    is able to be “pushed back” into your abdomen. If it
                    continues to grow, you will need to have hernia surgery in
                    order to repair it.
                  </p>
                </div>
              </FlyInSection>
            </div>
            <FlyInSection>
              <div className="md:p-7 rounded-xl">
                <motion.div
                  ref={ref}
                  initial={{ scale: 1.2 }} // initial zoomed-in
                  animate={controls}
                  className="overflow-hidden rounded-xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1744250052/ChatGPT_Image_Apr_10_2025_02_45_05_AM_ed46gd.png"
                      alt="Hernia Image"
                      width={"2000"}
                      height={"100"}
                      className="w-[2000] h-auto object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </FlyInSection>
            {/* <div className='p-7 rounded-xl'>
              <Image src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1744250052/ChatGPT_Image_Apr_10_2025_02_45_05_AM_ed46gd.png'} alt='Hernia Image' width={'2000'} height={'100'}/>
            </div> */}
          </div>
          <div className="cards flex flex-col-reverse md:flex-row  gap-7">
            <FlyInSection>
              <div className="md:p-7 rounded-xl">
              <motion.div
                  ref={ref}
                  initial={{ scale: 1.2 }} // initial zoomed-in
                  animate={controls}
                  className="overflow-hidden rounded-xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                <Image
                  src={
                    "https://res.cloudinary.com/wise-solution-inc/image/upload/v1744251241/ChatGPT_Image_Apr_10_2025_03_02_56_AM_1_vmbroo.png"
                  }
                  alt="Hernia Image"
                  width={"2000"}
                  height={"100"}
                  className="w-[2000] h-auto object-cover"
                />
                 </motion.div>
                 </motion.div>
              </div>
            </FlyInSection>
            <div className="flex items-center">
              <FlyInSection>
                <div className="md:p-7  rounded-xl ">
                  <h5 className="text-[#449DD1] text-[20px] md:text-[30px] font-extrabold  md:w-[80%] my-4">
                    How Long Does a Hernia Operation Take?
                  </h5>
                  <p className="text-[13px] md:text-[16px]">
                    The operation usually takes about 30 to 45 minutes to
                    complete and you&apos;ll usually be able to go home on the
                    same day. Some people stay in hospital overnight if they
                    have other medical problems or live on their own.
                  </p>
                </div>
              </FlyInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
