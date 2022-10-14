import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import Link from 'next/link';
import { Tooltip } from "@nextui-org/react";
import catPic from '../public/cat.jpg';
import saxophone from '../public/simonPlayingSax.png';


const PopImg = styled.div`
    width: 12em;
    /* background-color: #f3f5f987; */
    padding: .2em;
    /* max-width: 15px; */
`;

const TextPopover = ({textContent, children}) => {
  return <Tooltip content={<PopImg>
      {children}
    </PopImg>} shadow={true} style={{display: 'inline'}}>
            <p style={{display: 'inline'}}><a>{textContent.toString()}</a></p>
    </Tooltip>
} 

export default function Home() {
  return (
    <>
      <Head>
        <title>Simon Beyzerov</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/websiteicon.ico" />
      </Head>
      <div>
        <h2>About me</h2>
        <p>
          Hi! I&apos;m Simon, a senior at the <a target="_blank" rel="noreferrer" href="https://www.massacademy.org/">Massachusetts Academy of Math and Science at WPI</a>.
        </p>
        <p >
          I&apos;m broadly interested in mathematics and computer science, with my primary research interests lying in theoretical computer science and cryptography. 
          In general, I am most excited by problems at the intersection of theory and practice.
        </p>
        <p  style={{display: 'inline'}}>
          Outside of CS and Math, you may find me petting my&nbsp;
          </p>
          <TextPopover textContent={"cat"}>
            <Image
                src={catPic}
                alt="Picture of my cat"
            />
          </TextPopover>
          <p  style={{display: 'inline'}}>,
          making movies, playing minesweeper/football/
          </p>
          <TextPopover textContent={"my saxophone"}>
            <Image
                src={saxophone}
                alt="Picture of me playing the saxophone"
            />
          </TextPopover>
          <p style={{display: 'inline'}} >
          , listening to the same three songs on loop, or walking on my hands.
        </p>
        
        <h2>Research</h2>

        <p>
          
          While I&apos;ve been interested in mathematics and CS since the around 2nd grade, much of my recent 
          explorations have been in research; 
          I&apos;ve been primarily working on on projects in cryptography and theoretical computer science in conjunction
          with 
          the <a target="_blank" rel="noreferrer" href="https://primes.mit.edu/">MIT PRIMES</a> program and under the 
          mentorship of <a target="_blank" rel="noreferrer" href="https://sachaservanschreiber.com/">Sacha Servan-Schreiber</a> @ <a target="_blank" rel="noreferrer" href="https://www.csail.mit.edu/">MIT CSAIL</a>.
          
          </p>

          <p>
            For more details on my work in crypto or in other areas, please see my <Link href="/projects">projects</Link>. 
          </p>
      </div>
    </>
  )
}
