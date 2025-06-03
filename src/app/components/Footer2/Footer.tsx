import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaUserMd } from "react-icons/fa";
import data from "@/app/data";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer   className="relative text-white px-6 py-12 bg-gradient-to-r from-[#06142E] to-[#1B1832]"
 style={{
            backgroundImage:
              "url(https://res.cloudinary.com/wise-solution-inc/image/upload/v1748953920/surgeons-in-operating-room-davinci-system_ls0tfz.avif)",
              backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
          }}>
              <div className="absolute inset-0 bg-black opacity-80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-5 gap-10 text-sm">
        {/* Branding */}
        <div>
        <Link href="/">
                <Image src={data.logo} width={"150"} height={"100"} alt="alt" />
              </Link>
          <p className="text-gray-300 mb-4">
            AHS connects you with the top rated local Surgeons providing hernia procedures, hernia treatments, hernia surgeries.
          </p>
          <div className="flex gap-4 text-[#449DD1]  text-xl">
            <FaInstagram />
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-2 uppercase">Hernia</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Hernia Surgery</li>
            <li>Hernia Surgeon</li>
            <li>Hernia Repair</li>
            <li>Hernia Procedures</li>
            <li>Hernia Treatments</li>
            <li>Hernia Symptoms</li>
          </ul>
        </div>

        {/* Innovation Hub */}
        <div>
          <h4 className="font-semibold mb-2 uppercase">Inguinal</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Inguinal Hernia Surgery</li>
            <li>Inguinal Hernia Surgeon</li>
            <li>Inguinal Hernia Repair</li>
            <li>Inguinal Hernia Procedures</li>
            <li>Inguinal Hernia Treatments</li>
             <li>Inguinal Hernia Symptoms</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2 uppercase">Hiatal</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Hiatal Hernia Surgery</li>
            <li>Hiatal Hernia Surgeon</li>
            <li>Hiatal Hernia Repair</li>
            <li>Hiatal Hernia Procedures</li>
            <li>Hiatal Hernia Treatments</li>
            <li>Hiatal Hernia Symptoms</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-2">CONTACT US</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-[#449DD1]" /> Call us</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-[#449DD1]" /> Message us</li>
            <li className="flex items-center gap-2"><FaCalendarAlt className="text-[#449DD1]" /> Schedule</li>
            <li className="flex items-center gap-2"><FaUserMd className="text-[#449DD1]" /> Refer Surgeon</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center mt-12 text-white text-sm relative z-10 ">
        <p className="mt-2 text-white">© 2025 Austin Hernia Specialists.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
