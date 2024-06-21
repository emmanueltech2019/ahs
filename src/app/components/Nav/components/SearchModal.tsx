import React from 'react'

interface SearchModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<SearchModalProps> = ({ modal, setModal }) => {

    const handleModal = () => {
        setModal(!modal); // Toggle modal state
    }

    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close modal if click occurs outside the modal content area
        if (e.target === e.currentTarget) {
            setModal(false);
        }
    }   
    return (
        <div>
            <section className={!modal ? 'p-4 fixed -bottom-[140%] transition-all duration-500 ease-in-out overflow-hidden bg-[#fff] w-full z-40 rounded-t-[1rem]' : 'p-4 fixed -bottom-[22%] transition-all duration-500 ease-in-out overflow-hidden bg-[#fff] w-full z-40 rounded-t-[1rem]'}>
                <div className='md:max-w-[85%] m-auto'>
                    <div className='border-[#0000006e] border-[2px] rounded-full p-3'>
                    <input type="text" placeholder='Search...' className='w-full outline-none p-1 text-[18px]'/>
                    </div>
                </div>

                <div className="display-search h-[100vh]">

                </div>
            </section>
        </div>
    )
}

export default SearchModal