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

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PortfolioCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const PortfolioImage = styled.div`
  height: 200px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--primary-color) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const PortfolioContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Novel",
      description: "A best-selling novel created with our AI writing assistant",
      icon: "📖",
    },
    {
      title: "Children's Book Series",
      description:
        "A collection of illustrated children's books generated with AI",
      icon: "👶",
    },
    {
      title: "Business Guide",
      description: "A comprehensive business guide written with AI assistance",
      icon: "💼",
    },
    {
      title: "Poetry Collection",
      description:
        "An award-winning poetry collection created using our platform",
      icon: "✒️",
    },
    {
      title: "Cookbook",
      description: "A popular cookbook with AI-generated recipes and content",
      icon: "🍳",
    },
    {
      title: "Self-Help Book",
      description: "A transformative self-help book written with AI support",
      icon: "🧠",
    },
  ];

  return (
    <>
      <PageHeader>
        <PageTitle>Our Portfolio</PageTitle>
        <PageSubtitle>
          Discover the amazing books and content created with Bind's AI
          technology
        </PageSubtitle>
      </PageHeader>

      <Section>
        <Container>
          <PortfolioGrid>
            {projects.map((project, index) => (
              <PortfolioCard key={index}>
                <PortfolioImage>{project.icon}</PortfolioImage>
                <PortfolioContent>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </PortfolioContent>
              </PortfolioCard>
            ))}
          </PortfolioGrid>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
