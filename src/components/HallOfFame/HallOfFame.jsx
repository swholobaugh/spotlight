import React, { useState } from 'react';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../auth/supabase.js';
import HallOfFameNominee from "../HallOfFameNominee/HallOfFameNominee.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const fetchNominees = async () => {

  const now = new Date()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59).toISOString();
  const { data, error } = await supabase
    .from('nominees')
    .select('*')
    .lte('date_nominated', endOfMonth);

  if (error) throw new Error(error.message);
  return data;
};

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#500000] text-white px-4 py-2 rounded-full shadow hover:bg-[#7a0000] transition z-10"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#500000] text-white px-4 py-2 rounded-full shadow hover:bg-[#7a0000] transition z-10"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const HallOfFame = () => {
  const [activeNominee, setActiveNominee] = useState(null);

  const {
    data: nominees = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['nominees', 'hof'],
    queryFn: fetchNominees,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCloseModal = () => setActiveNominee(null);

  if (isLoading) return <p>Loading nominees...</p>;
  if (isError) return <p>Error loading nominees: {error.message}</p>;
  if (!nominees.length) return <p>No nominees found.</p>;

  return (
    <div className="w-full max-w-4xl px-4">
      <Slider {...settings}>
        {nominees.map((nominee) => (
          <div key={nominee.id} className="px-4">
            <HallOfFameNominee
              id={nominee.id}
              firstName={nominee.first_name}
              lastName={nominee.last_name}
              dateNominated={nominee.date_nominated}
              nomineePhoto={
                nominee.nominee_photo
                  ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/nominee-photos/${nominee.nominee_photo}`
                  : 'https://via.placeholder.com/150'
              }
              nominationReason={nominee.nomination_reason}
              onViewDetails={() => setActiveNominee(nominee)}
            />
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {activeNominee && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 max-w-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-[#500000] font-bold text-lg"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <header className="text-center border-b pb-4">
              <h2 className="text-2xl font-bold text-[#500000]">
                {activeNominee.first_name} {activeNominee.last_name}
              </h2>
            </header>
            <div className="mt-4 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-2 border-[#500000]">
                <img
                  className="w-full h-full object-cover"
                  src={activeNominee.nominee_photo
                    ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/nominee-photos/${activeNominee.nominee_photo}`
                    : 'https://via.placeholder.com/150'
                  }
                  alt={`${activeNominee.first_name} ${activeNominee.last_name}`}
                />
              </div>
              <div className="mt-4 text-lg font-bold text-[#500000]">
                Nomination Reason
              </div>
              <p className="mt-4 text-center text-[#2C2C2C]">
                {activeNominee.nomination_reason}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallOfFame;
