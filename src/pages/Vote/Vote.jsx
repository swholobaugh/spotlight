import React, { useState } from 'react';
import Spotlight from '../../components/Spotlight/Spotlight';

const Vote = () => {

  return (
    <div className="vote-page flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-app-accent mb-4">Vote for Your Favorite Nominee</h1>
      <p className="text-center text-lg mb-8">
        Vote for your favorite nominee by clicking the thumbs up icon below their name. Be sure to view the details for each nominee and vote for as many nominees as you'd like! Voting is open until the end of the month, and the nominee with the highest number of votes will be featured in the Aggie Spotlight.
      </p>
      <Spotlight />
    </div>
  );
};

export default Vote;
