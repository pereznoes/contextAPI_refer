import React from 'react';

export default function Container({ children }) {
  return (
    <div className='flex flex-col h-screen justify-between'>{children}</div>
  );
}
