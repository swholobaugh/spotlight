import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between signup and login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error message

    try {
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate('/'); // Redirect to home or another page after successful signup/login
    } catch (error) {
      setError(`Failed to ${isSignup ? 'sign up' : 'log in'}: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold text-[#500000] mb-4">{isSignup ? 'Sign Up' : 'Log In'}</h2>

      {/* Display error message if there is an error */}
      {error && (
        <p className="text-red-500 mb-4 text-center">
          {error}
        </p>
      )}

      <form onSubmit={handleAuth} className="w-full flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-[#500000] font-semibold mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border border-[#E0E0E0] rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#500000] font-semibold mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-[#E0E0E0] rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 mt-4 bg-[#500000] text-white font-semibold rounded hover:bg-[#7A2323] transition-colors"
        >
          {isSignup ? 'Sign Up' : 'Log In'}
        </button>
      </form>
      <p className="mt-4 text-[#2C2C2C]">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}
        <button
          onClick={() => {
            setIsSignup(!isSignup);
            setError(null); // Clear error when switching between login and signup
          }}
          className="ml-2 text-[#D4AF37] underline cursor-pointer hover:text-[#B23A3A] transition-colors"
        >
          {isSignup ? 'Log In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
