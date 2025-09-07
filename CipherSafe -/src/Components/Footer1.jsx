import React from 'react';

const Footer1 = () => {
  const HeartIcon = () => (
    <svg 
      className="w-4 h-4 text-red-400 animate-pulse mx-1" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  const ExternalLinkIcon = () => (
    <svg 
      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg 
      className="w-5 h-5 text-green-400 animate-pulse" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-slate-900 to-gray-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.03)_25%,rgba(255,255,255,.03)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.03)_75%,rgba(255,255,255,.03)_76%,transparent_77%,transparent),linear-gradient(rgba(255,255,255,.03)_24%,transparent_25%,transparent_26%,rgba(255,255,255,.03)_27%,rgba(255,255,255,.03)_74%,transparent_75%,transparent_76%,rgba(255,255,255,.03)_77%,rgba(255,255,255,.03))] bg-[length:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Left Section - Logo */}
          <div className="group flex-shrink-0">
            <div className="logo font-bold text-3xl flex items-center transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-yellow-400 text-4xl mr-2 transform group-hover:rotate-12 transition-transform duration-500 filter drop-shadow-lg">
                🔒
              </span>
              <div className="relative">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent font-black tracking-tight">
                  Cipher
                </span>
                <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent font-black tracking-tight">
                  Safe
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-blue-300/20 blur-lg -z-10 opacity-50"></div>
              </div>
              <span className="text-yellow-400 text-4xl ml-2 transform group-hover:-rotate-12 transition-transform duration-500 filter drop-shadow-lg">
                🗝️
              </span>
            </div>
            <p className="text-center lg:text-left text-gray-400 text-sm font-medium mt-1">
              Your trusted password guardian
            </p>
          </div>

          {/* Center Section - Security & Creator Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Security Badge */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <ShieldIcon />
              <span className="text-xs font-semibold text-green-400">
                Secured & Encrypted
              </span>
            </div>

            {/* Creator Section */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center text-sm text-gray-300">
                <span>Created with</span>
                <HeartIcon />
                <span>by</span>
              </div>
              
              <a 
                href="https://wisecrest.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 hover:from-yellow-500/30 hover:to-yellow-400/30 rounded-full border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10"
              >
                <span className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  AsBit
                </span>
              </a>
            </div>
          </div>

          {/* Right Section - Status & Info */}
          <div className="flex flex-col items-center lg:items-end space-y-3">
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                All systems operational
              </span>
              <span>•</span>
              <span>© 2025 CipherSafe</span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Privacy First</span>
              <span>•</span>
              <span className="font-mono bg-gray-800/50 px-2 py-1 rounded border border-gray-700/50">
                v1.0.0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400"></div>
    </footer>
  );
};

export default Footer1;