import React from "react";
import Head from "next/head";
import AllPosts from "../../components/home/AllPosts";
import { getAllBlogs } from "../../blogMaster";
const Posts = ()=>{

    const posts = getAllBlogs();

    return (<React.Fragment> 
                <Head>
                    <title>Germany top 10 </title>
                </Head>
                <AllPosts posts={posts}></AllPosts>)
            </React.Fragment>)
}

export default Posts;