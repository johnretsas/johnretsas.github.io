import React from "react";

const Navbar = () => {

    return (
        <nav className="root_navbar">
            <div className="root_navbar_element">
                <a className="root_navbar_link_idle root_navbar_link" href="/">Home</a>
            </div>
            <div className="root_navbar_element">
                <a className="root_navbar_link_idle root_navbar_link" href="/blog">Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;