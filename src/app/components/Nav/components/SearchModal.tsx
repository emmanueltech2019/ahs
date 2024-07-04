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



import React, { useState } from 'react';

interface Doctor {
  Name: string;
  Specialization: string;
  Location: string;
}

interface SearchModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<SearchModalProps> = ({ modal, setModal }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    { Name: "Dr. Vineet Choudhry", Specialization: "Cardiologist", Location: "Austin" },
    { Name: "Dr. Cristina Muresanu", Specialization: "Dermatologist", Location: "Austin" },
    // { Name: "Dr. Kim", Specialization: "Pediatrician", Location: "Chicago" },
    // ... more doctors
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search...' 
              className='w-full outline-none p-1 text-[18px]' 
            />
          </div>
        </div>

        <div className="display-search h-[100vh]">
          {filteredDoctors.length > 0 ? (
            <ul className='md:px-24'>
              {filteredDoctors.map(doctor => (
                <li key={doctor.Name} className='border rounded-full border-solid py-6 px-3 my-2'>
                  {doctor.Name} ({doctor.Location})
                </li>
              ))}
            </ul>
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchModal;
