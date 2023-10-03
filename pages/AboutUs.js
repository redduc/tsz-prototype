import Head from 'next/head'
import React from "react";
import TSZNavigation from '../components/Navigation';
import Employees from "../components/Employees";
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <TSZNavigation addReveal={false} />
      <Employees />
      <ContactUs />
    </>
  )
}
