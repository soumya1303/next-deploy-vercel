import React from "react";
import Image from "next/image";
import classes from "./PostHeader.module.css";

const PostHeader = (props)=>{

    return (<header className={classes.header}>
        <h1>{props.title}</h1>
        <Image src={props.imgURL} height={400} width={400} />
    </header>)
}

export default PostHeader;