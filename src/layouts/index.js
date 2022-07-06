import React from "react";
import Header from "./Header";
import Body from "./Body";
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <>
            <h1> LayoutPage</h1>
            <Header />
            <Body />
            <Outlet />

        </>
    )
}

export default Layout;