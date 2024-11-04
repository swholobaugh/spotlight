import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";

const Home = () => {
  return (
    <div>
      <h1 className='font-header'>Home Page</h1>
      <div
        className='px-8 font-body'
      >My page copy, gonna write stuff heere...</div>
      {/* Below div is styled with more traditional CSS */}
      <div
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginTop: '4px',
          fontFamily: 'Comfortaa Normal',
        }}
      >
        Here is another new paragraph, but styled differently
      </div>
    </div>
  );
};

export default Home;