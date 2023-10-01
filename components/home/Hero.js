import React, { Fragment } from "react";
import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = ()=>{
    return (<Fragment>
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/img/blog-image.jpeg" alt="" height={300} width={300}></Image>
            </div>
            <h1>I am Som</h1>
            <p>I blog about cricket, popular physics, astronomy, history and coding</p>
        </section>
    </Fragment>);
}

export default Hero;