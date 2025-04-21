// components/Footer.tsx
import data from "@/app/data";
import Link from "next/link";
import React from "react";
import FlyInSection from "../FlyInSection/FlyInSection";
import Bar from "../../components/bar/Bar";

const Footer: React.FC = () => {
  return (
    <>
      <FlyInSection>
        <div
          className=" text-white p-8 relative bg-cover bg-center center h-fit"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/wise-solution-inc/image/upload/v1745230661/Group_15_uwov6m.png)",
          }}
        >
          <div className=" bg-opacity-75 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="text-center md:text-center">
                  <h2 className="text-2xl font-bold mb-4 text-[#fff]">
                    Have Questions?
                  </h2>
                  <p className="mb-6">
                    Our team is dedicated to providing you with the information
                    and support you need.
                  </p>
                  <Link href={`mailto:info@${data.domain}`}>
                    <button className="border-solid border-white border-2 text-white px-4 py-2 rounded-full ">
                      Send Email
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-screen py-10 bg-[radial-gradient(circle_at_center,_#ffffff,_#DBDADA)]">
          <FlyInSection>
            <Bar />
          </FlyInSection>
        </div>
        <div className="mt-8 text-left md:px-20 md:px-10 px-2 md:py-10 py-3 pb-24 md:text-left">
          <p className="text-sm">
            <strong>Disclaimer:</strong> We are a medical marketing entity. We
            are not considered a medical practice, institution or hospital.
            Please know that email communication via our website may not be done
            through a secure platform. Although it is unlikely, there is a
            possibility that information you include in your submission can be
            intercepted and read by parties other than the intended recipient.
            To protect your confidential information, please do not include
            personal identifying information such as your birth date or personal
            medical information in any emails or website submissions you send to
            us.
          </p>
          <div className="md:flex  justify-between text-center md:text-left">
            <p className="text-sm mt-4">
              © 2024 {data.brand} All rights reserved.
            </p>
            <div className="flex justify-around md:justify-between space-x-4 mt-2">
              <a href="#" className="text-sm">
                | Privacy Policy
              </a>
              {/* <span>|</span> */}
              <a href="#" className="text-sm">
                | Terms of Service
              </a>
            </div>
          </div>
        </div>
      </FlyInSection>
    </>
  );
};

export default Footer;
