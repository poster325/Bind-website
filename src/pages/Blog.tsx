import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import matter from "gray-matter";

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

const BlogCard = styled(Link)`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;

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
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  background: ${(props) =>
    props.$active ? "var(--primary-color)" : "var(--bg-primary)"};
  color: ${(props) => (props.$active ? "white" : "var(--text-primary)")};
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? "var(--secondary-color)" : "var(--bg-accent)"};
  }
`;

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image?: string;
  category: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [categories, setCategories] = useState<string[]>(["All Stories"]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch the manifest file
        const response = await fetch("/blog/articles/manifest.json");
        if (!response.ok) {
          throw new Error("Failed to load blog posts");
        }

        const manifest = await response.json();
        const postFiles = manifest.files || [];

        // Load and parse each post
        const loadedPosts = await Promise.all(
          postFiles.map(async (filename: string) => {
            const postResponse = await fetch(`/blog/articles/${filename}`);
            const markdown = await postResponse.text();
            const { data } = matter(markdown);

            return {
              id: filename.replace(".md", ""),
              title: data.title || "Untitled Post",
              excerpt: data.excerpt || markdown.slice(0, 200) + "...",
              date: data.date || new Date().toISOString().split("T")[0],
              author: data.author || {
                name: "Anonymous",
                role: "Writer",
                avatar: "A",
              },
              image: data.image,
              category: data.category || "Uncategorized",
            };
          })
        );

        // Sort posts by date (newest first)
        loadedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Extract unique categories
        const uniqueCategories = new Set(["All Stories"]);
        loadedPosts.forEach((post) => uniqueCategories.add(post.category));
        setCategories(Array.from(uniqueCategories));

        setPosts(loadedPosts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load blog posts"
        );
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts =
    selectedCategory === "All Stories"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  if (loading) {
    return (
      <PageHeader>
        <PageTitle>Loading...</PageTitle>
      </PageHeader>
    );
  }

  if (error) {
    return (
      <PageHeader>
        <PageTitle>Error</PageTitle>
        <PageSubtitle>{error}</PageSubtitle>
      </PageHeader>
    );
  }

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
          <CategoryFilter>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                $active={category === selectedCategory}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryFilter>

          <BlogGrid>
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} to={`/blog/${post.id}`}>
                <BlogImage>
                  {post.image ? (
                    <img src={post.image} alt={post.title} />
                  ) : (
                    post.author.avatar
                  )}
                </BlogImage>
                <BlogContent>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <BlogMeta>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.author.name}</span>
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
