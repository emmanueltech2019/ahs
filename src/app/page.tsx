import React from 'react';
import { Icon } from '@iconify/react';
import data from './data';
import Link from 'next/link';
export default function Home() {
  const embedSrc = "https://sketchfab.com/models/48ee970a23964b59b9c85d06fff540f6/embed";
  const modelUrl = "https://sketchfab.com/3d-models/rt-inguinal-hernia-containing-the-bladder-48ee970a23964b59b9c85d06fff540f6?utm_medium=embed&utm_campaign=share-popup&utm_content=48ee970a23964b59b9c85d06fff540f6";
  const authorUrl = "https://sketchfab.com/tl0615?utm_medium=embed&utm_campaign=share-popup&utm_content=48ee970a23964b59b9c85d06fff540f6";

  return (
    <div>
      <section className="hero bg-[#00000058] bg-blend-overlay">
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
      </section>
      

      <section className='bg-[#fff] relative'>
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
      </section>

      <section className="risk bg-[#f4f4f4]">
        <div className='md:max-w-[85%] m-auto py-8 pb-[6rem]'>
          <header className='py-[3rem]'>
            <h2 className='text-[#449DD1] text-[20px] md:text-[30px] font-extrabold text-center'>
              {/* How Risky Is A Hernia */}
              WHAT IS AN HERNIA?
            </h2>
          </header>

          <div className='md:flex justify-center gap-[4rem]'>
            <div className="relative md:w-[70%] hernia-list bg-[#fff] p-8 ps-[4rem] m-4 rounded-lg">
            <h6 className='text-[25px] font-extrabold py-5'>Top types of Hernias</h6>
              <div className="absolute left-0 bg-[#449DD1] w-[40px] h-[30px]">

              </div>
              <ul className='grid gap-3 text-[#0000009b]'>
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
              </ul>
            </div>

            <div className='mt-[1rem]'>
              <div className="img h-[180px] md:h-[300px] overflow-hidden ">
                 <iframe
                        className="md:h-[320px] md:w-[590px] w-screen h-[50vh]"
                        src="https://www.youtube.com/embed/Oxar0r6-HEU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                {/* <Image src={img1} className=' object-cover h-full w-full scale-[180%] md:scale-[100%]' alt="hernia" /> */}
              </div>

              <div className="text p-4 font-[500] md:w-[80%]">
                <h1 className='font-bold text-[18px]'>Condition</h1>
                <p>
                  An incarcerated hernia can cut off blood flow to part of your intestine. Strangulation can lead to the death of the affected bowel tissue. A strangulated hernia is life-threatening and requires immediate surgery.
                  <br />
                  <br />
                  </p>
                  <h1 className='font-bold text-[18px]'>Symptoms</h1>
                  <p>
                  Symptoms of a strangulated hernia can include severe pain, nausea, vomiting, and fever. In some cases, a hernia can be gently pushed back into place, but a strangulated hernia requires surgery to repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='get-inTouch relative mb-[7rem]'>
        <div className='md:max-w-[85%] m-auto p-4 md:pb-[4rem]'>
          <div className="form bg-[#FFF] w-[350px] m-auto p-4 rounded-lg relative  top-[100px] md:left-[-30%] shadow-md">
            <header className='text-center'>
              <h2 className='text-[#449DD1] font-bold text-[23px] md:text-[26px]'>Get In Touch</h2>
              <p>Improve the quality if your life</p>
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
              Do You Need a Hernia Specialist?
            </h2>
          </header>

          <div className="hernias">
            <div className="inguinal md:flex flex-row-reverse gap-4">
              <div>
                {/* <Image src={inguinalImg} alt="alt" /> */}
                <div className="sketchfab-embed-wrapper w-[500px]">
      <iframe 
        title="Inguinal hernia"
        src={embedSrc}
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        className='w-[500px] h-[300px]'
      />
      {/* <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a href={modelUrl} target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
          RT inguinal hernia containing the bladder
        </a> by <a href={authorUrl} target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>tl0615</a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=48ee970a23964b59b9c85d06fff540f6" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>Sketchfab</a>
      </p> */}
    </div>
              </div>

              <div className="text md:w-[50%]">
                <h2 className='my-4 font-bold text-[20px]'>Inguinal Hernia</h2>
                <p className='font-[500] text-[#000000a4]'>
                  Inguinal hernias are the most common type of hernia encountered. They occur in women but occur more commonly in males. About 1 in 4 males will have an inguinal hernia at some point in their lifetime. The testicle descending from the abdomen into the scrotum predisposes males to have a natural weakness in the groin where inguinal hernias occur.
                </p>
                <p className='font-[500] text-[#000000a4] py-2'>
                  Inguinal hernias are the most common type of hernia encountered. They occur in women but occur more commonly in males. About 1 in 4 males will have an inguinal hernia at some point in their lifetime. The testicle descending from the abdomen into the scrotum predisposes males to have a natural weakness in the groin where inguinal hernias occur.
                </p>
              </div>
            </div>


            <div className="inguinal my-[4rem] md:flex gap-4">
              <div >
              <iframe src="https://human.biodigital.com/view?id=production/maleAdult/hiatal_hernia&lang=en&ref=share" width="500" height="400" frameBorder="0"></iframe>

                {/* <Image src={hiatalImg} alt="alt" /> */}
              </div>

              <div className="text md:w-[50%]">
                <h2 className='my-4 font-bold text-[20px]'>Hiatal Hernia</h2>
                <p className='font-[500] text-[#000000a4]'>
                  Hiatal hernias typically occur later in life and cause a myriad of symptoms. Symptoms may include heartburn, nausea, vomiting, regurgitation, abdominal pain, chest pain, difficulty swallowing, bloating, belching, or coughing. The term hiatal comes from hiatus (or opening), specifically the esophageal hiatus.
                </p>
                <p className='font-[500] text-[#000000a4] py-2'>
                  Hiatal hernias typically occur later in life and cause a myriad of symptoms. Symptoms may include heartburn, nausea, vomiting, regurgitation, abdominal pain, chest pain, difficulty swallowing, bloating, belching, or coughing. The term hiatal comes from hiatus (or opening), specifically the esophageal hiatus.
                </p>
              </div>

            </div>

            <div className="inguinal md:flex flex-row-reverse gap-4">
              {/* <div>
                <Image src={umblicalImg} alt="alt" />
              </div> */}
          <div className="md:m-auto">
                    <div className="md:pr-8 rounded-lg">
                      {/* <iframe
                        className="md:h-[320px] md:w-[590px] w-screen h-[50vh]"
                        src="https://www.youtube.com/embed/Oxar0r6-HEU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe> */}
                                    <iframe src="https://human.biodigital.com/view?id=production/maleAdult/umbilical_ventral_hernia&lang=en&ref=share" width="500" height="400" frameBorder="0"></iframe>

                    </div>
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

      <section >
        <div className='md:max-w-[85%] m-auto p-4 py-[6rem]'>
          <header>
            <h2 className='uppercase text-[#449DD1] text-[20px] md:text-[30px] font-extrabold text-center w-[50%] md:w-[30%] m-auto my-[2rem]'>
            {data.city} HERNIA SPECIALISTS
            </h2>

          </header>

          <div className="cards md:flex gap-7">
            <div className='p-7 shadow-xl rounded-xl'>
              <h2 className='text-[#449DD1] text-[20px] md:text-[30px] font-extrabold  md:w-[80%] my-4'>
                How Do I Know If My Hernia Needs Surgery?
              </h2>
              <p className='text-[13px] md:text-[16px]'>
                A hernia is a common but frequently misunderstood condition. You may have a hernia if you have swelling and a bulge that is able to be “pushed back” into your abdomen. If it continues to grow, you will need to have hernia surgery in order to repair it.
              </p>
            </div>
            <div className='p-7 shadow-xl rounded-xl'>
              <h2 className='text-[#449DD1] text-[20px] md:text-[30px] font-extrabold  md:w-[80%] my-4'>
              How Long Does a Hernia Operation Take?
              </h2>
              <p className='text-[13px] md:text-[16px]'>
              The operation usually takes about 30 to 45 minutes to complete and you&apos;ll usually be able to go home on the same day. Some people stay in hospital overnight if they have other medical problems or live on their own.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
