import React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { LogoutBtn, Container, Logo } from '../index';
import {useSelector} from 'react-redux'
export default function Header() {

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();


  const navItems = [
    { id: 1, title: 'Home', slug: '/', active: true },
    { id: 2, title: 'Sign Up', slug: '/sign-up', active: !authStatus },
    { id: 3, title: 'Login', slug: '/login', active: !authStatus },
    { id: 4, title: 'All Posts', slug: '/all-posts', active: authStatus },
    { id: 5, title: 'Create Post', slug: '/create-post', active: authStatus }
  ];

  return (
    <header className='py-3 px-10 bg-sky-600 h-20 shadow-lg'>
    <Container>
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo  />
            </Link>
        </div>
        <ul className='flex ml-auto my-auto'>
          {navItems.map((item) => item.active ? 
          (  <li key={item.id} className=' list-none'>
              <button onClick={() => navigate(item.slug)}
              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-white hover:text-black'>{item.title}</button>
            </li>
          ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
      </Container>
  </header>
  );
}
