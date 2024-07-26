import React from 'react';
  
const Button = ({ text, onClick, isActive }) => {
    const ButtonCSS = `flex w-[40px] h-[40px] rounded-full ${ isActive ? 'bg-Orange text-Very_Dark_Blue' : 'bg-Dark_Blue'} text-Light_Grey font-bold justify-center items-center sm:w-[52px] sm:h-[52px] hover:bg-White hover:text-Very_Dark_Blue`;
  return (
    <button className={ButtonCSS} onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

export default Button;
