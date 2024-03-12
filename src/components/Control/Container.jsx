import React from 'react';

function Container({ children }) {
  return (
    <div className='w-full p-2 mx-auto'>
      {children}
    </div>
  );
}

export default Container;
