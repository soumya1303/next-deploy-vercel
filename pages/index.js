import React, { Fragment } from "react";

import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";
import {getFeaturedBlogs} from "../blogMaster";

const Home = ()=>{

    const featuredPosts = getFeaturedBlogs();

    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={featuredPosts}/>
        </Fragment>)
}

export default Home;