import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import classes from "./Navigation.module.css"; 

const Navigation = ()=>{
    return (<header className={classes.header}>
        <Link href="/">
            <a><Logo/></a>
        </Link>
        <nav>
            <ul>
                <li><Link href="/posts"></Link></li>
                <li><Link href="/contact"></Link></li>
            </ul>
        </nav>
    </header>)
}

export default Navigation;