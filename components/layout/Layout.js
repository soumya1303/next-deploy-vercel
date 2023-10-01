import React, { Fragment } from "react";
import Navigation from "./Navigation";


const Layout = (props)=>{
    <Fragment>
        <Navigation />
        <main>{props.children}</main>
    </Fragment>
}

export default Layout;