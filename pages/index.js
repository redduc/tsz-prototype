import Head from 'next/head'
import React, {useEffect, useState} from "react";
import EntryView from "../components/EntryView";
import Services from "../components/Services";
import ContactUs from '../components/ContactUs';

export default function Home() {
  useEffect(() => {
    document.body.className = 'no-padding-top';
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <EntryView />
      <Services />
      <ContactUs />
    </>
  )
}
