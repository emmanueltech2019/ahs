"use client";
import React from "react";
import TextToSpeech from "./TextToSpeech";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  speech: boolean;
  link: string;
  children: React.ReactNode;
  footerButtons?: { label: string; link: string }[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footerButtons, speech, link = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        {/* Content */}
        <div>{children}</div>

        {/* Footer with Dynamic Buttons */}
        <footer className="mt-4 border-t pt-3 flex justify-between items-center">
          {speech?<TextToSpeech />:''}
          
          <div className="flex space-x-2">
            {footerButtons?.map(({ label, link }) => (
              <Link key={label} href={link} className="bg-[#449DD1] text-white px-3 py-2 rounded-md text-sm">
                {label}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
