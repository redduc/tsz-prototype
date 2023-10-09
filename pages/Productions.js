import Head from 'next/head'
import React from "react";
import TSZNavigation from '../components/Navigation';
import ProductionList from "../components/ProductionList";
import ContactUs from '../components/ContactUs';

export default function Studios() {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <TSZNavigation addReveal={false} />
      <ProductionList />
      <ContactUs />
    </>
  )
}
