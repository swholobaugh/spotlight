import React, { useState } from 'react';
import Spotlight from '../../components/Spotlight/Spotlight';

const Vote = () => {

  return (
    <div className="vote-page flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-app-accent mb-4">Vote for Your Favorite Candidate</h1>
      <p className="text-gray-600 text-lg mb-8">
        Choose your favorite candidate by clicking the thumbs up icon below their name. You may vote for multiple candidates.
      </p>
      <Spotlight />
    </div>
  );
};

export default Vote;
