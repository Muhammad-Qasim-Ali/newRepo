import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`bg-${props.mode === 'light' ? 'white' : 'gray-800'} shadow-lg`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a className={`text-2xl font-bold ${props.mode === 'light' ? 'text-gray-800' : 'text-white'}`} href="/">
            {props.title}
          </a>
          <a className={`text-xl font-semibold ${props.mode === 'light' ? 'text-gray-800' : 'text-white'} hover:text-gray-400`} aria-current="page" href="/">
            Home
          </a>
        </div>
        <button
          className={`${props.mode === 'light' ? 'text-gray-800' : 'text-white'} md:hidden focus:outline-none`}
          onClick={() => {
            const menu = document.getElementById('navbarSupportedContent');
            menu.classList.toggle('hidden');
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center" id="navbarSupportedContent">
          <div className={`form-check form-switch ml-4 ${props.mode === 'light' ? 'text-gray-800' : 'text-white'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label ml-2" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
