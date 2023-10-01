import "../styles/globals.css";
import Layout from  "../components/layout/Layout";
import Head from "next/head";
import { Fragment } from "react";

const MyApp = ({ Component, pageProps })=>{
  return (
        <Fragment>
          <Head>
            <title>My Travel Diary</title>
            <meta name="description" content="My travel diary"></meta>
            <meta name="viewport" content="width=device-width initial-scale=1"></meta>
          </Head>
          <Component {...pageProps} />
        </Fragment>
    )
  }


export default MyApp;
