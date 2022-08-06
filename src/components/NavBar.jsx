import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <>
        <AppBar position='static'>
            <Toolbar className='flex justify-between'>
                <div className='space-x-8'>
                    <Link to="/">
                        Browse
                    </Link>
                    <Link to="/art">
                        Art
                    </Link>
                    <Link to="/jewelry">
                        Jewelry
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </>
}
export default Navbar;