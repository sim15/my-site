import Navbar from "./Navbar";
import styled from 'styled-components';
import {motion} from 'framer-motion'
import Image from 'next/image'
import facePic from '../public/face.png'

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
`



export default function Layout({children}) {
    return (
        <div>
            <div className="navWrapper">
            
                <ProfileImage>
                    <Image
                        src={facePic}
                        alt="Picture of my face"
                        layout='fill'
                        className="rounded" css={{height: "100%", width: "auto", color: "blue", margin: "0 auto", display: "inline"}}
                    />
                </ProfileImage>

            <div>
                <ProfileSection>
                    <h1>Simon Beyzerov</h1>
                    <div>
                        <span className="emphHeader">
                                svbeyzerov [at] wpi.edu
                        </span>
                    </div>
                    
                </ProfileSection>
            </div>
            </div>
            <Navbar />
            <div className="mainBody">
                {children}
            </div>
        </div>
    );
}