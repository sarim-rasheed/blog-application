import React from 'react';

function Container({ children }) {
  return (
    <div className='w-full max-w-7xl  p-5 mx-auto'>
      {children}
    </div>
  );
}

export default Container;
