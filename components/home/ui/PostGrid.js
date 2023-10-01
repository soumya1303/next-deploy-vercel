import React from "react";
import classes from "./PostGrid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props)=>{
    return (<ul className={classes.grid}>{
        props.posts.map((p)=>{
            return (<PostItem key= {p.slug} postItem = {p}/>)
        })
    }</ul>)
}

export default PostGrid;