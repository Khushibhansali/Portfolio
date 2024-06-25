import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  return (
    <Container>
      <Header>
        <NavIcon>
          <FaBars />
        </NavIcon>
        <Title>Makerspace</Title>
      </Header>
      <Main>
        <Section>
          <h1>About Our Makerspace</h1>
          <AboutSection>
            <h2>Importance on a Graduate Campus</h2>
            <p>
              In a graduate campus like Cornell Tech, our makerspace plays a crucial role in bridging the gap between theoretical knowledge and practical application. It provides a platform for students to experiment, prototype, and turn their ideas into reality, which is essential for their academic and professional growth.
            </p>
          </AboutSection>

          <AboutSection>
            <h2>Mission</h2>
            <p>
              Our mission is to empower students to innovate and create by providing them with the resources, support, and community they need to succeed. We aim to foster a culture of collaboration, learning, and creativity that extends beyond the classroom.
            </p>
          </AboutSection>

          <AboutSection>
            <h2>Vision</h2>
            <p>
              We envision a vibrant makerspace where students from diverse disciplines collaborate to solve real-world problems, driving technological advancements and fostering entrepreneurial spirit.
            </p>
          </AboutSection>

          <AboutSection>
            <h2>What We Offer</h2>
            <ul>
              <li>State-of-the-art equipment and tools for various projects.</li>
              <li>Workshops and coursework to enhance skills.</li>
              <li>Collaborative projects and networking opportunities with Weill Cornell, NYC Makerspaces, Roosevelt island local resident support, and outreach.</li>
              <li>Support from experienced mentors and industry experts.</li>
            </ul>
          </AboutSection>

          <AboutSection>
            <h2>Our Team</h2>
            <TeamMember>
              <img src="path_to_niti_parikh_photo.jpg" alt="Professor Niti Parikh" />
              <div>
                <h3>Professor Niti Parikh</h3>
                <p>
                  Professor Niti Parikh has built everything from scratch, creating the makerspace and designing the new makerspace lab set to open in 2025. She is super passionate about creating things and has been the driving force behind our makerspace’s success.
                </p>
                <a href="https://personalwebsite.com" target="_blank" rel="noopener noreferrer">Personal Website</a>
              </div>
            </TeamMember>
            <TeamMember>
              <img src="path_to_sebastian_photo.jpg" alt="Sebastian" />
              <div>
                <h3>Sebastian</h3>
                <p>
                  Sebastian is an in house artist who is actively involved in making things in the makerspace. His enthusiasm and creativity inspire other students to explore their potential and bring their ideas to life.
                </p>
                <a href="https://instagram.com/sebastian" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </TeamMember>
          </AboutSection>
        </Section>
        <SplineContainer>
        <Spline scene="https://prod.spline.design/xg4VIPfKWlfROozT/scene.splinecode" />
        </SplineContainer>
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #000;
  color: #000;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #003049;
`;

const NavIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
`;

const Title = styled.h1`
  color: #000000;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Section = styled.section`
  width: 80%;
  margin-bottom: 2rem;
`;

const AboutSection = styled.div`
  margin-bottom: 2rem;
  h2 {
    color: #003049;
  }
  p, ul {
    color: #000;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const TeamMember = styled.div`
  display: flex;
  margin-bottom: 2rem;
  img {
    margin-right: 1rem;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  h3 {
    color: #003049;
  }
  p {
    color: #000000;
  }
  a {
    color: #000000;
    text-decoration: underline;
  }
`;

const SplineContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 2rem;
`;
