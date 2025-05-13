"use client"
import { useState } from "react";
import { CardOutline, CallOutline, CalendarOutline, DocumentTextOutline, NewspaperOutline } from "react-ionicons";
import Modal from "./Modal";

const ButtonBar: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const buttons = [
    {
      id: "pay",
      icon: CardOutline,
      label: "Claim Page",
      content: "Are you a doctor and can't find your page claim one now.",
      footerButtons: [{ label: "Claim Now", link: "/map-ranking" }],
      speech:false,
      link:"/map-ranking"
    },
    {
      id: "speech",
      icon: NewspaperOutline,
      label: "Book an Appointment ",
      content: "Do you need instant clarification? Book an appointment.",
      footerButtons: [{ label: "Book Now", link: "https://calendly.com/jamesdominick/brand" }],
      speech:false,
      link:""
    },
    // {
    //   id: "call",
    //   icon: CallOutline,
    //   label: "Call Now",
    //   content: "Call support instantly.",
    //   footerButtons: [{ label: "Dial Now", link: "tel:+1234567890" }],
    //   speech:false
    // }
  ];

  return (
    <>
      <div className="md:w-[60vw]  text-white shadow-lg rounded-2xl p-4 flex justify-around z-[100] space-x-4 mx-2">
        {buttons.map(({ id, icon: Icon, label }) => (
          <button key={id} className="flex items-center space-x-2 bg-[#449DD1] px-5 py-2 rounded-xl" onClick={() => setOpenModal(id)}>
            <Icon color="#fff" height="25px" width="25px" />
            <span className=" md:block whitespace-nowrap text-sm truncate">{label}</span>
          </button>
        ))}
      </div>

      {buttons.map(({ id, label, content, footerButtons, speech, link }) => (
        <Modal key={id} speech={speech} link={link} isOpen={openModal === id} onClose={() => setOpenModal(null)} title={label} footerButtons={footerButtons}>
          <p>{content}</p>
        </Modal>
      ))}
    </>
  );
};

export default ButtonBar;
