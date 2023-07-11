import React from 'react';
import './nav.css'
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    const navStyle = 
    {display:"flex", 
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "tomato",
    padding: "0 20px"}
    return (
    <div>
        <nav style={navStyle}>
            <div style={{marginLeft:'50px'}}>
                <h2>E-Commerce Store</h2>
            </div>
            <div style={{display:"flex", fontWeight: "600", marginRight:'80px'}}>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
            </div>
        </nav>
        <Outlet></Outlet>
        </div>
    );
};

export default Nav;