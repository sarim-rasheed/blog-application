import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoutBtn, Container, Logo } from '../index';
import {useSelector} from 'react-redux'
export default function Header() {

  const authStatus = useSelector((state) => state.User.status);


  const navItems = [
    { id: 1, title: 'Home', slug: '/', active: true },
    { id: 2, title: 'Sign Up', slug: '/sign-up', active: !authStatus },
    { id: 3, title: 'Login', slug: '/login', active: !authStatus },
    { id: 4, title: 'All Posts', slug: '/all-posts', active: authStatus },
    { id: 5, title: 'Create Post', slug: '/create-post', active: authStatus }
  ];

  return (
    <header className='shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]'>
<Container>
    <div className='flex flex-wrap items-center justify-between gap-5 relative'>
     {'Logo will COme Here'}
      <div className='flex lg:order-1 max-sm:ml-auto'>
        <button
          className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Login</button>
        <button
          className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3'>Sign
          up</button>
        <button id="toggle" className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul id="collapseMenu" className='lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
        {navItems.map((item) => item.active ?
        (
            <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
            className='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</a>
        </li>
        ) : null)}
        
      
      </ul>
    </div>
</Container>
  </header>
  );
}
