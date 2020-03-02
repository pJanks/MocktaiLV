import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
    <button><Link className='link' to='/'>Homepage</Link></button>
    <button><Link className='link' to='/OffTheWagon'>Off The Wagon</Link></button>
    <button><Link className='link' to='/Favorites'>Favorites</Link></button>
    </nav>
  )
}

export default Nav;
