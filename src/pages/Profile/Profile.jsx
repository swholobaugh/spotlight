import React from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto mt-12">
      <h1 className="text-2xl font-bold text-[#500000] mb-4">Profile</h1>
      <div className="text-[#2C2C2C] text-center leading-relaxed mb-8">
        <h2 className="text-lg font-semibold mt-4">Under Construction</h2>
        <p className="mt-4">
          We’re working on building out your profile page. Stay tuned for more updates!
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
