import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth(); // Assuming `user` contains user info like name, email, etc.
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    biography: user?.biography || '',
  });

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/auth');
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Add save logic here (e.g., API call to update user data)
    setEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-12">
      <h1 className="text-3xl font-bold text-[#500000] mb-6">Your Profile</h1>

      {/* User Info */}
      <div className="w-full mb-6">
        {!editing ? (
          <>
            <p className="text-lg font-semibold text-[#500000]">Name:</p>
            <p className="text-gray-700 mb-4">{`${formData.firstName} ${formData.lastName}`}</p>
            <p className="text-lg font-semibold text-[#500000]">Email:</p>
            <p className="text-gray-700 mb-4">{formData.email}</p>
            <p className="text-lg font-semibold text-[#500000]">Biography:</p>
            <p className="text-gray-700 mb-4">{formData.biography || 'No biography provided.'}</p>
          </>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#500000]">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#500000]">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#500000]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#500000]">Biography</label>
              <textarea
                name="biography"
                value={formData.biography}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-gray-300 rounded p-2 mt-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        {!editing ? (
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </>
        )}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
