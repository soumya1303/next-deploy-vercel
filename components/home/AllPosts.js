import React from "react";
import PostGrid from "./ui/PostGrid";
import classes from "./AllPosts.module.css";


const AllPosts = (props)=>{

    return (<section className={classes.posts}>
                <h1>All posts </h1>
                <PostGrid posts={props.posts}></PostGrid>
            </section>)
}

export default AllPosts;