import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp as faSolidThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp as faRegularThumbsUp} from '@fortawesome/free-regular-svg-icons';
import * as Separator from '@radix-ui/react-separator';
import {supabase} from '../../auth/supabase.js';
import {useAuth} from '../../providers/AuthProvider.jsx';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';

const HallOfFameNominee = ({
                   id,
                   firstName,
                   lastName,
                   nomineePhoto,
                   nominationReason,
                   onViewDetails,
                 }) => {
  const {currentUser} = useAuth();
  const queryClient = useQueryClient();

  const queryKey = ['likes', id];

  const {data: likesData, isLoading: likesLoading} = useQuery({
    queryKey,
    queryFn: async () => {
      const {data, error} = await supabase
        .from('likes')
        .select('*')
        .eq('nominee_id', id);

      if (error) throw new Error(error.message);
      return data || [];
    },
    enabled: !!id,
  });

  const addLikeMutation = useMutation({
    mutationFn: async () => {
      if (!currentUser) throw new Error('You must be logged in to like!');

      const {error} = await supabase
        .from('likes')
        .insert({nominee_id: id, user_id: currentUser.id});

      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.setQueryData(queryKey, (oldData) => [
        ...(oldData || []),
        {nominee_id: id, user_id: currentUser.id},
      ]);
    },
  });

  const removeLikeMutation = useMutation({
    mutationFn: async () => {
      if (!currentUser) throw new Error('You must be logged in to unlike!');

      const {error} = await supabase
        .from('likes')
        .delete()
        .eq('nominee_id', id)
        .eq('user_id', currentUser.id);

      if (error) throw new Error(error.message);
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
    <div
      className="flex flex-col items-center bg-white w-full h-[400px] border-2 border-[#500000] rounded-lg p-6 overflow-hidden">
      <header className="text-lg font-bold text-[#500000] mb-4">Nominee</header>
      <Separator.Root className="w-full h-[1px] bg-[#E0E0E0] mb-4"/>
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
        <div className="flex justify-center">
          <button
            onClick={onViewDetails}
            className="mt-4 px-4 py-2 bg-[#500000] text-white rounded-lg hover:bg-[#7a0000] transition duration-300"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default HallOfFameNominee;