import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-7 text-gray-800 shadow-md ">
        <div className="mb-4 md:mb-0 flex items-center justify-between w-full md:w-auto">
         <NavLink to='/'>
            <h1 className="text-[20px]">Pokemon</h1>
            </NavLink> 
          <div className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8e"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } mb-4 md:mb-0 md:block`}
        >
          <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-10">
           <NavLink to={'/'}>
            <li className="text-[1.25rem] flex gap-3 items-center">
              Browser
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 -960 960 960"
                width="1.5rem"
                fill="#e8e"
                >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600v-80h160v-480H200v480h160v80H200Zm240 0v-246l-64 64-56-58 160-160 160 160-56 58-64-64v246h-80Z" />
              </svg>
            </li>
             </NavLink>
                  
              <NavLink to={'/wishlist'}>
            <li className="text-[1.25rem] flex gap-3 items-center">
              Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 -960 960 960"
                width="1.5rem"
                fill="#e8e"
                >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            </li>
            </NavLink>

            <NavLink to={'/save'}> 
            <li className="flex gap-3 text-[1.25rem] items-center">
              Save
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 -960 960 960"
                width="1.5rem"
                fill="#e8ea"
                >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
              </svg>
            </li>
            </NavLink>
          </ul>
        </div>

        {/* Login/Register Buttons */}
        <div
          className={`flex flex-col md:flex-row items-center md:gap-10 ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <button className="bg-blue-500 w-[6.25rem] h-[2.375rem] rounded-md hover:bg-green-600 text-white font-bold">
            Login
          </button>
          <button className="md:ml-10 sm:ml-0 sm:mt-2 bg-green-600 text-white font-bold hover:bg-blue-500 w-[6.25rem] h-[2.375rem] rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
