"use client"
import React, { useState } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Button, Modal, TextField } from '@mui/material';
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}





const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, highlighted = false }) => {
  
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here (e.g., send to API)
    console.log('Submitted email:', email);
    handleClose();
  };
  
  return (
    <div className={`relative border border-[#449DD1] border-2 p-6 rounded-lg ${highlighted ? 'bg-[#449DD1] text-white' : 'bg-white text-black'} shadow-md`}>
      <h2 className=" font-semibold mb-4 text-[17px]">{title}</h2>
      <div className="text-4xl font-bold mb-4">{price} <span className="text-xl font-normal">/mo</span></div>
      <p className="mb-4 text-[11px] ">{description}</p>
      <ul className="mb-6 space-y-2 text-left py-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className={`bg-[#449DD1]  text-white rounded-full p-1 ${highlighted ? 'bg-white text-[#449DD1]' : 'bg-[#449DD1] text-white'}`}>
            <CheckOutlinedIcon />
            </div>
            {/* <svg className="w-10 h-10 p-0 m-0 text-[10px] bg-[#449DD1] rounded-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg> */}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href='https://calendly.com/jamesdominick/brand'>

      <button className={`absolute bottom-0 left-0 w-full py-2 px-4 mt-20 ${highlighted ? 'bg-[#FFF] text-[#449DD1]' : 'bg-[#449DD1] text-white hover:bg-gray-700'}`}>
        Schedule Appointment
      </button>
      </a>
      {
        true?<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4" id="modal-modal-title">Subscribe to Our Newsletter</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Button type="submit" variant="contained" color="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </Modal>:null
      }

    </div>  
  );
};

export default PricingCard;
