import React from "react";
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    let location = useLocation<any>();
    return (
        <nav className="root_navbar">
            <div className="root_navbar_element">
                <Link className="root_navbar_link_idle root_navbar_link" to="/">Home</Link>
            </div>
            <div className="root_navbar_element">
                <Link className="root_navbar_link root_navbar_link_idle" to="/blog">Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;