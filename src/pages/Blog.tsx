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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BlogCard = styled.article`
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

const BlogImage = styled.div`
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

const BlogContent = styled.div`
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
    margin-bottom: 1rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-light);
  font-size: 0.875rem;
`;

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The Future of AI in Publishing",
      excerpt:
        "Exploring how artificial intelligence is transforming the publishing industry",
      date: "March 15, 2024",
      author: "Jane Smith",
      icon: "🤖",
    },
    {
      title: "Writing with AI: A Guide",
      excerpt: "Learn how to effectively use AI tools in your writing process",
      date: "March 10, 2024",
      author: "John Doe",
      icon: "✍️",
    },
    {
      title: "AI-Generated Content Ethics",
      excerpt:
        "Understanding the ethical considerations of AI-generated content",
      date: "March 5, 2024",
      author: "Sarah Johnson",
      icon: "⚖️",
    },
    {
      title: "The Rise of AI Authors",
      excerpt: "How AI is changing the landscape of authorship and creativity",
      date: "February 28, 2024",
      author: "Mike Wilson",
      icon: "📚",
    },
    {
      title: "AI in Children's Books",
      excerpt: "The impact of AI on children's literature and education",
      date: "February 20, 2024",
      author: "Emily Brown",
      icon: "👶",
    },
    {
      title: "Publishing in the AI Era",
      excerpt: "Adapting traditional publishing practices for the AI age",
      date: "February 15, 2024",
      author: "David Lee",
      icon: "📖",
    },
  ];

  return (
    <>
      <PageHeader>
        <PageTitle>Blog</PageTitle>
        <PageSubtitle>
          Insights, updates, and stories from the world of AI-powered publishing
        </PageSubtitle>
      </PageHeader>

      <Section>
        <Container>
          <BlogGrid>
            {posts.map((post, index) => (
              <BlogCard key={index}>
                <BlogImage>{post.icon}</BlogImage>
                <BlogContent>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <BlogMeta>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </BlogMeta>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </Container>
      </Section>
    </>
  );
};

export default Blog;
