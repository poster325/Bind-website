import React from "react";
import styled from "styled-components";

const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
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

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  text-align: center;
  margin: 0 auto 4rem;
`;

const FeaturedSection = styled.div`
  background: var(--bg-secondary);
  padding: 4rem 0;
`;

const FeaturedItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  &:nth-child(even) {
    direction: rtl;
  }

  &:nth-child(even) > * {
    direction: ltr;
  }
`;

const FeaturedContent = styled.div`
  h3 {
    font-size: 1.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const FeaturedImage = styled.div`
  height: 300px;
  background: var(--bg-accent);
  border: 2px dashed var(--border-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PortfolioItem = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const PortfolioImage = styled.div`
  height: 250px;
  background: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 1.125rem;
  font-weight: 500;
  border-bottom: 1px solid var(--border-color);
`;

const PortfolioContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: var(--bg-accent);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Link = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--bg-primary);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-weight: 500;
`;

const Portfolio: React.FC = () => {
  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Portfolio</PageTitle>
          <PageSubtitle>
            explanation explanation explanation explanation explanation explanation
          </PageSubtitle>
        </Container>
      </PageHeader>

      <FeaturedSection>
        <Container>
          <SectionTitle>Featured Publications</SectionTitle>
          <SectionSubtitle>
            explanation explanation explanation explanation explanation explanation
          </SectionSubtitle>

          {[1, 2].map((_, i) => (
            <FeaturedItem key={i}>
              <FeaturedContent>
                <h3>"Content"</h3>
                <p>
                  explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation
                </p>
                <Tags>
                  <Tag>Tag</Tag>
                  <Tag>Tag</Tag>
                  <Tag>Tag</Tag>
                </Tags>
                <Link href="#">View Case Study →</Link>
              </FeaturedContent>
              <FeaturedImage>Book Cover Mockup</FeaturedImage>
            </FeaturedItem>
          ))}
        </Container>
      </FeaturedSection>

      <Section>
        <Container>
          <SectionTitle>Published Books</SectionTitle>
          <SectionSubtitle>
            A collection of professionally designed books created through our platform
          </SectionSubtitle>

          <PortfolioGrid>
            {Array.from({ length: 4 }).map((_, i) => (
              <PortfolioItem key={i}>
                <PortfolioImage>Book Cover</PortfolioImage>
                <PortfolioContent>
                  <h3>Title</h3>
                  <p>
                    explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation
                  </p>
                  <Tags>
                    <Tag>Tag</Tag>
                    <Tag>Tag</Tag>
                  </Tags>
                  <Link href="#">View Details →</Link>
                </PortfolioContent>
              </PortfolioItem>
            ))}
          </PortfolioGrid>

          <StatsGrid>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Books Published</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>95%</StatNumber>
              <StatLabel>User Satisfaction</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatLabel>Awards Won</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>300+</StatNumber>
              <StatLabel>Binders</StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
