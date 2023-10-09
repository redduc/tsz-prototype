import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Home2Top from "../components/Home2Top";
import Services from "../components/Services";
import ContactUs from '../components/ContactUs';

export default function Home() {
  useEffect(() => {
    document.body.className = 'no-padding-top';
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TSZ examples</title>
      </Head>
      <Home2Top />
      <Services />
      <ContactUs />
    </>
  )
}
