import Head from 'next/head';
import styled from 'styled-components';

const ContactColumns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContactCol = styled.div`
  flex: 1;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactLi = styled.li`
  padding: 0.7rem 0;
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/websiteicon.ico" />
      </Head>

      <ContactColumns>
        <ContactCol>
          <h2>Contact</h2>
          <ContactList>
            <ContactLi>Simon Beyzerov</ContactLi>
            <ContactLi>sbeyzerov [at] gmail.com</ContactLi>
            <ContactLi>sbeyzero [at] andrew.cmu.edu</ContactLi>
          </ContactList>
        </ContactCol>

        <ContactCol>
          <h2>Miscellaneous</h2>
          <ContactList>
            <ContactLi>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sim15/"
              >
                LinkedIn
              </a>
            </ContactLi>
            <ContactLi>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sim15"
              >
                GitHub
              </a>
            </ContactLi>
            <ContactLi>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://scholar.google.com/citations?user=w08suY8AAAAJ&hl=en"
              >
                Google Scholar
              </a>
            </ContactLi>
          </ContactList>
        </ContactCol>

        {/* <ContactCol>
          <h2>Contact</h2>
          <ContactList>
            <ContactLi>ok@ok.com</ContactLi>
            <ContactLi>ok@ok.com</ContactLi>
            <ContactLi>ok@ok.com</ContactLi>
            <ContactLi>ok@ok.com</ContactLi>
            <ContactLi>ok@ok.com</ContactLi>
            
          </ContactList>
        </ContactCol> */}
      </ContactColumns>
    </>
  );
}
