import React from 'react'

import {Link} from 'react-router-dom'
import './images.css'
const Navbar = () => (
  <div>
    <Link to="/home">
      <h1 id="header"> The Meow Project</h1>
    </Link>
    <nav>
      <div>
        <Link to="/saved">My Saved Items</Link>
      </div>
    </nav>
  </div>
)
export default Navbar
