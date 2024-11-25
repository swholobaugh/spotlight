import React, { useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import { supabase } from '../../auth/supabase.js';
import { useAuth } from '../../providers/AuthProvider.jsx';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Nominee = ({ id, firstName, lastName, nomineePhoto, nominationReason }) => {
  const { currentUser } = useAuth(); // Access the current user from the context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Unique query key for this nominee
  const queryKey = ['likes', id];

  // Fetch likes for this specific nominee
  const { data: likesData, isLoading: likesLoading } = useQuery({
    queryKey,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('likes')
        .select('*')
        .eq('nominee_id', id);

      if (error) {
        throw new Error(error.message);
      }

      return data || [];
    },
    enabled: !!id, // Only fetch if `id` is defined
  });

  // Mutation to add a like
  const addLikeMutation = useMutation({
    mutationFn: async () => {
      if (!currentUser) {
        throw new Error('You must be logged in to like!');
      }

      const { error } = await supabase.from('likes').insert({
        nominee_id: id,
        user_id: currentUser.id,
      });

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(queryKey, (oldData) => [
        ...(oldData || []),
        { nominee_id: id, user_id: currentUser.id },
      ]);
    },
  });

  // Mutation to remove a like
  const removeLikeMutation = useMutation({
    mutationFn: async () => {
      if (!currentUser) {
        throw new Error('You must be logged in to unlike!');
      }

      const { error } = await supabase
        .from('likes')
        .delete()
        .eq('nominee_id', id)
        .eq('user_id', currentUser.id);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(queryKey, (oldData) =>
        (oldData || []).filter((like) => like.user_id !== currentUser.id)
      );
    },
  });

  const handleLikeToggle = () => {
    const hasLiked =
      currentUser && likesData?.some((like) => like.user_id === currentUser.id);

    if (hasLiked) {
      removeLikeMutation.mutate();
    } else {
      addLikeMutation.mutate();
    }
  };

  const hasLiked =
    currentUser && likesData?.some((like) => like.user_id === currentUser.id);

  return (
    <>
      {/* Nominee Card */}
      <div className="flex flex-col items-center bg-white w-full h-[400px] border-2 border-[#500000] rounded-lg p-6 overflow-hidden">
        <header className="text-lg font-bold text-[#500000] mb-4">
          Current Nominee
        </header>
        <Separator.Root className="w-full h-[1px] bg-[#E0E0E0] mb-4" />
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-2 border-[#500000]">
          <img
            className="w-full h-full object-cover"
            src={nomineePhoto}
            alt={`${firstName} ${lastName}`}
          />
        </div>
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
          <button
            onClick={handleLikeToggle}
            className={`mt-2 px-4 py-2 ${
              hasLiked ? 'bg-gray-500' : 'bg-[#500000]'
            } text-white rounded-lg hover:bg-[#7a0000] transition duration-300`}
            disabled={addLikeMutation.isLoading || removeLikeMutation.isLoading}
          >
            {likesLoading
              ? 'Loading...'
              : hasLiked
                ? `Unlike (${likesData?.length || 0})`
                : `Like (${likesData?.length || 0})`}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-11/12 max-w-xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on click inside
          >
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
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-2 border-[#500000]">
                <img
                  className="w-full h-full object-cover"
                  src={nomineePhoto}
                  alt={`${firstName} ${lastName}`}
                />
              </div>
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
