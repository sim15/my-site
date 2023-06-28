// const { gsap } = require('gsap/dist/gsap');
// const { Draggable } = require('gsap/dist/Draggable');
import Image from 'next/image';
import styled from 'styled-components';
import facePic from '../public/beyz.png';
import Navbar from './Navbar';

// gsap.registerPlugin(Draggable);

// Draggable.create('#box', {
//   type: 'x,y',
//   bounds: '#container',
//   // overshootTolerance: 0,
//   // inertia:true
// });

// Draggable.create('#circle', {
//   type: 'rotation',
//   // inertia:true
// });

const ProfileImage = styled.div`
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
`;

const ProfileSection = styled.div`
  font-size: 2rem;
  margin: 1rem 0 2rem 0;
`;

{
  /* <svg
        className="cat1"
        width="100"
        height="100"
        css={{
          position: 'fixed',
          bottom: '0',
          left: '12%',
        }}
      >
        <circle
          cx="44"
          cy="44"
          r="40"
          stroke="green"
          strokeWidth="4"
          fill="yellow"
        />
      </svg>
      <svg
        className="cat1"
        width="100"
        height="100"
        css={{
          position: 'fixed',
          bottom: '0',
          left: '12%',
        }}
      >
        <circle
          cx="44"
          cy="44"
          r="40"
          stroke="green"
          strokeWidth="4"
          fill="yellow"
        />
      </svg>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="600px"
        height="300px"
        viewBox="0 0 600 300"
        enable-background="new 0 0 600 300"
      >
        <path
          id="container"
          d="M286.131,285.808H38.515c-6.6,0-12-5.4-12-12V26.192c0-6.6,5.4-12,12-12h247.616c6.6,0,12,5.4,12,12v247.616
	C298.131,280.408,292.731,285.808,286.131,285.808z"
        />
        <g id="box">
          <path
            fill="#88ce02"
            stroke="#000000"
            stroke-miterlimit="10"
            d="M261.677,205.856H169.52c-6.6,0-12-5.4-12-12v-92.157
		c0-6.6,5.4-12,12-12h92.157c6.6,0,12,5.4,12,12v92.157C273.677,200.456,268.277,205.856,261.677,205.856z"
          />
          <text
            transform="matrix(1 0 0 1 194.1124 149.8997)"
            font-family="'MyriadPro-Regular'"
            font-size="12"
          >
            throw me
          </text>
        </g>
        <g id="circle">
          <g>
            <circle
              fill="#88ce02"
              stroke="#000000"
              stroke-miterlimit="10"
              cx="420.681"
              cy="149.9"
              r="80.349"
            />
          </g>
          <text
            transform="matrix(1 0 0 1 400.2934 153.4218)"
            font-family="'MyriadPro-Regular'"
            font-size="12"
          >
            spin me
          </text>
          <circle fill="#DDEAB0" cx="484.594" cy="149.9" r="10.48" />
        </g>
        <text
          transform="matrix(1 0 0 1 41.5878 29.476)"
          fill="#FFFFFF"
          font-family="'ArialMT'"
          font-size="12"
        >
          green box will stay within bounds of container
        </text>
      </svg> */
}

export default function Layout({ children }) {
  return (
    <>
      <div className="pageBody">
        <div className="navWrapper">
          <ProfileImage>
            <Image
              src={facePic}
              alt="Picture of my face"
              layout="fill"
              className="rounded"
              css={{
                height: '100%',
                width: 'auto',
                color: 'blue',
                margin: '0 auto',
                display: 'inline',
                pointerEvents: 'none',
              }}
            />
          </ProfileImage>

          <div>
            <ProfileSection>
              <h1>Simon Beyzerov</h1>
              <div>
                <span className="emphHeader">sbeyzerov [at] gmail.com</span>
              </div>
            </ProfileSection>
          </div>
        </div>
        <Navbar />

        <div className="mainBody">{children}</div>
      </div>
    </>
  );
}
