import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
    <button><Link to='/'>Homepage</Link></button>
    <button><Link to='/OffTheWagon'>Off The Wagon</Link></button>
    </nav>
  )
}

export default Nav;
