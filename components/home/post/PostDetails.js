import React from "react";
import PostHeader from "./PostHeader";
import classes from "./PostDetails.module.css";

const PostDetails = (props)=>{

    return (<article className={classes.content}>
        <PostHeader title={props.postItem.title} imgURL={props.postItem.imgURL}></PostHeader>
        <section>{props.postItem.description}</section>
    </article>);
}

export default PostDetails;