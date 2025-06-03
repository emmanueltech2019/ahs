"use client";
import React, { useRef, useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Image from "next/image";
import docImg from "../../components/assets/images/image 5.png";
import { Icon } from "@iconify/react";
import inguinalImg from "../components/assets/images/image 3.png";
import hiatalImg from "../components/assets/images/image 4.png";
import umblicalImg from "../components/assets/images/Bronx Hernia Specialists _ Hernia Surgery - Opera 5_15_2023 4_38_28 PM 1 (1).png";
import specialtyImg from "../../components/assets/images/Does Every Umbilical Hernia Corrects Itself_ Know here https___goo_gl_jGw3rE 1.png";
import data from "../../data";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import gallbladderImg from ".././img/image copy 6.png";
import daVinciImg from ".././img/image copy 5.png";
import breastImg from ".././img/image copy 4.png";
import smallImg from ".././img/image copy 3.png";
import mastectomyImg from ".././img/image copy 2.png";
import colonImg from ".././img/image copy.png";
import endoscopyImg from ".././img/image.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ImageOrbit from "../../components/3d/ImageOrbit";
import axios from "axios";
import { usePathname } from "next/navigation";
import FlyInSection from "@/app/components/FlyInSection/FlyInSection";
import Head from "next/head";

function Page() {
  const imageMap = {
    Hernia: specialtyImg,
    Gallbladder: gallbladderImg,
    "Da Vinci Robotic Surgery": daVinciImg,
    "Breast Cancer": breastImg,
    "Small Intestine": smallImg,
    Mastectomy: mastectomyImg,
    "Colon Surgery": colonImg,
    Endoscopy: endoscopyImg,
  };

  const [specialties, setSpecialties] = useState([]);
  const [segment, setSegment] = useState<string | null>(null);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const pathname = usePathname();

  interface Review {
    name: string;
    review: string;
  }

  interface Doctor {
    firstName: string;
    lastName: string;
    bio: string;
    reviews: Array<Review>;
    paid: Boolean;
    image: string;
    keyphrase: string;
  }

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    setSegment(lastSegment);
  }, [pathname]);

  useEffect(() => {
    if (segment) {
      axios
        .get(`https://14hsdashboard.chop-life.com/user/get-doctor/${segment}`)
        .then((res) => {
          setDoctor(res.data);
          setSpecialties(res.data.specialties);
          console.log("doctor", res.data); // Log the response data directly
        })
        .catch((err) => {
          console.error("err", err);
        });
    }
  }, [segment]); // Add 'segment' as a dependency
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
    <div className="w-screen">
      <Head>
        <title>
          Dr. {doctor?.firstName} {doctor?.lastName} | Austin Hernia Specialist
        </title>
        <meta
          name="description"
          content="Learn about a leading hernia surgeon in Austin, TX. Specializing in inguinal, hiatal, and umbilical hernia repairs with advanced techniques."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Austin Hernia Specialists" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Austin Hernia Specialist" />
        <meta
          property="og:description"
          content="Meet a hernia surgeon in Austin specializing in advanced hernia repair techniques."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Austin Hernia Specialist" />
        <meta
          name="twitter:description"
          content="Meet a hernia surgeon in Austin, TX. Inguinal, hiatal, and laparoscopic hernia repairs."
        />
        <meta name="twitter:image" content="" />

        {/* Canonical URL */}
        {/* <link rel="canonical" href="https://austinherniaspecialists.com/doctor/vineet-choudhry" /> */}
      </Head>

      <Hero title={""} description={""} />
      <section className="doctor text-[#449DD1] bg-gradient-to-r from-[#d4d4d4] via-white to-[#d4d4d4] text-black">
        <div className="md:max-w-[85%] m-auto pt-[1rem] p-4 pb-[2rem] ">
          <FlyInSection>
            <header className="bg-white/10 backdrop-blur-md border border-white/30 w-[95%] lg:w-[60%] m-auto left-[11px] lg:left-[20%] md:h-[30vh] h-[30vh] flex gap-3 md:gap-[100px] md:items-center shadow-lg absolute top-[20vh] md:top-[20vh] py-3 px-[1rem] text-white rounded-xl  items-center justify-center">
              <div className="doc-img w-[130px] md:w-[230px] h-full md:h-[230px] my-auto flex justify-center items-center">
                <Image
                  src={doctor?.image ? doctor.image : ""}
                  width="300"
                  height="300"
                  className="md:rounded-full rounded w-[400] h-[400]"
                  alt="Doctor Image"
                />
              </div>
              <div className="doc-stat flex flex-col gap-[5px]">
                <header className="leading-[6mm] md:leading-[10mm]">
                  <h5 className="text-[#449DD1] font-bold text-[18px] md:text-[30px] capitalize">
                    {doctor?.firstName} {doctor?.lastName}, MD
                  </h5>
                  <p className="font-[500] flex items-center font-bold p-0 m-0 md:text-[15px]">
                    General Surgeon
                  </p>
                </header>

                <div className="location">
                  <p className="text-[7px] md:text-[11px]">
                    Surgeon in {data.city}, {data.state}
                  </p>
                </div>
                <div className="flex gap-[1rem]">
                  {/* <p className="flex items-center gap-2 md:text-[18px]">
                  <Icon icon="ph:seal-check-fill" className="text-[#379c4a]" />{" "}
                  Certified
                </p> */}
                  <p className="flex items-center gap-2 md:text-[18px] text-[8px]">
                    <Icon icon="mdi:briefcase" className="text-[#fff]" />{" "}
                    Accepting new patients
                  </p>
                </div>
                <div className="rating flex ">
                  {/* <small className="text-[7px] md:text-[15px] font-bold pr-3">
                   5.0
                </small> */}
                  <div className="flex items-center md:text-[35px]">
                    <Icon
                      icon="material-symbols:star"
                      className="text-[30px] text-[#eae249]"
                    />
                    <Icon
                      icon="material-symbols:star"
                      className="text-[30px] text-[#eae249]"
                    />
                    <Icon
                      icon="material-symbols:star"
                      className="text-[30px] text-[#eae249]"
                    />
                    <Icon
                      icon="material-symbols:star"
                      className="text-[30px] text-[#eae249]"
                    />
                    <Icon
                      icon="material-symbols:star"
                      className="text-[30px] text-[#eae249]"
                    />
                  </div>
                </div>
                {doctor?.paid && (
                  <>
                    <hr className="border-white/20" />
                    <div>
                      <p className="text-[12px] flex items-center gap-2">
                        <PlaceOutlinedIcon />
                        2217 Park Bend Dr Suite 220, Austin, TX 78758, United
                        States
                      </p>
                    </div>
                  </>
                )}
              </div>
            </header>
          </FlyInSection>
          {doctor?.paid && (
            <div className="md:pt-[12vh] pt-[1vh] flex justify-center bg-[#449DD1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13763.986941897567!2d-97.7039637!3d30.4078345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cea00a3afa9d%3A0xfcf0dc2201bf30ab!2sNorthStar%20Surgery%20Specialists%2C%20PA!5e0!3m2!1sen!2sng!4v1719840366977!5m2!1sen!2sng"
                width="100%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
          <FlyInSection>
            <div className="info gap-8 justify-between md:mt-5 md:w-[80%] m-auto text-justify py-8">
              <h4
                className={`text-[#449DD1] font-bold text-[20px] md:text-[30px] text-center capitalize py-5
                   ${doctor?.paid ? "" : "md:pt-2"}`}
              >
                About Dr. {doctor?.lastName}
              </h4>
              <p className="md:text-[18px] text-[15px] font-[500] leading-[8mm] md:w-[100%] text-center">
                {doctor?.bio}
              </p>
            </div>
          </FlyInSection>
        </div>
      </section>
      {/* <div className="bg-gradient-to-r from-[#d4d4d4] via-white to-[#d4d4d4] p-10 rounded-lg shadow-lg">
        <h1 className="text-center text-xl font-bold text-black">
          Shiny Gradient
        </h1>
      </div> */}
      <div className="cards md:flex  gap-7 my-10 md:w-[60vw] w-[90vw] mx-auto">
        <div className=" flex items-center">
          <FlyInSection>
            <div className="md:p-7 rounded-xl text-center">
              <h1 className="text-[#449DD1] text-[20px] md:text-[35px] font-extrabold  md:w-[100%] my-4 capitalize ">
                Learn More About {doctor?.keyphrase}
              </h1>
              <p className="text-[13px] md:text-[16px] pb-4 md:pb-0 text-center">
                {doctor?.keyphrase} is an important topic for anyone concerned
                about hernia-related conditions. Whether you&apos;re exploring
                treatment options, experiencing symptoms, or seeking expert
                surgical care, our team is here to provide trusted information
                and support every step of the way.
              </p>
            </div>
          </FlyInSection>
        </div>
      </div>
      <section className="specialties py-5">
        <div className="md:max-w-[85%] m-auto p-4">
          <header>
            <FlyInSection>
              <h2 className="text-[#449DD1] text-[20px] md:text-[35px] font-extrabold text-center capitalize py-5">
                Dr. {doctor?.lastName} Specialties
              </h2>
            </FlyInSection>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 my-4 justify-center items-center m-auto w-full">
            {specialties.map((specialty, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <FlyInSection>
                  <Image
                    src={imageMap[specialty]}
                    className="h-[170px] rounded-lg"
                    alt={specialty}
                  />
                  <div
                    className={`absolute h-full w-full flex flex-col items-center justify-center ${
                      specialty === "Hernia" ? "-bottom-[5%]" : "-bottom-[0%]"
                    } bg-[#0000006f]`}
                  >
                    <Icon
                      icon="material-symbols:health-metrics"
                      className="text-[40px] text-[#fff]"
                    />
                    <span className="text-[20px] text-[#fff] font-[500] text-center">
                      {specialty}
                    </span>
                  </div>
                </FlyInSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="get-inTouch relative py-24 flex justify-center items-center">
        <div className="w-full max-w-4xl px-4">
          <div className="form bg-white/10 backdrop-blur-md border border-white/30 w-full max-w-xl mx-auto p-6 rounded-lg shadow-lg">
            <header className="text-center">
              <FlyInSection>
                <h5 className="text-[#449DD1] font-bold text-[23px] md:text-[26px]">
                  Get In Touch
                </h5>
                <p className="my-6 text-white capitalize">
                  With Dr. {doctor?.lastName}
                </p>
              </FlyInSection>
            </header>
            <FlyInSection>
              <form className="bg-transparent grid grid-cols-2 gap-4">
                <div className="col-span-2 border border-white/20 p-3 rounded-xl bg-white/5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full outline-none bg-transparent text-white placeholder-white/70"
                  />
                </div>
                <div className="border border-white/20 p-3 rounded-xl col-span-1 bg-white/5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none bg-transparent text-white placeholder-white/70"
                  />
                </div>
                <div className="border border-white/20 p-3 rounded-xl col-span-1 bg-white/5">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full outline-none bg-transparent text-white placeholder-white/70"
                  />
                </div>
                <div className="col-span-2 border border-white/20 p-3 rounded-xl bg-white/5">
                  <select
                    name="reason-for-contact"
                    id="reason"
                    className="w-full outline-none bg-transparent text-white"
                  >
                    <option value="reason1" className="text-black">
                      Reason for contact
                    </option>
                    <option value="surgery-appointment" className="text-black">
                      Surgery Appointment
                    </option>
                    <option value="in-house-appointment" className="text-black">
                      In-house Appointment
                    </option>
                    <option value="other" className="text-black">
                      Other
                    </option>
                  </select>
                </div>
                <div className="col-span-2 p-3 rounded-full text-center text-white bg-[#449DD1] hover:bg-[#3784b3] transition-all duration-300">
                  <button type="submit" className="w-full">
                    SUBMIT
                  </button>
                </div>
              </form>
            </FlyInSection>
          </div>
        </div>
      </section>

      <section className="do-you-need">
        <div className="md:max-w-[85%] m-auto p-4">
          <FlyInSection>
            <header className="py-[3rem]">
              <h3 className="text-[#449DD1] text-[20px] md:text-[35px] font-extrabold text-center md:w-90%] m-auto pt-20">
                Do You Need A Hernia Specialist?
              </h3>
            </header>
          </FlyInSection>
          <div className="hernias">
            <FlyInSection>
              <div className="inguinal md:flex flex-row-reverse gap-4 justify-center align-center items-center">
                <div className="md:w-[50vw] md:h-[40vh]">
                  <ImageOrbit imageUrl="https://res.cloudinary.com/wise-solution-inc/image/upload/v1719851207/inguinal-hernia_p6n6lc.png" />
                </div>

                <div className="text md:w-[50%]">
                  <h4 className="my-4 font-bold text-[25px] text-[#449DD1]">
                    Inguinal Hernia
                  </h4>
                  <p className="font-[500] text-[#000000a4]">
                    Inguinal hernias are the most common type of hernia
                    encountered. They occur in women but occur more commonly in
                    males. About 1 in 4 males will have an inguinal hernia at
                    some point in their lifetime. The testicle descending from
                    the abdomen into the scrotum predisposes males to have a
                    natural weakness in the groin where inguinal hernias occur.
                  </p>
                  <div className="col-span-2 p-3 w-fit px-10 my-10 rounded-full text-center text-white bg-[#449DD1] hover:bg-[#3784b3] transition-all duration-300">
                    <a
                      target="_black"
                      href="https://www.intuitive.com/en-us/patients/procedures/general-surgery/hernia-surgery"
                      type="submit"
                      className="w-full"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </FlyInSection>
            <FlyInSection>
              <div className="inguinal my-[4rem] md:flex gap-4 justify-center align-center items-center">
                <div className="md:w-[50vw] md:h-[40vh]">
                  <ImageOrbit imageUrl="https://res.cloudinary.com/wise-solution-inc/image/upload/v1719852288/haital-hernia_j1nqeu.png" />
                </div>
                <div className="text md:w-[50%]">
                  <h4 className="my-4 font-bold text-[25px] text-[#449DD1]">
                    Hiatal Hernia
                  </h4>
                  <p className="font-[500] text-[#000000a4]">
                    Hiatal hernias typically occur later in life and cause a
                    myriad of symptoms. Symptoms may include heartburn, nausea,
                    vomiting, regurgitation, abdominal pain, chest pain,
                    difficulty swallowing, bloating, belching, or coughing. The
                    term hiatal comes from hiatus (or opening), specifically the
                    esophageal hiatus.
                  </p>
                  <div className="col-span-2 p-3 w-fit px-10 my-10 rounded-full text-center text-white bg-[#449DD1] hover:bg-[#3784b3] transition-all duration-300">
                    <a
                      target="_black"
                      href="https://www.medtronic.com/en-us/healthcare-professionals/specialties/hernia-repair-surgery.html#aq=%40pagetype%3D%22product-model%22&cq=%40medicalspecialties%3D%22Hernia%20repair%20surgery%22%20OR%20%40ontology_isa%3D%22Hernia%20repair%20surgery%22"
                      type="submit"
                      className="w-full"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </FlyInSection>
            <FlyInSection>
              <div className="inguinal md:flex flex-row-reverse gap-4 justify-center align-center items-center">
                <div className="md:w-[50vw] md:h-[40vh]">
                  <ImageOrbit imageUrl="https://res.cloudinary.com/wise-solution-inc/image/upload/v1720021228/umblical-removebg-preview_pupiag.png" />
                </div>
                <div className="text md:w-[50%]">
                  <h4 className="my-4 font-bold text-[25px] text-[#449DD1]">
                    Umbilical Hernia
                  </h4>
                  <p className="font-[500] text-[#000000a4]">
                    Umbilical hernias are one of the most common hernias
                    encountered. They are naturally occurring hernias, common in
                    all ages from infants to the elderly. They occur at the
                    navel, also known as the umbilicus. This is the site that
                    the umbilical cord previously passed through and acts as a
                    natural site of weakness in the abdominal wall.
                  </p>
                  <div className="col-span-2 p-3 w-fit px-10 my-10 rounded-full text-center text-white bg-[#449DD1] hover:bg-[#3784b3] transition-all duration-300">
                    <a
                      target="_black"
                      href="https://my.clevelandclinic.org/health/diseases/umbilical-hernia"
                      type="submit"
                      className="w-full"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </FlyInSection>
          </div>
        </div>
      </section>

      <section className="reviews showscrool">
        <FlyInSection>
          <header className="py-[1rem]">
            <h2 className="text-[#449DD1] text-[20px] md:text-[35px] font-extrabold text-center md:w-90%] m-auto pt-20">
              Patient Testimonials
            </h2>
          </header>
        </FlyInSection>
        <div className="md:max-w-[85%] m-auto p-4 py-[2rem] showscrool">
          <Swiper
            className="px-[2rem] showscrool"
            modules={[Pagination, A11y]}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
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
            {doctor?.reviews.map((review, index) => (
              <SwiperSlide
                className="p-3 md:p-[4rem] shadow-lg rounded-xl my-[3rem] max-h-[400px] min-h-[400px] py-5 overflow-scroll "
                key={index}
              >
                <div className="rating flex items-center text-[18px]">
                  <Icon
                    icon="material-symbols:star"
                    className="text-[#eae249]"
                  ></Icon>
                  <Icon
                    icon="material-symbols:star"
                    className="text-[#eae249]"
                  ></Icon>
                  <Icon
                    icon="material-symbols:star"
                    className="text-[#eae249]"
                  ></Icon>
                  <Icon
                    icon="material-symbols:star"
                    className="text-[#eae249]"
                  ></Icon>
                  <Icon
                    icon="material-symbols:star"
                    className="text-[#eae249]"
                  ></Icon>
                </div>
                <div className="review text-[14px] md:text-[18px]">
                  <h6 className="font-bold my-[.5rem]">{review?.name}</h6>
                  <p>{review?.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-white h-[40vh] text-center">
        <h1>Payment Section</h1>
      </section>
    </div>
  );
}

export default Page;
