import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {getBlogBySlug} from "../../../blogMaster";
import PostDetails from "../../../components/home/post/PostDetails";

const Post = ()=>{

    const router = useRouter();

    if (!router.query.slug){
        return (<h1>Loading page...</h1>)
    }

    const post = getBlogBySlug(router.query.slug[0]);

    return (<React.Fragment> 
                <Head>
                    <title>{post.title}</title>
                </Head>
                <PostDetails postItem={post}></PostDetails>
            </React.Fragment>)
}

export default Post;