import { BellIcon, HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  const [navState, setNavState] = useState(false);
  
  const onNavScroll = () =>{
    if(window.scrollY  > 30 ){
      setNavState(true)
    }else{
      setNavState(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll)
    return () => {
      window.removeEventListener('scroll', onNavScroll)
    }
  }, []);
  
  return (
    <>
      <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50': 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[9999] blur-effect-theme'}>
        <nav className="nike-container flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="logo/img" className={`w-16 h-auto ${navState && 'filter brightness-0'}`} />
          </div>
          <ul className="flex items-center justify-center gap-3">
            <li className="grid items-center">
              <MagnifyingGlassIcon className={`icon-style ${navState && 'text-slate-800 transition-all duration-300'}`} />
            </li>
            <li className="grid items-center">
              <HeartIcon className={`icon-style ${navState && 'text-slate-800 transition-all duration-300'}`} />
            </li>
            <li className="grid items-center">
              <button type="button" className="relative border-none outline-none active:scale-110 transition-all duration-300">
                <ShoppingBagIcon className={`icon-style ${navState && 'text-slate-800 transition-all duration-300'}`} />
                <div
                  className={`absolute top-4 right-0 bg-white text-slate-800 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>
                  0
                </div>
              </button>
            </li>
            <li className="grid items-center">
              <div className='relative border-none outline-none active:scale-110 transition-all duration-300'>
                <BellIcon className={`icon-style ${navState && 'text-slate-800 transition-all duration-300'}`} />
                <div
                  className={`absolute top-4 right-0 bg-white text-slate-800 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>
                  0
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}


export default Navbar
