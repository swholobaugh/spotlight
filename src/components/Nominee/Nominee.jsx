import React, { useState, useEffect } from 'react';
import * as Separator from '@radix-ui/react-separator';

const Nominee = ({ firstName, lastName, nomineePhoto, nominationReason }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Nominee Card */}
      <div
        className="flex flex-col items-center bg-white w-full h-[400px] border-2 border-[#500000] rounded-lg p-6 overflow-hidden"
        style={{ maxHeight: '400px' }} // Consistent card height
      >
        <header className="text-lg font-bold text-[#500000] mb-4">
          Current Nominee
        </header>
        <Separator.Root className="w-full h-[1px] bg-[#E0E0E0] mb-4" />
        <img
          className="w-40 h-40 rounded-full shadow-lg border-2 border-[#500000] object-cover"
          src={nomineePhoto}
          alt={`${firstName} ${lastName}`}
        />
        <div className="mt-4 text-center">
          <div className="text-xl font-bold text-[#500000]">
            {firstName} {lastName}
          </div>
          <button
            onClick={toggleModal}
            className="mt-4 px-4 py-2 bg-[#500000] text-white rounded-lg hover:bg-[#7a0000] transition duration-300"
          >
            View
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
          onClick={toggleModal} // Close modal on backdrop click
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 max-w-xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on click inside
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-[#500000] font-bold text-lg"
              onClick={toggleModal}
            >
              &times;
            </button>

            <header className="text-center border-b pb-4">
              <h2 className="text-2xl font-bold text-[#500000]">
                {firstName} {lastName}
              </h2>
            </header>
            <div className="mt-4 flex flex-col items-center">
              <img
                className="w-40 h-40 rounded-full shadow-lg border-2 border-[#500000] object-cover"
                src={nomineePhoto}
                alt={`${firstName} ${lastName}`}
              />
              <div className="mt-4 text-lg font-bold text-[#500000]">
                Nomination Reason
              </div>
              <p className="mt-4 text-center text-[#2C2C2C]">{nominationReason}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nominee;
