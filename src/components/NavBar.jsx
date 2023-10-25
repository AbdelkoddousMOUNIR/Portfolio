import React, { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import '../styles/NavBar.css';
import { appContext } from '../context/AppContext';

export default function NavBar() {
  let { mode, changeMode } = useContext(appContext);

  return (
    <div className='NavBar'>
        <div className='logo'>abdelkoddous mounir</div>
        {mode ? (
            <BsFillSunFill className='icon sunIcon' onClick={changeMode} />
        ) : (
            <BsFillMoonFill className='icon moonIcon' onClick={changeMode} />
        )}
    </div>
  );
}
