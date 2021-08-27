import Head from 'next/head';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import JoinUs from '../components/JoinUs';
import Hero from '../components/Hero';
import HackathonCard from '../components/HackathonCard';
import Button from '../components/Button';
import ResourceCard from '../components/ResourceCard';
import FaqBox from '../components/FaqBox';
import { ContentContainer } from '../components/ContentContainer';
import { Background } from '../components/Background';
import { LargeTitle, Title2, Body } from '../components/Typography';
import ResourcePage from '../components/ResourcePage';

const BADGE_ICON = 'assets/logos/our-pick-badge.svg';
const VIDEO_ICON = 'assets/logos/video-icon.svg';
const GITHUB_ICON = 'assets/logos/github-icon.svg';
const MEDIUM_ICON = 'assets/logos/medium-icon.svg';

export default function Charcuterie() {
  const resourcesMockData = [
    {
      name: 'Ligma',
      event: 'Coachella',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: GITHUB_ICON,
      badge: BADGE_ICON,
    },
    {
      name: 'Ligma',
      event: 'Coachella',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: MEDIUM_ICON,
      badge: BADGE_ICON,
    },
    {
      name: 'Ligma2',
      event: 'Not Coachella',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: VIDEO_ICON,
      badge: BADGE_ICON,
    },
    {
      name: 'Lig3ma',
      year: '2222',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: GITHUB_ICON,
    },
    {
      name: 'Hi Vincent',
      year: '2023',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: VIDEO_ICON,
      badge: BADGE_ICON,
    },
    {
      name: 'Lig2ma',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: VIDEO_ICON,
    },
    {
      name: 'L1igma',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: MEDIUM_ICON,
      badge: BADGE_ICON,
    },
    {
      name: 'Ligma',
      event: 'Coachella',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: VIDEO_ICON,
    },
    {
      name: 'not Ligma2',
      event: 'Not Coachella',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: MEDIUM_ICON,
      badge: BADGE_ICON,
    },
    {
      name: 'Lig3ma',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: GITHUB_ICON,
    },
    {
      name: 'its jenny',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: MEDIUM_ICON,
      badge: BADGE_ICON,
    },
    {
      name: 'Ligma',
      year: '2022',
      image:
        'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
      icon: VIDEO_ICON,
    },
  ];

  return (
    <>
      <Head>
        <title>Charcuterie | nwPlus</title>
      </Head>
      <Background>
        <NavBar hiring={false}/>
        <Hero />
        <ContentContainer>
          <LargeTitle>charcuterie 😋</LargeTitle>
          <Body>Just a place where we put things</Body>
          <Title2>ContentContainer</Title2>
          <Body>
            Each block of content is wrapped by a ContentContainer. This
            component uniformly applies the same spacing stylings for each
            section of the page.
          </Body>
          <Body>
            <strong>Usage note: </strong>This container would be used in the
            internals of each page/section - i.e. we would use this in the
            internals of FAQ, Resources, and all other sections.
          </Body>
        </ContentContainer>
        <ContentContainer>
          <FaqBox question='Test?' answer='Test'/>
          <FaqBox question='Test?' answer='<h1>H1 test</h1>' isHardcoded={true}/>
          <FaqBox question='Test?' answer='<h1>H1 test</h1>' isHardcoded={false}/>
        </ContentContainer>
        <ContentContainer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px',
            }}
          >
            <ResourceCard
              name='Ligma'
              event='Coachella'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              icon={VIDEO_ICON}
              badge={BADGE_ICON}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              icon={GITHUB_ICON}
              badge={BADGE_ICON}
            />
            <ResourceCard
              name='Ligma'
              year='2022'
              image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
              icon={MEDIUM_ICON}
            />
          </div>
        </ContentContainer>
        <ContentContainer>
          <Carousel
            images={[
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
              'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
              'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg',
            ]}
            height={180}
            width={260}
          />
          <Title2>Paginated Resources</Title2>
          <ResourcePage
            resources={resourcesMockData}
          />
          <Title2>Footer</Title2>
        </ContentContainer>
        <Footer />

        <ContentContainer>
          <h3>Hackathon cards</h3>
          <div style={{ display: 'flex' }}>
            <HackathonCard
              registrationOpen
              link='https://www.google.com/'
              dateString='Dec 5 - 6'
              imageLink='https://i.pinimg.com/474x/00/5e/95/005e953027d76c35ee6ec1446d43a739.jpg'
            />
            <HackathonCard
              link='https://www.google.com/'
              dateString='Dec 5 - 6'
              imageLink='https://i.pinimg.com/474x/00/5e/95/005e953027d76c35ee6ec1446d43a739.jpg'
            />
          </div>
        </ContentContainer>

        <h2>Footer</h2>
        <Footer />
      <Carousel images={['https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg', 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-588935825.jpg']}
                height={180}
                width={260} />
      <h2>Join Us Page</h2>
      <div style={{ background: '#000', padding: '81px' }}>
        <JoinUs hiring={true} deadlineDay={30} deadlineMonth="September"/>
      </div>
        <ContentContainer>
          <h3>Buttons</h3>
          <div style={{ display: 'flex' }}>
            <Button link='https://www.google.com/' width='200px' height='70px'>
              Visit Google
            </Button>
            <Button
              link='https://www.yahoo.com/'
              width='400px'
              height='50px'
              backgroundColor='red'
              borderRadius='12px'
            >
              Visit Yahoo
            </Button>
            <Button
              link='https://www.yahoo.com/'
              hollow
              width='200px'
              height='50px'
              borderRadius='12px'
            >
              Visit Yahoo
            </Button>
          </div>
        </ContentContainer>
      </Background>
    </>
  );
}
