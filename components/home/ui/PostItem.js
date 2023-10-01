import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./PostItem.module.css";

const PostItem = (props)=>{

    const {title, imgURL, date, excerpt, slug} = props.postItem;

    const formatDt = new Date(date).toLocaleDateString("en-GB", {
        year:"numeric",
        month:"short"
    });

    return (<li className={classes.post}>
        <Link href={`/posts/${slug}`}>
            
                <div className={classes.image}>
                    <Image src={imgURL} alt="" height={300} width={410} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formatDt}</time>
                    <p>{excerpt}</p>
                </div>
            
        </Link>
    </li>)
}

export default PostItem;