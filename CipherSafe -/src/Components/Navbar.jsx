import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const GitHubIcon = ({ className = 'w-6 h-6' }) => (
    <svg
      className={className + ' mr-2 transition-transform duration-300 group-hover:scale-110'}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white shadow-2xl overflow-hidden">
      {/* Decorative background (keeps presentational elements separate) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-800/20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent),linear-gradient(rgba(255,255,255,.05)_24%,transparent_25%,transparent_26%,rgba(255,255,255,.05)_27%,rgba(255,255,255,.05)_74%,transparent_75%,transparent_76%,rgba(255,255,255,.05)_77%,rgba(255,255,255,.05))] bg-[length:75px_75px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center group">
              <span className="text-yellow-400 text-2xl sm:text-4xl animate-pulse mr-2 transform group-hover:rotate-12 transition-transform duration-300">
                🔒
              </span>
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent font-black tracking-tight text-lg sm:text-2xl">Cipher</span>
                  <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent font-black tracking-tight text-lg sm:text-2xl">Safe</span>
                </div>
                <span className="text-xs text-white/70 hidden sm:inline">Encrypted password manager</span>
              </div>
              <span className="text-yellow-400 text-2xl sm:text-4xl animate-pulse ml-2 transform group-hover:-rotate-12 transition-transform duration-300">
                🗝️
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <GitHubIcon />
              <span className="font-bold text-lg tracking-wide">GitHub</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
            </a>

            <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/80">Secure</span>
            </div>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center md:hidden">
            {/* GitHub icon-only button on small screens */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 mr-2"
              aria-label="Open GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/60 bg-white/5 border border-white/10"
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated bars */}
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  className={`transition-all duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className={`transition-all duration-200 ${open ? 'opacity-100' : 'opacity-0'} transform ${open ? 'rotate-0' : ''}`}
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-gradient-to-b from-white/5 to-transparent ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!open}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition"
          >
            <GitHubIcon className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div>
              <div className="text-sm font-medium">Secure</div>
              <div className="text-xs text-white/70">Encrypted vault</div>
            </div>
          </div>

          {/* Placeholder for other mobile links */}
          <a href="#" className="block px-3 py-2 rounded-lg hover:bg-white/5 transition text-sm">How it works</a>
          <a href="#" className="block px-3 py-2 rounded-lg hover:bg-white/5 transition text-sm">Pricing</a>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 pointer-events-none" />
    </header>
  );
}
