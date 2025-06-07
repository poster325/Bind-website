import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.section`
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--accent-color);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const CardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <Title>Revolutionizing Book Publishing with AI</Title>
          <Subtitle>
            Transform your writing process with our cutting-edge AI technology.
            Create, edit, and publish your books faster than ever before.
          </Subtitle>
          <CTAButton to="/about">Get Started</CTAButton>
        </HeroContent>
      </Hero>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Why Choose Bind?</SectionTitle>
            <SectionSubtitle>
              Our platform combines the power of AI with human creativity to
              revolutionize the publishing industry.
            </SectionSubtitle>
          </SectionHeader>

          <CardGrid>
            <Card>
              <CardIcon>🚀</CardIcon>
              <CardTitle>AI-Powered Writing</CardTitle>
              <CardText>
                Leverage advanced AI to enhance your writing process and
                generate creative content.
              </CardText>
            </Card>

            <Card>
              <CardIcon>📚</CardIcon>
              <CardTitle>Smart Publishing</CardTitle>
              <CardText>
                Streamline your publishing workflow with our intelligent tools
                and automation.
              </CardText>
            </Card>

            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Market Insights</CardTitle>
              <CardText>
                Get valuable insights into market trends and reader preferences.
              </CardText>
            </Card>
          </CardGrid>
        </Container>
      </Section>
    </>
  );
};

export default Home;
