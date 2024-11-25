import React, { useState } from 'react';
import Spotlight from '../../components/Spotlight/Spotlight';

const Vote = () => {
  const [votes, setVotes] = useState({}); // State to track votes for each item
  const [hasVoted, setHasVoted] = useState(false); // Track if the user has voted

  const items = [
    { id: 1, name: 'Candidate A' },
    { id: 2, name: 'Candidate B' },
    { id: 3, name: 'Candidate C' },
  ];

  const handleVote = (id) => {
    if (!hasVoted) { // Check if the user has already voted
      setVotes((prevVotes) => ({
        ...prevVotes,
        [id]: (prevVotes[id] || 0) + 1,
      }));
      setHasVoted(true); // Prevent further votes
    }
  };

  return (
    <div className="vote-page flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-app-accent mb-4">Vote for Your Favorite Candidate</h1>
      <p className="text-gray-600 text-lg mb-8">
        Choose your favorite candidate by clicking the thumbs up icon below their name.
      </p>

      <Spotlight />
    </div>
  );
};

export default Vote;
