import React from 'react';

const Panel = ({ title, content, children }) => {
  return (
    <div className="flex flex-col items-center bg-white p-4">
      {title && <h2 className="text-xl text-black font-bold mb-4">{title}</h2>}
      <div>{content}</div>
    </div>
  );
};

export default Panel;