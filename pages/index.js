import { Tooltip } from '@nextui-org/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import catPic from '../public/cat.jpg';

const PopImg = styled.div`
  width: 12em;
  /* background-color: #f3f5f987; */
  padding: 0.2em;
  /* max-width: 15px; */
`;

const TextPopover = ({ textContent, children }) => {
  return (
    <Tooltip
      content={<PopImg>{children}</PopImg>}
      shadow={true}
      style={{ display: 'inline' }}
    >
      <p style={{ display: 'inline' }}>
        <a>{textContent.toString()}</a>
      </p>
    </Tooltip>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Simon Beyzerov</title>
        <meta name="description" content="" />
        <link rel="icon" href="/websiteicon.ico" />
      </Head>
      <div>
        <h2>About me</h2>
        <p>
          Hi! I&apos;m Simon, a freshman computer science student at Carnegie
          Mellon University. I&apos;m broadly interested in mathematics and
          computer science, with my primary research interests lying in
          cryptography, distributed computing, and theoretical computer science
          as a whole.
        </p>
        <p></p>
        <p>
          Over the past few years, I&apos;ve been heavily involved in a series
          of (primarily theoretical) research projects with MIT&apos;s
          Computational Structures Group looking at privacy-preserving database
          access, and more recently have joined Tensordock in expanding their
          decentralized cloud-GPU network.{' '}
        </p>

        <p>
          In general, I&apos;m most excited by new problems at the intersection
          of theory and practice, especially using new theoretical tools to
          improve existing systems&apos; privacy and performance :) For some of
          my work in crypto and other areas, please see my{' '}
          <Link href="/projects">projects</Link>.
        </p>
        <p style={{ display: 'inline' }}>
          Outside of CS and Math you may find me chasing my&nbsp;
        </p>
        <TextPopover textContent={'cat'}>
          <Image src={catPic} alt="Picture of my cat" />
        </TextPopover>
        <p style={{ display: 'inline' }}>
          , spending too much time on minesweeper puzzles
        </p>
        {/* <TextPopover textContent={'my saxophone'}>
          <Image src={saxophone} alt="Picture of me playing the saxophone" />
        </TextPopover> */}
        <p style={{ display: 'inline' }}>
          , and walking on my hands. I&apos;m also a big fan of all Boston
          sports teams and especially love keeping up with football and
          basketball.
        </p>
        <p></p>
        <p>
          If you&apos;d like to <Link href="/contact">chat</Link>, feel free to
          reach out!
        </p>

        {/* <h2>Research</h2> */}

        {/* <p>
          For the past few years, I&apos;ve explored computer science through
          research. Along with other ventures, I&apos;ve been working on
          projects in cryptography and theoretical computer science in
          conjunction with the{' '}
          <a target="_blank" rel="noreferrer" href="https://primes.mit.edu/">
            MIT PRIMES
          </a>{' '}
          program, under the mentorship of{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://sachaservanschreiber.com/"
          >
            Sacha Servan-Schreiber
          </a>{' '}
          @{' '}
          <a target="_blank" rel="noreferrer" href="https://www.csail.mit.edu/">
            MIT CSAIL
          </a>
          .
        </p> */}

        {/* <h2>News</h2>
        <ul>
          <li>
            <p>
              11/2022: Our paper &quot;Private Access Control for Function
              Secret Sharing&quot; has been accepted to S&P2023!
            </p>
          </li>
          <li>
            <p>
              11/2022: Our recent project has been awarded the Bronze prize at
              the S.T-Yau High School Science Award (North America)!
            </p>
          </li>
          <li>
            <p>
              11/2022: Our recent project has been named a semi-finalist the
              S.T-Yau High School Science Award (North America)!
            </p>
          </li>
          <li>
            <p>
              10/2022: Our recent project on private access control has been
              invited to present at the AMS-PME Undergraduate Poster Session at
              the Joint Mathematics Meeting (JMM 2023)
            </p>
          </li>
        </ul> */}
      </div>
    </>
  );
}
