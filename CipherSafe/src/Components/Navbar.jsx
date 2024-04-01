import React from 'react';

function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-purple-600 to-indigo-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-2 h-16">
        <div className="logo font-bold text-white text-3xl flex items-center">
          <span className='text-yellow-400'>🔒</span>
          <span className="ml-1">
            <span className="text-yellow-300">Cipher</span>
            <span className="text-blue-300">Safe</span>
          </span>
          <span className='text-yellow-400'>🗝️</span>
        </div>
        <div className="flex items-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center mr-4">
            <img className='invert p-2 w-10 h-10' src="icons/github.png" alt="GitHub Logo" />
            <span className='font-bold px-2'>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
