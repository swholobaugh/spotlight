import React from 'react';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { supabase } from './supabaseClient';
import Nominee from './Nominee'; // Assuming Nominee component is already built

const fetchNominees = async () => {
  const { data, error } = await supabase
    .from('nominees')
    .select('*');

  if (error) throw new Error(error.message);
  return data;
};

const NomineesCarousel = () => {
  // React Query `useQuery` hook for fetching nominees
  const {
    data: nominees = [], // Default to an empty array if no data is returned
    isLoading,
    isError,
    error,
  } = useQuery(['nominees'], fetchNominees, {
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (isLoading) return <p>Loading nominees...</p>;
  if (isError) return <p>Error loading nominees: {error.message}</p>;
  if (!nominees.length) return <p>No nominees found.</p>;

  return (
    <div className="w-3/4 mx-auto">
      <Slider {...settings}>
        {nominees.map((nominee) => (
          <div key={nominee.id}>
            <Nominee
              firstName={nominee.first_name}
              lastName={nominee.last_name}
              nomineePhoto={
                nominee.nominee_photo
                  ? `https://your-supabase-url.supabase.co/storage/v1/object/public/nominee-photos/${nominee.nominee_photo}`
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

export default NomineesCarousel;
