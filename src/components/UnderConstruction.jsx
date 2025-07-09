import React, { useState } from 'react';
import '../fonts.css';
const ToteBagSVG = () => (
  <svg
    className="w-24 h-24 mx-auto stroke-gray-400 animate-pulse"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="14" y="20" width="36" height="32" rx="4" ry="4" />
    <path d="M20 20v-6a6 6 0 0 1 12 0v6" />
    <path d="M44 20v-6a6 6 0 0 0-12 0v6" />
    <line x1="14" y1="44" x2="50" y2="44" />
    <line x1="14" y1="52" x2="50" y2="52" />
  </svg>
);

export default function UnderConstruction() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181818] px-4 text-gray-300 font-mono animate-fadeIn">
      <div className="max-w-xs w-full text-center flex flex-col gap-10">
        <h2 className="text-2xl font-bold tracking-widest text-gray-400 select-none">
          UNDER CONSTRUCTION!
        </h2>

        <ToteBagSVG />

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4" noValidate>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-md bg-[#2c2c2c] text-white text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type= "submit"
            className="bg-gray-100 text-[#181818] font-bold py-0.9 px-6.5 rounded-md hover:bg-gray-200 transform hover:scale-105 transition duration-200 w-full sm:w-auto"
          >
            Notify Me
          </button>
        </form>

        <div className="text-base" style={{ fontFamily: 'Holiday' }}>
          <p>Designed by Yachana Verma</p>
        </div>
      </div>
    </div>
  );
}
