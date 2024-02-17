import React from 'react'
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    
  return (
    <div className="dashboard">
        <div className='menu'>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='content'>
            <h2>Content</h2>
        </div>
    </div>
  )
}

export default Dashboard;
