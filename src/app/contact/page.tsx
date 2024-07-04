"use client"
import React, { FormEvent, useState } from 'react'
import Hero from '../components/hero/Hero'
import Link from 'next/link'
import data from '../data'
import axios from 'axios'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

function Page() {
    const src = data.src
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://api-14hs.devemmy.com/contact',{name, email, message, brand:data.brand},{
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        } ).then(()=>{
           Toast.fire({
            icon: "success",
            text: "We would reach out to you shortly",
            timer: 2000
          }).then(()=>{
            setName("")
            setEmail("")
            setMessage("")
          })
        })
      } catch (error: any) {
        Toast.fire({
          icon: "error",
          text:"unsuccessful",
          timer: 2000
        })
        .then(()=>{
          // window.location.reload();
        })
        // Handle login errors (e.g., invalid credentials)
        // console.error('Login error:', error.response?.data); 
        // setError(error.response?.data.message || 'An error occurred.');
      }
    };
    return (
        <div>
            <Hero title={'Contact Us'} description={`Reach Out to our team for expert care, Support, and personalized solutions for your Hernia Surgery needs.`} />

            <section className='p-4'>
                <div className='md:max-w-[85%] m-auto'>


                    <div className='sm:flex justify-between gap-[7rem] items-baseline'>
                        <div className='sm:w-[40%]'>
                            <header className='text-[#449DD1] text-[20px] md:text-[30px] md:w-[100%] font-extrabold my-[1.5rem]'>
                                <h1>Get in Touch</h1>
                            </header>
                            <p className='text-[14px] leading-[25px] font-[400]'>
                                If you have any questions, require further assistance or want to book an appointment give us a call or send us a message.
                            </p>

                            <div className='md:flex justify-between my-[2rem]'>
                                <div className="email">
                                    <p className='text-[14px] leading-[25px]'>Email:</p>
                                    <Link href="#">
                                        <p className='md:w-[30%]'>info@{data.domain}</p>
                                    </Link>
                                </div>
                                {/* <div className="phone">
                                    <p className='text-[14px] leading-[25px]'>Phone:</p>
                                    <Link href="#">
                                        <p className='text-[18px]'>+00000000000</p>
                                    </Link>
                                </div> */}
                            </div>
                            <div className='mr-10'>
                                <iframe
                                    src={src}
                                    width="400"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps Bronx, NY" // Add a descriptive title for accessibility
                                />
                            </div>
                        </div>

                        <div className="form my-[3rem] sm:w-[50%]">
                            <header className='text-[#449DD1] text-[20px] md:text-[30px] m-auto font-extrabold my-[1.5rem]'>
                                <h1>Email us</h1>
                            </header>
                            <form className='grid gap-[2rem] p-[6rem] shadow-2xl rounded-[2rem]' onSubmit={handleSubmit}>
                                <div>
                                    <label className="text-[13.5px]" htmlFor="name">Name:</label><br />
                                    <input type="text" id='name' required value={name} onChange={(e)=>setName(e.target.value)} placeholder='Micheal Collin' className='outline-none border-[1px] border-[#0000006d] bg-transparent p-[1rem] w-full rounded-full' />
                                </div>

                                <div>
                                    <label className="text-[13.5px]" htmlFor="email">Email:</label><br />
                                    <input type="email" id='email' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email@example.com' className='outline-none border-[1px] border-[#0000006d] bg-transparent p-[1rem] w-full rounded-full' />
                                </div>

                                <div>
                                    <label className="text-[13.5px]" htmlFor="message">Message:</label><br />
                                    <textarea name="comment" id="message" required value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Leave us a Message...' className='outline-none border-[1px] border-[#0000006d] bg-transparent p-[2rem] w-full rounded-full'></textarea>
                                </div>

                                <div className='text-center '>
                                    <button className='bg-[#449dd1] text-[#fff] w-full p-[1rem] rounded-full text-[16px]' type='submit'>SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page