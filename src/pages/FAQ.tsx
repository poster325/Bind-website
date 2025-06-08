import React, { useState } from "react";
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

const TagFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const TagButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 2rem;
  background: ${(props) =>
    props.$active ? "var(--primary-color)" : "var(--bg-primary)"};
  color: ${(props) => (props.$active ? "white" : "var(--text-primary)")};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;

  &:hover {
    background: ${(props) =>
      props.$active ? "var(--primary-color)" : "var(--bg-accent)"};
  }
`;

const FAQGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1.5rem;
  background: var(--bg-primary);
  border: none;
  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-accent);
  }

  &::after {
    content: "${(props) => (props.$isOpen ? "−" : "+")}";
    font-size: 1.5rem;
    color: var(--primary-color);
  }
`;

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  padding: ${(props) => (props.$isOpen ? "1.5rem" : "0 1.5rem")};
  max-height: ${(props) => (props.$isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  background: var(--bg-primary);
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid var(--border-color);
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ContactSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  text-align: left;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-color);
  }
`;

const ContactCardIcon = styled.div`
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

const ContactCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
`;

const ContactCardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactCardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    color: var(--secondary-color);
  }
`;

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const faqs = [
    {
      question: "What is Bind?",
      answer:
        "Bind is an AI-powered publishing platform that helps authors create, edit, and publish their books. We combine cutting-edge artificial intelligence with human creativity to revolutionize the publishing process.",
      tags: ["general", "platform"],
    },
    {
      question: "How does the AI writing assistant work?",
      answer:
        "Our AI writing assistant uses advanced natural language processing to help you generate content, suggest improvements, and enhance your writing. It can help with everything from brainstorming ideas to polishing your final draft.",
      tags: ["ai", "features"],
    },
    {
      question: "Is the content generated by AI?",
      answer:
        "While our AI can help generate content, the final work is always a collaboration between the AI and the human author. You maintain full creative control and can edit, modify, or reject any AI suggestions.",
      tags: ["ai", "content"],
    },
    {
      question: "What types of books can I create with Bind?",
      answer:
        "You can create virtually any type of book with Bind, including novels, non-fiction, children's books, poetry, and more. Our platform is designed to be flexible and adapt to your specific needs.",
      tags: ["features", "content"],
    },
    {
      question: "How much does it cost to use Bind?",
      answer:
        "We offer various pricing plans to suit different needs. Our basic plan is free, while premium features are available through our subscription plans. Contact us for detailed pricing information.",
      tags: ["pricing", "general"],
    },
    {
      question: "Can I publish my book traditionally after using Bind?",
      answer:
        "Yes! Books created with Bind can be published through traditional publishing houses or self-published. We provide all the necessary tools and formats for both publishing paths.",
      tags: ["publishing", "features"],
    },
    {
      question: "Is my work protected when using Bind?",
      answer:
        "Absolutely. We take intellectual property rights very seriously. You retain all rights to your work, and our platform includes robust security measures to protect your content.",
      tags: ["security", "general"],
    },
    {
      question: "Do I need technical skills to use Bind?",
      answer:
        "No technical skills are required. Our platform is designed to be user-friendly and intuitive. If you can use a word processor, you can use Bind.",
      tags: ["features", "general"],
    },
  ];

  const tags = Array.from(new Set(faqs.flatMap((faq) => faq.tags)));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = activeTag
    ? faqs.filter((faq) => faq.tags.includes(activeTag))
    : faqs;

  return (
    <>
      <PageHeader>
        <PageTitle>Frequently Asked Questions</PageTitle>
        <PageSubtitle>
          Find answers to common questions about Bind and AI-powered publishing
        </PageSubtitle>
      </PageHeader>

      <Section>
        <Container>
          <TagFilter>
            <TagButton
              $active={activeTag === null}
              onClick={() => setActiveTag(null)}
            >
              All
            </TagButton>
            {tags.map((tag) => (
              <TagButton
                key={tag}
                $active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </TagButton>
            ))}
          </TagFilter>

          <FAQGrid>
            {filteredFaqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion
                  $isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </FAQQuestion>
                <FAQAnswer $isOpen={openIndex === index}>
                  {faq.answer}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQGrid>

          <ContactSection>
            <ContactTitle>Still Have Questions?</ContactTitle>
            <ContactSubtitle>
              Our support team is here to help you get started with your
              publishing journey.
            </ContactSubtitle>
            <ContactCardGrid>
              <ContactCard>
                <ContactCardIcon>💬</ContactCardIcon>
                <ContactCardTitle>Live Chat Support</ContactCardTitle>
                <ContactCardText>
                  Get instant answers to your questions with our live chat
                  support team.
                </ContactCardText>
                <ContactCardLink href="#">Start Chat →</ContactCardLink>
              </ContactCard>
              <ContactCard>
                <ContactCardIcon>📧</ContactCardIcon>
                <ContactCardTitle>Email Support</ContactCardTitle>
                <ContactCardText>
                  Send us detailed questions and we'll respond within 24 hours
                  with comprehensive answers.
                </ContactCardText>
                <ContactCardLink href="mailto:bindstd2025@gmail.com">
                  bindstd2025@gmail.com
                </ContactCardLink>
              </ContactCard>
              <ContactCard>
                <ContactCardIcon>📞</ContactCardIcon>
                <ContactCardTitle>Phone Consultation</ContactCardTitle>
                <ContactCardText>
                  Schedule a free consultation call to discuss your project and
                  get personalized guidance.
                </ContactCardText>
                <ContactCardLink href="tel:#">Schedule Call →</ContactCardLink>
              </ContactCard>
              <ContactCard>
                <ContactCardIcon>📚</ContactCardIcon>
                <ContactCardTitle>Resource Center</ContactCardTitle>
                <ContactCardText>
                  Access our comprehensive guides, tutorials, and documentation
                  for detailed information.
                </ContactCardText>
                <ContactCardLink href="#">Browse Resources →</ContactCardLink>
              </ContactCard>
            </ContactCardGrid>
          </ContactSection>
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
