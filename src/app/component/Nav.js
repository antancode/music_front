import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/new_playlist'>New Play List</Link></li>
            <li><Link to='/playlist'>Play List</Link></li>
        </ul>
    </div>
  )
}
