import Head from 'next/head'
import React from "react";
import EntryView from "../components/EntryView";
import Services from "../components/Services";
import Productions from "../components/Productions";
import Studios from "../components/Studios";
import Technology from "../components/Technology";
import Employees from "../components/Employees";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <EntryView />
      <Services />
      {/* <Productions /> */}
      {/* <Studios /> */}
      {/* <Technology /> */}
      {/* <Employees /> */}
    </>
  )
}
