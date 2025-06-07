import React from "react";
import styled from "styled-components";

const PageHeader = styled.div`
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BackgroundSection = styled(Section)`
  background: var(--bg-secondary);
`;

const BackgroundContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BackgroundText = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const BackgroundImage = styled.div`
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--primary-color) 100%
  );
  border-radius: 1rem;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
`;

const MissionVision = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
  }
`;

const CardIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: var(--accent-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 2rem;
`;

const About = () => {
  return (
    <>
      <PageHeader>
        <PageTitle>About Bind</PageTitle>
        <PageSubtitle>
          We're revolutionizing the publishing industry with AI-powered
          solutions
        </PageSubtitle>
      </PageHeader>

      <BackgroundSection>
        <Container>
          <BackgroundContent>
            <BackgroundText>
              <h3>Our Story</h3>
              <p>
                Bind was founded with a simple mission: to make publishing
                accessible to everyone. We believe that great stories deserve to
                be told, and we're using cutting-edge AI technology to help
                authors bring their visions to life.
              </p>
              <p>
                Our team combines expertise in artificial intelligence,
                publishing, and technology to create a platform that empowers
                writers and publishers alike.
              </p>
            </BackgroundText>
            <BackgroundImage>📚</BackgroundImage>
          </BackgroundContent>
        </Container>
      </BackgroundSection>

      <Section>
        <Container>
          <MissionVision>
            <MissionCard>
              <CardIcon>🎯</CardIcon>
              <h3>Our Mission</h3>
              <p>
                To democratize publishing by making it easier, faster, and more
                accessible for authors to share their stories with the world.
              </p>
            </MissionCard>
            <MissionCard>
              <CardIcon>👁️</CardIcon>
              <h3>Our Vision</h3>
              <p>
                A world where every writer has the tools and support they need
                to create and publish their work, regardless of their background
                or resources.
              </p>
            </MissionCard>
          </MissionVision>
        </Container>
      </Section>
    </>
  );
};

export default About;
