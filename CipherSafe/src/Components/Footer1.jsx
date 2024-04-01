import React from 'react';

const Footer1 = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-slate-800 text-white flex flex-col justify-center items-center w-full py-4'>
      <div className="logo font-bold text-white text-3xl flex items-center mb-2">
        <span className='text-yellow-400 mr-1'>🔒</span>
        <span className="text-yellow-300">Cipher</span>
        <span className="text-blue-300">Safe</span>
        <span className='text-yellow-400 ml-1'>🗝️</span>
      </div>
      <div className='flex items-center space-x-2 text-sm'>
        <span>Created by</span>
        <a href="https://wisecrest.dev" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">WiseCrest</a>
      </div>
    </div>
  );
}

export default Footer1;
