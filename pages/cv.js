import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@nextui-org/react';
import styled from 'styled-components';
import { Paper } from '/components/icons/index'


export default function CV() {
  return (
    <>
      <Head>
        <title>CV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/websiteicon.ico" />
      </Head>
      <h2>CV</h2>
      <p>An up-to-date copy of my CV is available upon request. Please feel free to contact me with any questions.</p>
      {/* <Button
      auto rounded bordered style={{margin: "0 auto"}}
      icon={<Paper fill="currentColor"/>}
      >
        CV (Updated PDF)
      </Button> */}
    </>
  )
}
