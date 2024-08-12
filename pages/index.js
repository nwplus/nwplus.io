import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
// Components
import { Background } from '../components/Background';
import { ContentContainer } from '../components/ContentContainer';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Hackathons from '../components/Hackathons';
import Hero from '../components/Hero';
import ResourceContainer from '../components/ResourceContainer';
import Stats from '../components/Stats';
// import Banner from '../components/Banner'
// Typography
import { Title1, Title2, Body } from '../components/Typography';
// Utility
import fireDb from '../utilities/firebase';
import ImageTileContainer from '../components/ImageTileContainer';

const SECTION_MARGIN = '8em auto';

const AboutHeaderContainer = styled.div`
  position: relative;
  overflow-x: clip; /* so we can offset the planet graphic without scrollbar */
  z-index: 1;

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -150px;
    right: 0;
    background: url('assets/about-us-planet.svg');
    background-position: top right;
    background-repeat: no-repeat;
    width: 687px;
    height: 606px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    &:before {
      display: none;
    }
  }
`;

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 52px;
  margin-bottom: 64px;
  width: 60%;

  ${(p) => p.theme.mediaQueries.mobile} {
    justify-items: center;
    gap: 40px;
    margin-bottom: 44px;
    width: 100%;
  }
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;
  gap: 16px;

  & > * {
    flex-basis: 50%;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    height: auto;

    & > * {
      flex-basis: auto;
    }
  }
`;

const GalleryVideo = styled.iframe`
  height: 400px;
  border: none;
  border-radius: 6px;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 225px;
  }
`;

// Added min-height so that planet peeks out
// When actual FAQs are populated I'm guessing it'll be taller anyways
const FaqSection = styled.div`
  background: url('assets/faq-stars.svg'), url('assets/faq-planet.svg');
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  min-height: 600px;
`;

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const [faqs, setFaqs] = useState(null);
  const metaDescription =
    'nwPlus is a student-led club supporting aspiring programmers and designers, based out of University of British Columbia.';

  const getFaq = async () => {
    const faqs = await fireDb.getCollection('www', 'FAQ');
    setFaqs(faqs);
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <>
      <Head>
        <title>nwPlus</title>
        <meta name='description' content={metaDescription} />

        <meta itemProp='name' content='nwPlus' />
        <meta itemProp='description' content={metaDescription} />
        <meta itemProp='image' content='/assets/meta-image.png' />

        <meta property='og:url' content='https://nwplus.io' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='nwPlus' />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content='/assets/meta-image.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='nwPlus' />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content='/assets/meta-image.png' />
      </Head>
      <Background>
        <NavBar />
        {/* <Banner /> */}
        <Hero />
        <ContentContainer id='about' margin={SECTION_MARGIN}>
          <AboutHeaderContainer>
            <AboutHeader>
              <Title1 color={themeContext.colors.primary}>Who We Are</Title1>
              <div>
                <Title2 withGradient>
                  nwPlus is a student-led club supporting aspiring programmers
                  and designers, based out of University of British Columbia.
                </Title2>
                <Body>
                  Our mission: foster innovation and creativity in tech for
                  students to connect with passionate peers and mentors, through
                  events such as our annual hackathons. By providing the right
                  tools, resources, and support, the team at nwPlus aims to
                  encourage students to gain hands-on experience with
                  cutting-edge technology outside of classroom settings.
                </Body>
              </div>
            </AboutHeader>
          </AboutHeaderContainer>
          <AboutSection>
            <GalleryContainer>
              <GalleryVideo
                src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerpolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></GalleryVideo>
              <ImageTileContainer
                rows={[
                  {
                    leftImg: '/assets/images/team_social_1.jpg',
                    rightImg: '/assets/images/team_hackcamp.jpg',
                  },
                  {
                    leftImg: '/assets/images/team_dev.jpg',
                    rightImg: '/assets/images/team_social_2.jpg',
                  },
                ]}
              />
            </GalleryContainer>
          </AboutSection>
          <Stats />
        </ContentContainer>
        <ContentContainer
          id="hackathons"
          margin={SECTION_MARGIN}
        >
          <Title1 withGradient align="center">
            Our hackathons
          </Title1>
          <Hackathons />
        </ContentContainer>
        <ContentContainer id='resources' margin={SECTION_MARGIN}>
          <ResourceContainer />
        </ContentContainer>
        {faqs && (
          <ContentContainer id='faq' margin={SECTION_MARGIN}>
            <FaqSection>
              <Title1 withGradient align='center'>
                Frequently Asked Questions
              </Title1>
              <Faq faqs={faqs} />
            </FaqSection>
          </ContentContainer>
        )}
        <Footer />
      </Background>
    </>
  );
}
