import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="root_navbar">
            <div className="root_navbar_element">
                <Link className="root_navbar_link_idle root_navbar_link" to="/">Home</Link>
            </div>
            <div className="root_navbar_element">
                <Link className="root_navbar_link_idle root_navbar_link" to="/blog">Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;