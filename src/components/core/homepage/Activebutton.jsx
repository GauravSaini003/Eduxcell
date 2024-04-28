import React from 'react';
import { Link } from 'react-router-dom';

const Activebutton = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div className={`text-center font-semibold rounded-md py-1 px-3 text-[14px] hover:scale-95 transition-all duration-200 ${active ? "bg-yellow-100 text-black" : "bg-black text-white"}`}>
        {children}
      </div>
    </Link>
  );
};

export default Activebutton;
