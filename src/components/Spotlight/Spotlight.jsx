import React from 'react';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../auth/supbase.js';
import Nominee from '../Nominee/Nominee.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const fetchNominees = async () => {
  const { data, error } = await supabase
    .from('nominees')
    .select('*');

  if (error) throw new Error(error.message);
  return data;
};

// Custom navigation buttons
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

const Spotlight = () => {
  const {
    data: nominees = [], // Default to an empty array
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['nominees'],
    queryFn: fetchNominees,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display three slides at a time
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) return <p>Loading nominees...</p>;
  if (isError) return <p>Error loading nominees: {error.message}</p>;
  if (!nominees.length) return <p>No nominees found.</p>;

  return (
      <div className="w-full max-w-4xl px-4">
        <Slider {...settings}>
          {nominees.map((nominee) => (
            <div key={nominee.id} className="px-4">
              <Nominee
                firstName={nominee.first_name}
                lastName={nominee.last_name}
                nomineePhoto={
                  nominee.nominee_photo
                    ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/nominee-photos/${nominee.nominee_photo}`
                    : 'https://via.placeholder.com/150' // Fallback photo
                }
                nominationReason={nominee.nomination_reason}
              />
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default Spotlight;
