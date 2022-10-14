import Head from 'next/head'
import Image from 'next/image'
import LazyShow from "/components/LazyShow";
import styled from 'styled-components';
import {MdKeyboardArrowRight} from 'react-icons/md'

import { Award, Svg100Award, Medal } from '/components/icons/index'
import { Tooltip, Button, Spacer, Collapse, Text, Grid, Link } from '@nextui-org/react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import stylesProject from '../styles/Projects.module.css';


import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect, Fragment } from "react";


const LinkButton = styled.a`
    /* color: var(--main-blue);
    text-decoration: none;

    &:hover {
      color: var(--hover-blue);
    } */
`;

const ColH2 = styled.h2`
/* margin-bottom: 0; */
`;


const NoteItem = ({ children, title, mainIcon }) => (
  <>
      <Tooltip content={children} color="primary" style={{paddingLeft: ".3rem"}}>
        <div className="svgContainer">{mainIcon}</div>
      </Tooltip>
  </>
)
  

const ProjectTitle = ({ children, notes }) => (
  <div
  className={stylesProject.hFlex}>
      <Text className={stylesProject.projectTitle}>
        {children}
      </Text>
    <div className="noteContainer" style={{ flex: "1", display: "inline-block"}}>
      {notes.map((item,index)=>(
        <NoteItem key={item.title + index} mainIcon={item.displayIcon} title={item.title}>{item.description}</NoteItem>
      ))}
    </div>
  </div>
)

const ProjectItem = ({ title, children, notes=[] }) => (
  <div className={stylesProject.projectItem}>
    <ProjectTitle key={title} notes={notes}>{title}</ProjectTitle>
    {children}
    
  </div>
)


const ProjectItemCollapse = ({title, children, notes, links }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return <Collapse
  css={{padding: 0}}a
  // arrowIcon={<MdKeyboardArrowRight/>}
  title={
    <ProjectItem
      key={title}
      title={title}
      notes={notes}
      >
    </ProjectItem>
  }
  // shadow={true}
  // bordered={true}
  >
    
  <div>
    {children}
  </div>
  
  <div className={stylesProject.hFlex}>
      {
      links.map((item,index)=>(
        <Fragment key={item.title + toString(index)}>
          {/* <button class="button-28" role="button">{item.title}</button> */}
          <span>
            [
            {<LinkButton target="_blank" rel="noreferrer" href={item.url}>{item.title}</LinkButton>}
            ]
          </span>
          {/* <Link  rel="noreferrer" target="_blank"> */}
            {/* <Button style={{height: '1.4rem', marginTop: ".4rem", fontSize: "0.8rem"}}
               auto
              >
                
            </Button> */}
          {/* </Link> */}
          <Spacer x={0.5}/>
        </Fragment>
      ))
      }
    </div>
  </Collapse>
  // <LazyShow>
        
      {/* </LazyShow> */}
  
}



export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/websiteicon.ico" />
      </Head>
      <div>
        <ColH2>Cryptography</ColH2>
        <Grid.Container css={{paddingLeft: '0.5rem'}}>
          <Grid>
            <Collapse.Group 
            css={{padding: 0}}
            >
              <ProjectItemCollapse 
                title="Private Access Control for Function Secret Sharing" 
                links={[]}
                >
                  <h3>Authors</h3>

                  <p>Sacha Servan-Schreiber, Simon Beyzerov, Eli Yablon, Hyojae Park</p>

                  <h3>About</h3>

                  <p>Written in conjunction with MIT PRIMES. Cryptography paper developing distributed zero knowledge proof protocols towards access control for secret-shared functions.</p>
              </ProjectItemCollapse> 


              <ProjectItemCollapse title="Cloak: A Versatile Framework for Anonymous Authentication" 
              links={[]}
              >
                <h3>Authors</h3>
                  Sacha Servan-Schreiber, Simon Beyzerov, Eli Yablon

                <h3>About</h3>

                <p>Written in conjunction with MIT PRIMES. Cryptography paper developing privacy preserving authentication through secret-shared zero-knowledge proof protocols.</p>
              </ProjectItemCollapse>

              <ProjectItemCollapse title="Authenticated Metadata-hiding Anonymous Communication" 
              links={[]}
              >
                <h3>Authors</h3>
                  Simon Beyzerov

                <h3>About</h3>

                <p>Independent research paper exploring how anonymous authentication techniques can be used to improve the current state of the art in anonymous communication systems with cryptographic privacy guarantees. </p>
              </ProjectItemCollapse>

              <ProjectItemCollapse title="Seed-Homomorphic Pseudorandom Generators from Learning with Errors / Multi-Server Distributed Point Functions" 
              links={[]}
              >
                <h3>About</h3>
                <p>(Still in the works!)</p>
              </ProjectItemCollapse>

              <ProjectItemCollapse title="Moderately Hard Functions" 
              links={[]}
              >
                <h3>About</h3>
                <p>(Still in the works!)</p>
              </ProjectItemCollapse>   
                
            </Collapse.Group>
          </Grid>
        </Grid.Container>
        
        
      </div>
      <div>
      <ColH2>Mathematics</ColH2>
      <Grid.Container css={{paddingLeft: '0.5rem'}}>
          <Grid>
            <Collapse.Group
            //  splitted
             css={{padding: 0}}>
            <ProjectItemCollapse title="IMMC 2022" 
            notes={[{displayIcon: <Award/>, title: "", description: "Awarded US Finalist"}]}
            links={[]}>
              <h3>About</h3>
              <p>Mathematical modeling paper written during a the 2022 International Mathematical Modeling Competition (IMMC). 
              Modeled planar loading and disembarking while optimizing both processes in a diverse set of aircrafts.</p>
            </ProjectItemCollapse>
            <ProjectItemCollapse title="HiMCM 2021" 
            notes={[{displayIcon: <Award/>, title: "", description: "Awarded Meritorious"}]}
            links={[{title: "Paper"}]}>
              <h3>About</h3>
              <p>Mathematical modeling paper written during the 2021-22 High School Mathematical Contest in Modeling (HiMCM).
              Modeled the causes, future outlook, and potential consequences of rapidly depleting water levels at Lake Mead, Nevada, the nations largest freshwater reservoir.</p>
            </ProjectItemCollapse>
            <ProjectItemCollapse title="MathWorks 2022" 
            notes={[{displayIcon: <Award/>, title: "", description: "Advanced to Second Round of Competition (Top ~100 papers)"}]}
            links={[{title: "Paper"}]}>
              <h3>About</h3>
              <p>Mathematical modeling paper written during the 2022 MathWorks Mathematical Modeling Competition. 
                Modeled changes in employment caused by a pandemic-induced virtual workplace. Considered future outlook, causes, and conducted a broader mathematical and social analysis.</p>
            </ProjectItemCollapse>  
                
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </div>
      <div>
      <ColH2>Coding and more</ColH2>
      <Grid.Container css={{paddingLeft: '0.5rem'}}>
          <Grid>
            <Collapse.Group
            //  splitted
             css={{padding: 0}}>
            <ProjectItemCollapse title="SigmaML" 
            links={[{title: "Github", url: "https://github.com/sim15/sigmaml"}]}
            >
              <h3>Collaborators</h3>
              <p>Simon Beyzerov, Aaron Tian</p>
              <h3>About</h3>
              <p>A cross-platform desktop application for building machine learning models, aggregating all steps of the development process. Built with web-based technology: JavaScript, Svelte, Electron, Python.</p>
            </ProjectItemCollapse>
            <ProjectItemCollapse title="Mealgo: Recipe Filtering" 
            links={[{title: "Poster", url: "/a4g_mealgo_poster.pdf"}, {title: "Github", url: "https://github.com/sim15/Mealgo3"}]}
            >

              <h3>About</h3>
              <p>Android application designed to provide intelligent meal and recipe recommendation that considers both pricing and individual user preferences. Developed with a tailored dataset of over 500,000 recipes and thousands of unique ingredients, all with their respective nutritional information. Developed in Kotlin.</p>
            </ProjectItemCollapse>
            <ProjectItemCollapse title="NaVi: Aid for Independent Navigation for the Visually Impaired" 
            links={[{title: "Poster", url: "/navi_poster.pdf"}]}
            >

              <h3>About</h3>
              <p>Designed a physical aid for the independent navigation of public spaces for those with visual impairments. Designed software for automated guidance and designed a haptic device to aid those attempting to navigate through unadapted environments. Allows for independent parties to deploy schematics that aid individuals in the respective space.</p>
            </ProjectItemCollapse>
                
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </div>

      <div>
      <h2>Mass Academy Coursework</h2>
      <p className={stylesProject.projectSectionCaption}>
          For prospective Mass Academy students, alumni, or for anyone interested: past assignments and projects completed 
          during the 2021-22 school year are available upon request. Certain assignments will be available in the future.
        </p>
        {/* <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 440, flexGrow: 1, overflowY: 'auto' }}
        >
          <TreeItem nodeId="1" label="Mathematics">
            <TreeItem nodeId="2" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="3" label="Computer Science">
            <TreeItem nodeId="4" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="5" label="Humanities">
            <TreeItem nodeId="6" label="Essays" />
            <TreeItem nodeId="13" label="Presentations/Misc." >
              <TreeItem
              label="Satire Video"/>
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="7" label="Physics">
            <TreeItem nodeId="8" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="9" label="Spanish">
            <TreeItem nodeId="10" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="11" label="STEM">
            <TreeItem nodeId="12" label="Calendar" />
          </TreeItem>
      </TreeView> */}
      </div>
    </>
  )
}
