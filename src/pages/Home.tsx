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

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.7;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

interface SectionProps {
  $bgColor?: string;
}

const Section = styled.section<SectionProps>`
  padding: 6rem 0;
  background-color: ${(props) => props.$bgColor || "transparent"};
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

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentBlock = styled.div`
  h3 {
    font-size: 1.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);

    &::before {
      content: "✓";
      background: var(--accent-color);
      color: white;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`;

const ImagePlaceholder = styled.div`
  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

const StepsContainer = styled.div`
  position: relative;
  margin-top: 3rem;
`;

const StepItem = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  background: var(--primary-color);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <Container>
          <HeroContent>
            <Title>Bind</Title>
            <Subtitle>
              Revolutionizing Book Publishing with collective memory, emotional
              storytelling, and AI-assisted narrative curation
            </Subtitle>
            <CTAButton to="#intro">
              Discover How It Works
              <span>→</span>
            </CTAButton>
          </HeroContent>
        </Container>
        <ScrollIndicator>
          <span>↓</span>
        </ScrollIndicator>
      </Hero>

      <Section id="intro">
        <Container>
          <SectionHeader>
            <SectionTitle>What is Bind?</SectionTitle>
            <SectionSubtitle>
              Bind transforms the traditional publishing process by shifting
              focus from single-author narratives to shared memory storytelling.
            </SectionSubtitle>
          </SectionHeader>

          <TwoColumn>
            <ContentBlock>
              <h3>Remembering Together</h3>
              <p>
                Through conversational data, photos, and emotional fragments,
                Bind helps groups reflect on a year of their collaborative
                memories.
              </p>
              <FeatureList>
                <li>
                  Shared memories become the foundation, not a single author’s voice
                </li>
                <li>
                  Each book is a one-year time capsule, co-written by those who lived through it
                </li>
                <li>
                  AI helps structure stories, but the tone stays deeply personal
                </li>
                <li>
                  You receive a beautifully composed, emotionally rich book that feels truly yours
                </li>
              </FeatureList>
            </ContentBlock>
            <ImagePlaceholder>Platform Interface Preview</ImagePlaceholder>
          </TwoColumn>

          <CardGrid>
            <Card>
              <CardIcon>📚</CardIcon>
              <CardTitle>Multi-perspective Collection</CardTitle>
              <CardText>
                Bind supports guided memory collection from multiple
                participants through structured interviews designed by the
                binder.
              </CardText>
            </Card>
            <Card>
              <CardIcon>🤖</CardIcon>
              <CardTitle>Organizing Narrative with AI</CardTitle>
              <CardText>
                An AI system helps organize, group, and structure raw memory
                fragments with a consistent tone.
              </CardText>
            </Card>
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Design Tailored for Memory</CardTitle>
              <CardText>
                Through design choices in tone and visuals, each book is
                tailored to the emotional truth of its contributors.
              </CardText>
            </Card>
          </CardGrid>
        </Container>
      </Section>

      <Section $bgColor="var(--bg-secondary)">
        <Container>
          <SectionHeader>
            <SectionTitle>Who Can Use Bind?</SectionTitle>
            <SectionSubtitle>
              Bind is for those who want to reflect, remember, and reimagine their experiences together.
            </SectionSubtitle>
          </SectionHeader>

          <CardGrid>
            <Card>
              <CardIcon>👨‍👩‍👧‍👦</CardIcon>
              <CardTitle>Families</CardTitle>
              <CardText>Parents, siblings, and children recalling a year of everyday life</CardText>
            </Card>
            <Card>
              <CardIcon>🎉</CardIcon>
              <CardTitle>Friend Groups</CardTitle>
              <CardText>Turning everyday photos and jokes into a meaningful record</CardText>
            </Card>
            <Card>
              <CardIcon>🎓</CardIcon>
              <CardTitle>School Colleagues</CardTitle>
              <CardText>Commemorating a shared journey of school life or graduation</CardText>
            </Card>
            <Card>
              <CardIcon>🎸</CardIcon>
              <CardTitle>Student Clubs</CardTitle>
              <CardText>Bandmates or project teams preserving behind-the-scenes emotions</CardText>
            </Card>
          </CardGrid>

          <TwoColumn style={{ marginTop: "4rem" }}>
            <ImagePlaceholder>Diagram</ImagePlaceholder>
            <ContentBlock>
              <h3>What is a Binder?</h3>
              <p>
                explanation explanation explanation explanation explanation
                explanation explanation
              </p>
              <FeatureList>
                <li>explanation explanation explanation</li>
                <li>explanation explanation explanation</li>
                <li>explanation explanation explanation</li>
                <li>explanation explanation explanation</li>
                <li>explanation explanation explanation</li>
              </FeatureList>
            </ContentBlock>
          </TwoColumn>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>How Bind Works</SectionTitle>
            <SectionSubtitle>
              explanation explanation explanation
            </SectionSubtitle>
          </SectionHeader>

          <StepsContainer>
            <StepItem>
              <StepNumber>1</StepNumber>
              <StepContent>
                <h4>Choose Your Binder</h4>
                <p>
                  explanation explanation explanation explanation explanation
                  explanation explanation
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>2</StepNumber>
              <StepContent>
                <h4>1st Interaction</h4>
                <p>
                  explanation explanation explanation explanation explanation
                  explanation explanation
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>3</StepNumber>
              <StepContent>
                <h4>2nd Interaction</h4>
                <p>
                  explanation explanation explanation explanation explanation
                  explanation explanation
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>4</StepNumber>
              <StepContent>
                <h4>3rd Interaction</h4>
                <p>
                  explanation explanation explanation explanation explanation
                  explanation explanation
                </p>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>5</StepNumber>
              <StepContent>
                <h4>Receive Your Book</h4>
                <p>
                  explanation explanation explanation explanation explanation
                  explanation explanation
                </p>
              </StepContent>
            </StepItem>
          </StepsContainer>

          <TwoColumn style={{ marginTop: "4rem" }}>
            <ContentBlock>
              <h3>System Workflow</h3>
              <p>explanation explanation explanation</p>
              <FeatureList>
                <li>explanation explanation explanation</li>
                <li>explanation explanation explanation</li>
                <li>explanation explanation explanation</li>
                <li>explanation explanation explanation</li>
              </FeatureList>
            </ContentBlock>
            <ImagePlaceholder>System Flow Diagram</ImagePlaceholder>
          </TwoColumn>
        </Container>
      </Section>
    </>
  );
};

export default Home;
