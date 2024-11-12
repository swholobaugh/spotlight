import React, { useState } from 'react';

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
        Choose your favorite candidate by clicking the vote button below their name.
        You can vote only once.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {items.map((item) => (
          <div key={item.id} className="vote-item bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{item.name}</h2>
            <button
              onClick={() => handleVote(item.id)}
              className={`px-4 py-2 font-semibold rounded transition ${
                hasVoted ? 'bg-gray-400 cursor-not-allowed' : 'bg-app-accent text-white hover:bg-app-accent-secondary'
              }`}
              disabled={hasVoted} // Disable button if the user has voted
            >
              {hasVoted ? 'Vote Cast' : 'Vote'}
            </button>
            <p className="mt-2 text-gray-600">Votes: {votes[item.id] || 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vote;
