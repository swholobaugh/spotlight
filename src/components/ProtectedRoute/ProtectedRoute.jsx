import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth, onAuthStateChanged } from '../../auth/firebase';

const ProtectedRoute = ({ element: Component }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return user ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
