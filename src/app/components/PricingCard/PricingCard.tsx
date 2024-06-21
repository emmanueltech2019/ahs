import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, highlighted = false }) => {
  return (
    <div className={`border border-[#449DD1] border-2 p-6 rounded-lg ${highlighted ? 'bg-[#449DD1] text-white' : 'bg-white text-black'} shadow-md`}>
      <h2 className="text-lg font-semibold mb-4 ">{title}</h2>
      <div className="text-4xl font-bold mb-4">{price} <span className="text-xl font-normal">/mo</span></div>
      <p className="mb-4 ">{description}</p>
      <ul className="mb-6 space-y-2 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className='bg-[#449DD1] text-white rounded-full p-1'>
            <CheckOutlinedIcon />
            </div>
            {/* <svg className="w-10 h-10 p-0 m-0 text-[10px] bg-[#449DD1] rounded-full text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg> */}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded mt-20 ${highlighted ? 'bg-black text-white' : 'bg-black text-white hover:bg-gray-700'}`}>
        Lorem ipsum
      </button>
    </div> 
  );
};

export default PricingCard;
