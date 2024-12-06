
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import * as Separator from '@radix-ui/react-separator';
import { supabase } from '../../auth/supabase.js';

const fetchTopNominee = async () => {
  const { data, error } = await supabase.rpc('get_top_nominee_for_month');

  if (error) {
    console.error('Error fetching top nominee:', error.message);
    return null;
  }

  return data[0];
};

const Home = () => {
  const navigate = useNavigate();
  const [activeNominee, setActiveNominee] = useState(null);

  // Fetch the current top nominee
  const {
    data: nominee,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['top-nominee'],
    queryFn: fetchTopNominee,
  });

  const handleCloseModal = () => setActiveNominee(null);

  return (
    <div className="flex flex-col items-center bg-white w-full">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-3xl font-bold text-[#500000]">
          Welcome to the Aggie Spotlight!
        </div>
        <div className="mt-2 text-[#2C2C2C] max-w-[1000px]">
          This is a platform where Aggies can be nominated for their outstanding demonstration of the Aggie Core values
          of Excellence and Integrity. You
          are able to nominate an Aggie, vote for your favorite nominee, and view past winners in the Hall of Fame.
        </div>
        <div
          className="text-[#D4AF37] cursor-pointer hover:underline"
          onClick={() => navigate('/about')}
        >
          Learn More...
        </div>
      </div>
      <section className="border-2 border-[#500000] rounded-lg w-2/3 mt-4 p-6">
        <div className="flex flex-col justify-center items-center">
          <header className="text-lg font-bold text-[#500000] mb-4">
            Current Spotlight
          </header>
          <Separator.Root className="w-full h-[1px] bg-[#E0E0E0] mb-4"/>
          {isLoading ? (
            <p className="text-center text-gray-500">Loading spotlight nominee...</p>
          ) : isError ? (
            <p className="text-center text-red-500">
              Error fetching nominee: {error.message}
            </p>
          ) : nominee ? (
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <img
                  className="w-48 h-48 rounded-full shadow-lg border-2 border-[#500000] object-cover"
                  src={
                    nominee.nominee_photo
                      ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/nominee-photos/${nominee.nominee_photo}`
                      : 'https://via.placeholder.com/150'
                  }
                  alt={`${nominee.first_name} ${nominee.last_name}`}
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <div className="flex flex-col items-center">
                  <div className="mt-4 text-xl font-bold text-[#500000]">
                    {nominee.first_name} {nominee.last_name}
                  </div>
                  <div className="mt-6 text-lg font-bold text-[#500000]">
                    Nomination Reason
                  </div>
                  <p className="mt-2 w-3/4 text-center text-[#2C2C2C]">
                    {nominee.nomination_reason || 'Nomination reason not provided.'}
                  </p>
                  <button
                    className="mt-6 px-4 py-2 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
                    onClick={() => setActiveNominee(nominee)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No spotlight nominee available.</p>
          )}
        </div>
      </section>

      {/* Modal for Nominee Details */}
      {activeNominee && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-6 w-11/12 max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-[#500000] text-3xl font-bold transition-colors"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <header className="text-center border-b pb-4">
              <h2 className="text-3xl font-bold text-[#500000]">
                {activeNominee.first_name} {activeNominee.last_name}
              </h2>
            </header>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#500000]">Class Year</h3>
              <p className="mt-2 text-gray-700">{activeNominee.class_year || 'N/A'}</p>

              <h3 className="text-lg font-semibold text-[#500000] mt-6">Hometown</h3>
              <p className="mt-2 text-gray-700">{activeNominee.hometown || 'N/A'}</p>

              <h3 className="text-lg font-semibold text-[#500000] mt-6">Biography</h3>
              <p className="mt-2 text-gray-700">{activeNominee.biography}</p>

              <h3 className="text-lg font-semibold text-[#500000] mt-6">Nomination Reason</h3>
              <p className="mt-2 text-gray-700">{activeNominee.nomination_reason}</p>

              <h3 className="text-lg font-semibold text-[#500000] mt-6">LinkedIn</h3>
              <a
                href={activeNominee.linked_in}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {activeNominee.linked_in || 'N/A'}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
