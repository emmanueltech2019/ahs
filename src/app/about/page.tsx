import React from 'react'
import Hero from '../components/hero/Hero'
import SurgImg from "../components/assets/images/who-are-we.jpg"
import Image from 'next/image'
import offerImg from '../components/assets/images/img-1.png'
import offerImg2 from '../components/assets/images/img-2.png'
import data from '../data'

function page() {
  return (
    <div className=''>
      <Hero title={'About'} description={`Your trusted destination for premier hernia care in ${data.city} and Surrounding Areas.`} />
      {/* <div className='flex md:px-32 py-20 h-[50vh]'>
            <Image src={SurgImg} className='w-[100%] h-[100%]' alt='Surgeon looking to a testecope'/>
            <div>
                <h2>Lorem ipsum dolor sit</h2>
                <p>Lorem ipsum dolor sit amet consectetur. In purus at volutpat viverra luctus diam. Mollis nibh felis elit nunc iaculis. Mollis gravida eget mattis fringilla porta tellus. Orci enim sit massa cras. Fermentum venenatis in enim turpis nisl tortor pretium. Pellentesque senectus vel eu ullamcorper et odio congue suspendisse. Augue hendrerit amet eu tempor euismod. Interdum cursus imperdiet porta vitae leo sodales. Sit gravida eget malesuada amet laoreet accumsan ultricies faucibus. </p>
            </div>
        </div> */}
      <div className="md:max-w-[85%] m-auto inguinal my-[4rem] md:px-32 px-5 md:flex gap-10 text-left">
        <div >
          <Image src={SurgImg} alt="alt" className='rounded-xl h-[300px] w-[500px]' />
        </div>

        <div className="text-left md:w-[50%]">
          <h2 className='text-[#449DD1] text-[20px] md:text-[30px] py-7 m-auto font-extrabold text-left'>
          Who we are
          </h2>
          <p className='font-[500] text-[#000000a4]'>
          Welcome to {data.brand} ({data.city} hernia specialists), your trusted resource for finding top-rated hernia specialists near you. We understand that dealing with a hernia can be challenging and finding the right specialist is crucial for your health and peace of mind. Our mission is to make this process as simple and efficient as possible. we are dedicated to connecting hernia patients with experienced and qualified specialists in their area
          </p>
        </div>
      </div>
      <div className="text-center gap-7 bg-[#F4F4F4] md:h-[700px] space-y-5 pt-[4rem] md:px-32 px-5">

        <h2 className='text-[#449DD1] text-[20px] md:text-[30px] md:w-[30%] m-auto font-extrabold text-center'>
        What We Offer
        </h2>
        <p className='text-[#6B6B6B] py-5 w-[70%] md:w-[40%] m-auto'>How We help connect you to experienced and qualified specialists in their area </p>

        <div className="cards flex md:flex-row flex-col spcace-y-10 md:space-y-0 gap-7 bg-[#F4F4F4] text-left ">
          <div className=' shadow-xl rounded-xl md:flex bg-white'>
            <Image src={offerImg} alt='' className='md:w-[331px] h-[301px] rounded-xl ' />
            <div className='text-[13px] md:text-[12px] p-3'>
              <ul className="list-disc ps-8 flex flex-col gap-3">
                <li>
                  Comprehensive Directory: Our website features an extensive directory of hernia specialists, including surgeons and clinics with proven expertise in hernia treatment.
                </li>
                <li>
                  Verified Reviews: Read genuine reviews from other patients who have undergone hernia procedures. Our verified reviews offer insights into the quality of care and patient experiences with each specialist.
                </li>
              </ul>
            </div>
          </div>
          <div className=' shadow-xl rounded-xl md:flex bg-white '>
            <Image src={offerImg2} alt='' className='md:w-[331px] h-[301px] rounded-xl ' />
            <div className='text-[13px] md:text-[12px] p-3'>
              <ul className="list-disc ps-8 flex flex-col gap-3">
                <li>
                Detailed Profiles: Each specialist&apos; profile includes their credentials, areas of expertise, patient testimonials, and contact information, helping you to find the best match for your needs.
                </li>
                <li>
                User-Friendly Search: Our intuitive search and filter options allow you to easily find specialists based on location, ratings, and specific criteria relevant to your condition.
                </li>
              </ul>  
            </div>
          </div>
        </div>
      </div>

      <div className="container md:max-w-[80%] mx-auto px-4 py-8">
        <div className="flex flex-col gap-[4rem] text-[13px]">
          <div className='pb-10'>
            <h2 className="text-2xl font-bold mb-4 text-[#449DD1]"> Why Choose Us</h2>
            <p className="mb-4">
              Trusted Information: Accuracy and reliability are at the core of our platform. We meticulously verify all information and reviews to ensure you are accessing trustworthy data about your potential healthcare providers. Each specialist listed on our site undergoes a thorough vetting process, including verification of their credentials, experience, and patient feedback. This rigorous approach ensures that you can trust the information you find on [Website Name], giving you peace of mind as you make crucial decisions about your health.
            </p>
            <p className="mb-4">
              Patient-Centered: We prioritize your health and satisfaction above all. Our platform is designed to empower you with the knowledge and resources you need to make confident healthcare decisions. We provide detailed profiles of each specialist, including their areas of expertise, treatment methods, and patient testimonials. Our goal is to give you a comprehensive understanding of your options so you can choose the best care tailored to your specific needs. Your journey to recovery is our top priority, and we are here to support you every step of the way.
            </p>
            <p className="mb-4">
              Community Support: Joining {data.brand} means becoming part of a supportive community of patients. Share your experiences, ask questions, and connect with others who are on similar journeys. Our platform not only connects you with top specialists but also with fellow patients who understand what you&apos;re going through. This community aspect fosters a sense of belonging and support, making your healthcare experience more collaborative and less isolating. Whether you need advice, reassurance, or just a listening ear, our community is here for you.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#449DD1]">Privacy Policy</h2>
            <p className="mb-4">
              We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>
            <div>
              <p className='my-[1rem]'>Information We Collect</p>
              <ul className=' list-disc ps-8 flex flex-col gap-3'>
                <li>
                  Personal Information: When you sign up or contact us, we may collect your name, email address, and phone number.
                </li>
                <li>
                  Usage Data: We collect information on how you use our site, such as pages visited, time spent on the site, and other analytical data.
                </li>
              </ul>
            </div>
            <div>
              <p className='my-[1rem]'>How We Use Your Information</p>
              <ul className=' list-disc ps-8 flex flex-col gap-3'>
                <li>
                  To provide and improve our services.
                </li>
                <li>
                  To communicate with you about your account or services.
                </li>
                <li>
                  To personalize your experience on our site.
                </li>
                <li>
                  To analyze site usage and improve our platform.
                </li>
              </ul>
            </div>
            <p className="mb-4">
              Data Security We implement security measures to protect your personal information from unauthorized access or disclosure.
            </p>
            <p className="mb-4">
              Third-Party Services We do not sell or share your personal information with third parties except for trusted partners who help us operate our website and services, and who agree to keep this information confidential.
            </p>
            <p>
              Your Choices You can update your personal information or unsubscribe from our communications at any time by contacting us.
            </p>
          </div>
          <div className='grid md:grid-cols-2 items-center gap-[7rem] md:col-span-2'>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#449DD1]">Terms and Conditions</h2>
              <p>
                By using our website, you agree to these Terms and Conditions. Please read them carefully.
              </p>

              <div>
                <p className='my-[1rem]'>Use of the site</p>
                <ul className="list-disc ps-8 flex flex-col gap-3">
                  <li>
                    You agree to use the site only for lawful purposes and in accordance with these Terms.
                  </li>
                  <li>
                    You agree to accept responsibility for all activities that occur under your account.
                  </li>
                </ul>
              </div>
              <div>
                <p className='my-[1rem]'>Content and Reviews</p>
                <ul className="list-disc ps-8 flex flex-col gap-3">
                  <li>
                    By submitting reviews or other content to our site, you grant us the right to use, reproduce, and modify such content.
                  </li>
                  <li>
                    Reviews must be based on your personal experience and be truthful and accurate.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <p className='my-[1rem]'>Intellectual Property</p>
                <ul className="list-disc ps-8 flex flex-col gap-3">
                  <li>
                    All content on our site, including text, graphics, logos, and images, is the property of [Website Name] or its content suppliers and is protected by intellectual property laws.
                  </li>
                </ul>
              </div>
              <div>
                <p className='my-[1rem]'>Limitation of Liability</p>
                <ul className="list-disc ps-8 flex flex-col gap-3">
                  <li>
                    Our site is provided &quot;as is&quot; without any warranties, express or implied.
                  </li>
                  <li>
                    We are not liable for any damages arising from the use of our site.
                  </li>
                </ul>
              </div>
              <p className='my-[1rem]'>
                Changes to Terms We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms on our site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page