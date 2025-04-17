"use client"
import { useState } from "react";
import { CashOutline, CallOutline, CalendarOutline, DocumentTextOutline, MicOutline } from "react-ionicons";
import Modal from "./Modal";

const ButtonBar: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const buttons = [
    {
      id: "pay",
      icon: CashOutline,
      label: "Pay Now",
      content: "",
      footerButtons: [{ label: "Pay Now", link: "/payment" }],
      speech:false
    },
    {
      id: "speech",
      icon: MicOutline,
      label: "Text to Speech",
      content: "",
      footerButtons: [],
      speech:true
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
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:w-2/5 w-[60vw] bg-[#0478BE] text-white shadow-lg rounded-2xl p-4 flex justify-around z-[100]">
        {buttons.map(({ id, icon: Icon, label }) => (
          <button key={id} className="flex items-center space-x-2 " onClick={() => setOpenModal(id)}>
            <Icon color="#fff" height="25px" width="25px" />
            <span className="hidden md:block">{label}</span>
          </button>
        ))}
      </div>

      {buttons.map(({ id, label, content, footerButtons, speech }) => (
        <Modal key={id} speech={speech} isOpen={openModal === id} onClose={() => setOpenModal(null)} title={label} footerButtons={footerButtons}>
          <p>{content}</p>
        </Modal>
      ))}
    </>
  );
};

export default ButtonBar;
