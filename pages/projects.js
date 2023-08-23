import Head from 'next/head';
import styled from 'styled-components';

import {
  Badge,
  Collapse,
  Grid,
  Spacer,
  Text,
  Tooltip,
} from '@nextui-org/react';
import { Award } from '/components/icons/index';

import stylesProject from '../styles/Projects.module.css';

import { useAnimation } from 'framer-motion';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

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
    <Tooltip
      content={children}
      color="primary"
      style={{ paddingLeft: '.3rem' }}
    >
      <div className="svgContainer">{mainIcon}</div>
    </Tooltip>
  </>
);

const ProjectTag = ({ children, tags }) => (
  <>
    <Grid.Container gap={0.5}>
      {tags.map((item, index) => (
        <Grid key={item + index}>
          <Badge
            disableOutline
            isSquared
            variant={'flat'}
            key={item + index + 'b'}
          >
            {item}
          </Badge>
        </Grid>
      ))}
    </Grid.Container>
  </>
);

const ProjectTitle = ({ children, notes }) => (
  <div className={stylesProject.hFlex}>
    <Text className={stylesProject.projectTitle}>{children}</Text>
    <div
      className="noteContainer"
      style={{ flex: '1', display: 'inline-block' }}
    >
      {notes.map((item, index) => (
        <NoteItem
          key={item.title + index}
          mainIcon={item.displayIcon}
          title={item.title}
        >
          {item.description}
        </NoteItem>
      ))}
    </div>
  </div>
);

const ProjectItem = ({ title, children, notes = [] }) => (
  <div className={stylesProject.projectItem}>
    <ProjectTitle key={title} notes={notes}>
      {title}
    </ProjectTitle>
    {children}
  </div>
);

const ProjectItemCollapse = ({ title, children, notes, links }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <Collapse
      css={{ padding: 0 }}
      a
      // arrowIcon={<MdKeyboardArrowRight/>}
      title={
        <ProjectItem key={title} title={title} notes={notes}></ProjectItem>
      }
      // shadow={true}
      // bordered={true}
    >
      <div>{children}</div>

      <div className={stylesProject.hFlex} style={{ paddingTop: '0.2em' }}>
        {links.map((item, index) => (
          <Fragment key={item.title + toString(index)}>
            {/* <button class="button-28" role="button">{item.title}</button> */}
            <span>
              [
              {
                <LinkButton target="_blank" rel="noreferrer" href={item.url}>
                  {item.title}
                </LinkButton>
              }
              ]
            </span>
            {/* <Link  rel="noreferrer" target="_blank"> */}
            {/* <Button style={{height: '1.4rem', marginTop: ".4rem", fontSize: "0.8rem"}}
               auto
              >
                
            </Button> */}
            {/* </Link> */}
            <Spacer x={0.5} />
          </Fragment>
        ))}
      </div>
    </Collapse>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="projects" content="" />
        <link rel="icon" href="/websiteicon.ico" />
      </Head>
      <div>
        <ColH2>Cryptography</ColH2>
        <Grid.Container css={{ paddingLeft: '0.5rem' }}>
          <Grid>
            <Collapse.Group css={{ padding: 0 }}>
              <ProjectItemCollapse
                title="Private Access Control for Function Secret Sharing"
                links={[
                  {
                    title: 'Paper (full version)',
                    url: 'https://eprint.iacr.org/2022/1707',
                  },
                  {
                    title: 'Paper (conference version)',
                    url: 'https://www.computer.org/csdl/proceedings-article/sp/2023/933600b257/1Js0DNr8h6U',
                  },
                  {
                    title: 'Slides',
                    url: 'https://sachaservanschreiber.com/slides/pacls.pdf',
                  },
                  {
                    title: 'Code',
                    url: 'https://github.com/sachaservan/pacl',
                  },
                ]}
                notes={[
                  {
                    displayIcon: <Award />,
                    title: '',
                    description: 'Awarded S.T.-Yau Bronze Medal',
                  },
                ]}
              >
                <h3>Authors</h3>

                <p>
                  Sacha Servan-Schreiber, <u>Simon Beyzerov</u>, Eli Yablon,
                  Hyojae Park
                </p>

                <h3>Publications/Talks</h3>
                <p>
                  <em>
                    IEEE Symposium on Security and Privacy (Oakland) 2023,
                    AMS-PME at the Joint Mathematics Meeting (JMM 2023)
                  </em>
                </p>

                <h3>About</h3>

                <p>
                  <Latex>
                    In function secret sharing (FSS) a dealer can privately
                    outsource some function $f$ to a set of evaluators. These
                    evaluators can evaluate the function on some input $x$
                    without learning the result of the computation $f(x)$. We
                    introduce the notion of private access control for function
                    secret sharing, whereby we restrict the dealer to only be
                    able to secret-share a function that they have been granted
                    access to, all while maintaining privacy.
                    {/* Cryptograph paper developing
                    distributed zero knowledge proof protocols towards access
                    control for secret-shared functions. */}
                  </Latex>
                </p>
              </ProjectItemCollapse>

              <ProjectItemCollapse
                title="Cloak: A Versatile Framework for Anonymous Authentication"
                links={[
                  {
                    title: 'Slides',
                    url: 'https://math.mit.edu/research/highschool/primes/materials/2021/October/8-4-Beyzerov-Yablon.pdf',
                  },
                ]}
              >
                <h3>Authors</h3>
                <p>
                  Sacha Servan-Schreiber, <u>Simon Beyzerov</u>, Eli Yablon
                </p>
                <h3>About</h3>
                <p>
                  <i>(Full paper is available upon request)</i>
                  <Latex>
                    . Many online resources are pay-walled or otherwise
                    restricted to the public. To access these resources, users
                    need to prove access privileges through an authentication
                    mechanism. For example, news websites such as the New York
                    Times (NYT) offer news articles exclusively to paid
                    subscribers. To access NYT articles, users provide the NYT
                    website with an email and password associated with an active
                    subscription (users to the NYT). What if users want to
                    preserve their privacy and not reveal which articles they
                    consume? An anonymous authentication mechanism can solve
                    this problem. We introduce a novel zero-knowledge proof
                    protocol towards the development of a framework for
                    anonymous authentication.
                    {/* Cryptography paper developing privacy preserving
                    authentication through secret-shared zero-knowledge proof
                    protocols. */}
                  </Latex>
                </p>
              </ProjectItemCollapse>

              <ProjectItemCollapse
                title="Authenticated Metadata-hiding Anonymous Communication"
                links={[
                  { title: 'Code', url: 'https://github.com/sim15/anon-com' },
                  {
                    title: 'Paper',
                    url: '/anon_com.pdf',
                  },
                ]}
              >
                <h3>Authors</h3>
                <p>Simon Beyzerov</p>
                <h3>About</h3>
                <p>
                  <Latex>
                    Paired with the rise of consumer data analytics, the
                    continued transition of interpersonal communication onto the
                    Internet has made privacy an increasingly important
                    requirement in many network systems. Although attempts by
                    services such as WhatsApp, iMessage, and Facebook Messenger
                    to employ methods of end-to-end encryption have succeeded in
                    securing message content, leaked metadata has exposed the
                    power of underlying communication data. In this work, we
                    present a set of lightweight constructions for anonymous
                    communication with cryptographic privacy guarantees for
                    users.
                    {/* Independent research paper exploring how anonymous
                    authentication techniques can be used to improve the current
                    state of the art in anonymous communication systems with
                    cryptographic privacy guarantees. */}
                  </Latex>
                </p>
              </ProjectItemCollapse>

              <ProjectItemCollapse title="Moderately Hard Functions" links={[]}>
                <h3>Authors/Collaborators</h3>
                <p>Simon Beyzerov, Leonid Reyzin</p>
                <h3>About</h3>
                <p>(Still in the works!)</p>

                <p>
                  This project came about during the summer 2022, during which
                  Professor Leo Reyzin introduced me to this intriguing, tough
                  problem at the intersections of complexity theory,
                  cryptography, engineering, and even physics! I&apos;ve tried
                  to include a brief (hopefully accessible) introduction to the
                  problem for anyone curious.
                </p>
                <h3>Mini-summary</h3>
                <p>
                  Traditionally, a cryptographer&apos;s main goal is to design
                  clever methods of communication while in the presence of bad
                  actors. Maybe you&apos;ve heard of secret codes that allow us
                  to send letters to people halfway across the world, while
                  ensuring only the recipient can read it. Perhaps you&apos;ve
                  heard of encryption machines used during the war to encode
                  secret military communications. In all of these cases, the
                  information being communication is being protected from some
                  (potentially unknown) <i>adversary</i>.
                </p>
                <p>
                  The natural challenge with hiding information is that we have
                  absolutely no clue <i>who</i> we&apos;re hiding it from and
                  what they&apos;re capable of; are we fighting against a naive
                  toddler or a super genius? Does the adversary have a computer
                  of some kind, or just a pen and pencil? If a computer, which
                  kind? We have no clue. But it&apos;s only right we protect
                  against the worst case scenario. So cryptographers always
                  assume we&apos;re dealing with some super genius that may hold
                  knowledge of problems we don&apos;t even know how to solve. In
                  some sense, we assume the adversary is <i>arbitrarily</i>{' '}
                  strong.
                </p>
                <p>
                  Cryptographers have come up with many neat tricks to formalize
                  what this means. Of course, there is nuance here, but the main
                  point is that we&apos;re able to design online systems that
                  take an unreasonable amount of time/resources for adversaries
                  of arbitrary strength to break, while being easy for the
                  recipient to participate and access the message. And thus, we
                  say these systems are secure (against some adversary we
                  define). Phew...
                </p>
                <p>
                  Now that we have a loose idea of how cryptographers formulate
                  and think about an imaginary adversary, I want to slowly
                  introduce the idea of egalitarian computing. In other words,
                  let&apos;s think deeply about the asymmetry between an
                  attacker and a recipient within a cryptographic scheme. While
                  we want to protect against an arbitrarily strong attacker, we
                  want to make sure the recipient can still efficiently access
                  the message. This is the sort of &apos;trapdoor&apos; of
                  resources that appears frequently within cryptography (easy to
                  compute in one direction, but hard in the other).
                </p>
                <p>
                  Put simply, assumed attackers and recipients have an asymmetry
                  in resources. We assume attackers are all-powerful and assume
                  recipients are weak (both are worst case scenarios). And in
                  the real world, this appears frequently: while your phone
                  doesn&apos;t expand a ton of computational resources to submit
                  your password to a website once, hackers may use hundreds of
                  powerful machines to guess your password.
                </p>
                <p>
                  As you let that marinate, you&apos;re probably asking
                  yourself: well, what does it mean to be <i>cheaper</i> or{' '}
                  <i>easier</i> to compute something? Well, computer scientists
                  usually formulate the how <i>easy</i> or <i>hard</i> a program
                  or computation is with some sort of complexity measure. You
                  may have heard of Big-O, which considers asymptotic runtime of
                  an algorithm. Maybe you&apos;ve even heard of the memory
                  complexity of an algorithm, or how much memory it uses as the
                  input scales. While I won&apos;t go deep into complexity, it
                  suffices to say that computer scientists have a few different
                  ways to formalize the <i>hardness</i> of an algorithm. It
                  allows them to compare programs and decide which are better in
                  an objective manner and tailored to a specific setting.
                </p>
                <p>
                  Stepping away from our attacker/recipient paradigm, I&apos;d
                  like to propose a slightly modified setting. Imagine, ignoring
                  what we discussed thus far, we have a function or algorithm
                  that is easy to compute, but hard (for our purposes near
                  impossible) to invert. In other words, it&apos;s easy to
                  compute an output given an input, but is infeasible to compute
                  an input for a given output. Here, easier and harder can be
                  thought of as some sort of complexity measure.
                </p>
                <p>
                  Such a function, is actually incredibly powerful in many
                  cryptographic settings. Let&apos;s call this proposed function
                  a trapdoor function. Perhaps most commonly use for it is
                  storing passwords. We can store a trapdoor output for a given
                  password input and not have to worry about anyone who steals
                  this value from learning your secret password (it is hard to
                  invert the trapdoor function).
                </p>
                <p>
                  If we weaken this trapdoor so that it&apos;s feasible to
                  break, but takes a lot of resources, we can call this a{' '}
                  <i>moderately hard function</i>. Moderately hard functions are
                  very powerful within many settings where we wish to establish
                  relatively large resource requirements and meter access to a
                  resource. Protecting against spam is one common application.
                  Within the consensus mechanisms of Bitcoin, moderately hard
                  functions are used to make sure a certain amount of work or
                  effort was expanded by a participant. This ensures that only
                  an unreasonably large, expensive, and coordinated attack could
                  ever take down the system.
                </p>
                <p>
                  But with the economic incentives of industries like Bitcoin
                  mining, many have found it profitable to construct specialized
                  computing chips and machines that are able to decrease their
                  costs of computing such moderately hard functions. You may
                  have heard of big crypto-currency mining rigs built in
                  countries like Greenland that expand massive amounts of energy
                  to make money off the Bitcoin network. These rigs use special
                  Application Specific Integrated Circuits (ASICs) to
                  effectively decrease the energy and time cost of computing
                  these moderately hard functions.
                </p>
                <p>
                  Hopefully you can sort of see the issue here: we essentially
                  lose the egalitarian nature of our moderately hard
                  computation. Over time, security of Proof of Work consensus
                  (the specific approach used by Bitcoin) would break as mining
                  power gradually concentrates in the hands of these wealthy
                  miners. Furthermore, protecting and securing data becomes more
                  difficult when ASICs can effectively equalize trapdoor
                  inversion.
                </p>
                <p>
                  While I&apos;ve left out many details and simplified heavily,
                  I hope you&apos;ve got a taste of the interesting questions
                  that lie here. Most notably, how do we even begin to formalize
                  a measure of hardness that is compatible with a truly
                  egalitarian function? It seems one isn&apos;t possible? Yet,
                  borrowing various complexity measures has proven to be
                  fruitful in the past; researchers have looked to the memory
                  costs of integrated circuits, as well as the bandwidth costs
                  involved at the cache level. Perhaps there is something useful
                  lying within the organization of circuits themselves that can
                  unlock a certain hardness measure that we can&apos;t easily
                  optimize for.
                </p>
                <p>
                  Some useful links [
                  <a href="https://eprint.iacr.org/2017/945.pdf">1</a>,
                  <a href="https://eprint.iacr.org/2017/225.pdf">2</a>,
                  <a href="https://eprint.iacr.org/2016/989.pdf">3</a>] if
                  you&apos;d like to read more!
                </p>
              </ProjectItemCollapse>

              <ProjectItemCollapse
                title="*Authenticated Single-Server Private Aggregation"
                links={[]}
              >
                <h3>Authors</h3>
                <p>
                  Sacha Servan-Schreiber, Mayuri Sridhar, <u>Simon Beyzerov</u>
                </p>
                <h3>About</h3>
                <p>
                  <i> (Private repository; code is available upon request)</i>
                </p>
              </ProjectItemCollapse>

              <ProjectItemCollapse
                title="*Seed-Homomorphic Pseudorandom Generators from Learning With Errors"
                links={[]}
              >
                <h3>Authors</h3>
                <h3>About</h3>
                <p>(Still in the works!)</p>
              </ProjectItemCollapse>
            </Collapse.Group>
          </Grid>
          <p style={{ fontSize: '80%' }}>
            <br></br>*
            <u>
              <i>
                Part of private repositories and or larger (unpublished)
                paper(s). Some details may be temporarily omitted; feel free to
                contact me directly for specific inquiries or questions.
              </i>
            </u>{' '}
          </p>
        </Grid.Container>
      </div>
      <div>
        <ColH2>Mathematics</ColH2>
        <Grid.Container css={{ paddingLeft: '0.5rem' }}>
          <Grid>
            <Collapse.Group
              //  splitted
              css={{ padding: 0 }}
            >
              <ProjectItemCollapse
                title="Autoregressive Conditional Heteroskedasticity Models of Volatility in Asset Pricing"
                notes={[]}
                links={[
                  { title: 'Paper', url: '/archpaper.pdf' },
                  { title: 'Slides', url: '/archtalk.pdf' },
                  {
                    title: 'R code',
                    url: 'https://github.com/sim15/arch_model',
                  },
                ]}
              >
                <ProjectTag
                  tags={[
                    'time series analysis',
                    'statistics',
                    'econometrics',
                    'R',
                    <>
                      <Latex>$\LaTeX$</Latex>
                    </>,
                  ]}
                />
                <h3>About</h3>
                <p>
                  Explorative paper on conditional heteroskedasticity in
                  financial market data and other applications. Discuss theory
                  of modeling autocorrelation within these systems through
                  specialized time series models (ARCH) and provide insight into
                  forecasting methodology. (Specifically within risk analysis
                  and volatility forecasting). Short accompanying talk given at
                  Worcester Polytechnic Institute as a part of a smaller
                  project.
                </p>
                <h3>Abstract</h3>
                <p>
                  In this paper, we explore the development, identification, and
                  motivations behind a fundamental class of time series models:
                  autoregressive conditional heteroskedasticity (ARCH) models.
                  First introduced by Robert Engle in his seminal work, ARCH
                  models have given way to a rich class of econometric inquiry.
                  Concerned with conditional-level fluctuations in variance,
                  this unique class of models allows us to analyze dependence in
                  residual series data. Finding particular applications within
                  financial time series, ARCH modeling has shown continued
                  success in risk analysis and volatility forecasting. They have
                  especially seen applications within asset pricing, where risk
                  is a central concern in making optimal financial decisions. We
                  examine these considerations and more while discussing the
                  motivations behind such models. By looking at the historical
                  returns of one asset in particular, we provide a demonstrative
                  analysis of the ARCH modeling process. We identify distinct
                  effects in our data that suggest an ARCH process and go on to
                  introduce a parsimonious model that fits our data well and
                  forecasts future volatility
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="HiMCM 2023"
                notes={[
                  {
                    displayIcon: <Award />,
                    title: '',
                    description: 'Awarded Meritorious',
                  },
                ]}
                links={[{ title: 'Paper', url: '/HiMCM_12855.pdf' }]}
              >
                <ProjectTag
                  tags={[
                    'mathematical modeling',
                    'Python',
                    <>
                      <Latex>$\LaTeX$</Latex>
                    </>,
                  ]}
                />
                <h3>About</h3>
                <p>
                  Mathematical modeling paper written during the 2022-23 High
                  School Mathematical Contest in Modeling (HiMCM). Modeled the
                  causes and impact of colony collapse disorder on honeybee
                  populations.
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="Finite Group Theory and the Classification of Finite Simple Groups"
                notes={[]}
                links={[
                  { title: 'Paper', url: '/finSimpleGroups.pdf' },
                  { title: 'Slides', url: '/finSimpleGroupsSlides.pdf' },
                ]}
              >
                <ProjectTag
                  tags={[
                    'number theory',
                    'finite group theory',
                    'abstract algebra',
                    <>
                      <Latex>$\LaTeX$</Latex>
                    </>,
                  ]}
                />
                <h3>About</h3>
                <p>
                  A short talk (and accompanying write-up) on the{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Classification_of_finite_simple_groups"
                  >
                    classification
                  </a>{' '}
                  of finite{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://en.wikipedia.org/wiki/Simple_group"
                  >
                    simple groups
                  </a>
                  . Part of a smaller, two-week-long group theory project with
                  WPI undergrads.
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="IMMC 2022"
                notes={[
                  {
                    displayIcon: <Award />,
                    title: '',
                    description: 'Awarded US Finalist',
                  },
                ]}
                links={[{ title: 'Paper', url: '/immc_paper.pdf' }]}
              >
                <ProjectTag
                  tags={[
                    'mathematical modeling',
                    'Python',
                    <>
                      <Latex>$\LaTeX$</Latex>
                    </>,
                  ]}
                />
                <h3>About</h3>
                <p>
                  Mathematical modeling paper written during a the 2022
                  International Mathematical Modeling Competition (IMMC).
                  Modeled planar loading and disembarking while optimizing both
                  processes in a diverse set of aircrafts.
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="HiMCM 2021"
                notes={[
                  {
                    displayIcon: <Award />,
                    title: '',
                    description: 'Awarded Meritorious',
                  },
                ]}
                links={[]}
              >
                <ProjectTag
                  tags={[
                    'mathematical modeling',
                    'Python',
                    <>
                      <Latex>$\LaTeX$</Latex>
                    </>,
                  ]}
                />
                <h3>About</h3>
                <p>
                  Mathematical modeling paper written during the 2021-22 High
                  School Mathematical Contest in Modeling (HiMCM). Modeled the
                  causes, future outlook, and potential consequences of rapidly
                  depleting water levels at Lake Mead, Nevada, the nations
                  largest freshwater reservoir.
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="MathWorks 2022"
                notes={[
                  {
                    displayIcon: <Award />,
                    title: '',
                    description:
                      'Advanced to Second Round of Competition (Top ~100 papers)',
                  },
                ]}
                links={[]}
              >
                <ProjectTag
                  tags={[
                    'mathematical modeling',
                    'Python',
                    <>
                      <Latex>$\LaTeX$</Latex>
                    </>,
                  ]}
                />
                <h3>About</h3>
                <p>
                  Mathematical modeling paper written during the 2022 MathWorks
                  Mathematical Modeling Competition. Modeled changes in
                  employment caused by a pandemic-induced virtual workplace.
                  Considered future outlook, causes, and conducted a broader
                  mathematical and social analysis.
                </p>
              </ProjectItemCollapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <ColH2>Other</ColH2>
        <Grid.Container css={{ paddingLeft: '0.5rem' }}>
          <Grid>
            <Collapse.Group
              //  splitted
              css={{ padding: 0 }}
            >
              <ProjectItemCollapse
                title="Event-driven Backtesting Library (C++)"
                links={[
                  {
                    title: 'Github',
                    url: 'https://github.com/sim15/backtester',
                  },
                ]}
              >
                <ProjectTag
                  tags={['C++', 'financial engineering']}
                  links={[
                    {
                      title: 'Github',
                      url: 'https://github.com/sim15/backtester',
                    },
                  ]}
                />
                <h3>About</h3>

                <p>
                  Open-source backtesting suite written from scratch in C++.
                  Heavily inspired by the structure outlined in Michael
                  Halls-Moore&apos;s Successful Algorithmic Trading (modified
                  and optimized in certain areas). Partially under development
                  and open for modification for custom portfolio environments;
                  primarily intended as base for larger backtesting
                  infrastructure projects and quick, performant testing of
                  complex strategies for hobbyists :)
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="SigmaML"
                links={[
                  { title: 'Slides', url: '/sigmaml_slides.pdf' },
                  { title: 'Github', url: 'https://github.com/sim15/sigmaml' },
                ]}
              >
                <ProjectTag
                  tags={['JavaScript', 'Svelte', 'Python', 'machine learning']}
                />
                <h3>About</h3>
                <p>
                  A cross-platform desktop application for building machine
                  learning models with TensorFlow, aggregating all steps of the
                  development process. Built with web-based technology:{' '}
                  <u>JavaScript, Svelte, Electron, Python</u>.
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="Mealgo: Recipe Filtering"
                links={[
                  { title: 'Poster', url: '/a4g_mealgo_poster.pdf' },
                  { title: 'Github', url: 'https://github.com/sim15/Mealgo3' },
                ]}
              >
                <ProjectTag tags={['Java', 'Firebase', 'data science']} />
                <h3>About</h3>
                <p>
                  Android application designed to provide intelligent meal and
                  recipe recommendation that considers both pricing and
                  individual user preferences. Developed with a tailored dataset
                  of over 500,000 recipes and thousands of unique ingredients,
                  all with their respective nutritional information. Developed
                  in <u>Kotlin</u> and database hosted on <u>Firebase</u>.
                </p>
              </ProjectItemCollapse>
              <ProjectItemCollapse
                title="NaVi: Aid for Independent Navigation for the Visually Impaired"
                links={[{ title: 'Poster', url: '/navi_poster.pdf' }]}
              >
                <ProjectTag tags={['engineering', 'C++']} />
                <h3>About</h3>
                <p>
                  Designed a physical aid for the independent navigation of
                  public spaces for those with visual impairments. Designed
                  software for automated guidance and designed a haptic device
                  to aid those attempting to navigate through unadapted
                  environments. Allows for independent parties to deploy
                  schematics that aid individuals in the respective space.
                </p>
              </ProjectItemCollapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </div>

      {/* <div>
        <h2>Mass Academy Coursework</h2>
        <p className={stylesProject.projectSectionCaption}>
          For prospective Mass Academy students, alumni, or for anyone
          interested: past assignments and projects completed during the 2021-22
          school year are available upon request. Certain assignments will be
          available in the future.
        </p>
      </div> */}
    </>
  );
}
