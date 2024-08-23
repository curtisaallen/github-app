'use client'
import React, {useState} from 'react';
import Image from "next/image";
import sun from "@/public/icon-sun.svg";
import moon from "@/public/icon-moon.svg";


export const Header = () => {
  const [styleSwitcher, setStyleSwitcher] = useState<string>('Light')

  const handleSwitchStyle = () => {
    if(styleSwitcher === 'Light') {
      setStyleSwitcher('Dark');
      document.body.classList.add('darklayout');
    } else {
      setStyleSwitcher('Light')
      document.body.classList.remove('darklayout')
    }
  }
  return (
      <div className='flex flex-wrap justify-between items-center py-5 header'>
        <h1 className="logo text-7xl">devfinder</h1>
        <button className='flex' onClick={handleSwitchStyle}>
            {styleSwitcher}
            <Image className='ms-2' src={styleSwitcher == 'Dark' ? sun : moon} alt={styleSwitcher} />
        </button>
      </div>
  );
};