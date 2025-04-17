import React from 'react'
import Hero from '../components/hero/Hero'
import Accordion from './components/Accordion'
import FlyInSection from '../components/FlyInSection/FlyInSection'
function page() {
    return (
        <div>
            <Hero title={'FAQ'} description={'Find answers to your most common questions and get the information you need quickly and easily'} />

            <FlyInSection>
            <section className="questions">
                <div className='md:max-w-[75%] m-auto p-4'>
                    <Accordion title={<h2 className='font-bold rounded-full'>What is a hernia?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full' >
                        <p>
                            A hernia occurs when an organ or tissue pushes through a weak spot in the surrounding muscle or connective tissue. Common types include inguinal (groin), umbilical (navel), and hiatal (upper stomach) hernias.
                        </p>
                    </div>

                    } />

                    <Accordion title={<h2 className='font-bold'>What are the symptoms of hernia?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            Symptoms of a hernia can include a noticeable bulge, pain or discomfort, especially when bending over, coughing, or lifting, and a heavy or aching sensation at the site. Some hernias may not cause symptoms but can still pose risks if untreated.
                        </p>

                    </div>

                    } />

                    <Accordion title={<h2 className='font-bold'> How is a hernia diagnosed?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 mb-5 rounded-full' >
                        <p>
                            A hernia is usually diagnosed through a physical examination by a specialist. In some cases, imaging tests such as an ultrasound, CT scan, or MRI may be needed to confirm the diagnosis and determine the extent of the hernia.
                        </p>
                    </div>

                    } />

                    <Accordion title={<h2 className='font-bold'>What are the treatment options for a hernia?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            Treatment options vary depending on the type and severity of the hernia. They can range from watchful waiting for asymptomatic cases to surgical repair for symptomatic or large hernias. Surgery can be performed through open repair or minimally invasive laparoscopic techniques.
                        </p>
                    </div>

                    } />

                    <Accordion title={<h2 className='font-bold'>What is minimally invasive hernia surgery?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            Minimally invasive hernia surgery, or laparoscopic surgery, involves making small incisions and using a camera and specialized instruments to repair the hernia. This technique typically results in less pain, shorter recovery time, and minimal scarring compared to traditional open surgery.
                        </p>

                    </div>

                    } />

                    <Accordion title={<h2 className='font-bold'>How long is the recovery period after hernia surgery?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            Recovery time can vary depending on the type of surgery and the individual patient. Generally, patients can return to light activities within a week and resume normal activities, including work, within two to four weeks. Full recovery may take a few months.
                        </p>
                    </div>

                    } />

                    <Accordion title={<h2 className='font-bold'>Are there risks associated with hernia surgery?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            As with any surgery, there are risks involved, including infection, bleeding, and complications related to anesthesia. However, hernia surgery is generally safe, and complications are rare. Our specialists will discuss all potential risks with you prior to the procedure.
                        </p>

                    </div>

                    } />
                    <Accordion title={<h2 className='font-bold'> Can a hernia come back after surgery?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            While hernia recurrence is possible, the risk is relatively low, especially with modern surgical techniques. Following your surgeon&apos;s post-operative care instructions and maintaining a healthy lifestyle can further reduce the risk of recurrence.
                        </p>

                    </div>

                    } />
                    <Accordion title={<h2 className='font-bold'>How can I prevent a hernia?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            While not all hernias can be prevented, you can reduce your risk by maintaining a healthy weight, avoiding heavy lifting, eating a high-fiber diet to prevent constipation, and practicing good lifting techniques. Regular exercise to strengthen the abdominal muscles can also help.
                        </p>

                    </div>

                    } />
                    <Accordion title={<h2 className='font-bold'>How do I schedule a consultation with a hernia specialist?</h2>} answer={<div className='my-[2rem] text-[14px] flex flex-col gap-5 rounded-full'>
                        <p>
                            To schedule a consultation, you can call us at [Your Clinic&apos;s Phone Number] or email us at appointments@[yourclinicname].com. Our team will be happy to assist you in setting up an appointment at a convenient time.
                        </p>

                    </div>

                    } />


                </div>

            </section>
            </FlyInSection>
        </div>
    )
}

export default page