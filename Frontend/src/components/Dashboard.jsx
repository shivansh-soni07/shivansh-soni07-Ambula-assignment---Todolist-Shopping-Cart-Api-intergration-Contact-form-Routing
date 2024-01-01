import React from 'react'
import '../styles/dashboard.css'
import {Link} from 'react-router-dom';


// It is the main header for our website and will help us navigate



function Dashboard() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
         <li>
          <Link to="/api">Weather API</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/todoapp">Todo List</Link>
        </li>
        <li>
          <Link to="/shopping">Products</Link>
        </li>
      </ul>
    </nav>

     
    </div>
  )
}

export default Dashboard