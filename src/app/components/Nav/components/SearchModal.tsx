// import React, { useState } from 'react'

// interface SearchModalProps {
//     modal: boolean;
//     setModal: React.Dispatch<React.SetStateAction<boolean>>;
// }



// const SearchModal: React.FC<SearchModalProps> = ({ modal, setModal }) => {

//     const [doctor, setdoctor] = useState([
//         { 
//           Name: "Dr. Choudhry",
//           Specialization: "",
//           Location: "Ausin",
//         }
//     ])
//     const handleModal = () => {
//         setModal(!modal); // Toggle modal state
//     }

//     const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
//         // Close modal if click occurs outside the modal content area
//         if (e.target === e.currentTarget) {
//             setModal(false);
//         }
//     }   
//     let handleChange = (event: React.MouseEvent<HTMLDivElement>) => {
//         // Handle search input change
//         // Add your logic here

//         setdoctor(doctor.filter(item => item.Name.toLowerCase().includes(event.target.value.toLowerCase())))
//     }
//     return (
//         <div>
//             <section className={!modal ? 'p-4 fixed -bottom-[140%] transition-all duration-500 ease-in-out overflow-hidden bg-[#fff] w-full z-40 rounded-t-[1rem]' : 'p-4 fixed -bottom-[22%] transition-all duration-500 ease-in-out overflow-hidden bg-[#fff] w-full z-40 rounded-t-[1rem]'}>
//                 <div className='md:max-w-[85%] m-auto'>
//                     <div className='border-[#0000006e] border-[2px] rounded-full p-3'>
//                     <input type="text" onChange={handleChange} placeholder='Search...' className='w-full outline-none p-1 text-[18px]'/>
//                     </div>
//                 </div>

//                 <div className="display-search h-[100vh]">

//                 </div>
//             </section>
//         </div>
//     )
// }

// export default SearchModal



import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Doctor {
  name: string;
}

interface SearchModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}



const SearchModal: React.FC<SearchModalProps> = ({ modal, setModal }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = React.useMemo(() => {
    return doctors.filter(doctor => doctor.name?.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [doctors, searchTerm]);

  const getDoctorDetails  = async () =>{
    await axios({
      method:"get",
      url:"http://localhost:4000/user/get-doctor"
    })
    .then((res)=>{
      console.log("Worked.....", res.data[0])
      setDoctors(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
const handleChange = (e: any) =>{
  setSearchTerm(e.target.value)
  console.log(doctors)
  getDoctorDetails()
  // filteredDoctors = doctors.map(doctor =>
  //   console.log( doctors[0].name)
   
  // );
}
useEffect(() => {
  // getDoctorDetails()
  
}, [])

  const handleModal = () => setModal(!modal);

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setModal(false);
  };

  return (
    <div onClick={handleCloseModal}>
      <section 
        className={
          !modal 
            ? 'p-4 fixed -bottom-[140%] transition-all duration-500 ease-in-out overflow-hidden bg-[#fff] w-full z-40 rounded-t-[1rem]'
            : 'p-4 fixed -bottom-[22%] transition-all duration-500 ease-in-out overflow-hidden bg-[#fff] w-full z-40 rounded-t-[1rem]'
        }
      >
        <div className='md:max-w-[85%] m-auto'>
          <div className='border-[#0000006e] border-[2px] rounded-full p-3'>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => handleChange(e)}
              placeholder='Search...' 
              className='w-full outline-none p-1 text-[18px]' 
            />
          </div>
        </div>

        <div className="display-search h-[100vh]">
  {filteredDoctors.length > 0 ? (
    <ul className='md:px-24'>
      {filteredDoctors.map(doctor => (
        <li key={doctor.name} className='border rounded-full border-solid py-6 px-3 my-2'>
          {doctor.name} 
        </li>
      ))}
    </ul>
  ) : (
    <p className='md:px-28 py-10'>No doctors found.</p>
  )}
</div>

      </section>
    </div>
  );
};

export default SearchModal;
