import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Menubar.css"

class Menubar extends Component {
    render() {
        return (
            <div className='menu'>
               <div className="menu_left">
                    Shapely Demo
               </div>
               <div className="menu_right">
                   <NavLink to="/home">
                    <span>Home</span>
                   </NavLink>
                    <span>Blog</span>
                    <span>Portfolio</span>
                    <NavLink to="/about">
                    <span>About the tests</span>
                    </NavLink>
               </div>
            </div>
        );
    }
}

export default Menubar;