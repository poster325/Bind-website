// Blog Template System
class BlogTemplate {
    constructor() {
        this.markdownParser = new MarkdownParser();
    }

    // Load and render featured article
    async renderFeaturedArticle(article) {
        const featuredSection = document.querySelector('.featured-content');
        if (!featuredSection) return;

        const featuredText = featuredSection.querySelector('.featured-text');
        if (featuredText) {
            featuredText.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="author-info">
                    <div class="author-avatar">${article.author.avatar}</div>
                    <div class="author-details">
                        <h4>${article.author.name}</h4>
                        <p>${article.author.role}</p>
                    </div>
                </div>
                <a href="blog-post.html?id=${article.id}" class="blog-link" style="margin-top: 1rem; display: inline-flex;">Read Full Story →</a>
            `;
        }

        const featuredImage = featuredSection.querySelector('.featured-image');
        if (featuredImage && article.image) {
            featuredImage.innerHTML = `<img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 1rem;">`;
        }
    }

    // Render blog articles grid
    renderBlogGrid(articles) {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;

        blogGrid.innerHTML = articles.map(article => `
            <article class="blog-card">
                <div class="blog-image">
                    ${article.image ? 
                        `<img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;">` : 
                        'Case Study Image'
                    }
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-date">📅 ${this.formatDate(article.date)}</span>
                        <span class="blog-category">${article.category}</span>
                    </div>
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <a href="blog-post.html?id=${article.id}" class="blog-link">Read More →</a>
                </div>
            </article>
        `).join('');
    }

    // Filter articles by category
    filterArticles(articles, category) {
        if (category === 'All Stories') return articles;
        return articles.filter(article => article.category === category);
    }

    // Format date for display
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    // Initialize blog page
    async initializeBlog() {
        try {
            // Render featured article
            if (blogConfig.featured) {
                await this.renderFeaturedArticle(blogConfig.featured);
            }

            // Render blog grid
            this.renderBlogGrid(blogConfig.articles);

            // Setup filter functionality
            this.setupFilters();
        } catch (error) {
            console.error('Error initializing blog:', error);
        }
    }

    // Setup filter tabs functionality
    setupFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const categories = ['All Stories', 'Success Stories', 'Writing Tips', 'AI Insights', 'Publishing Guide'];

        filterTabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');

                // Filter and render articles
                const category = categories[index] || 'All Stories';
                const filteredArticles = this.filterArticles(blogConfig.articles, category);
                this.renderBlogGrid(filteredArticles);
            });
        });
    }
}

// Simple Markdown Parser
class MarkdownParser {
    parse(markdown) {
        if (!markdown) return '';

        let html = markdown;

        // Headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Bold
        html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
        html = html.replace(/__(.*?)__/gim, '<strong>$1</strong>');

        // Italic
        html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
        html = html.replace(/_(.*?)_/gim, '<em>$1</em>');

        // Links
        html = html.replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2">$1</a>');

        // Images
        html = html.replace(/!\[([^\]]*)\]\(([^\)]*)\)/gim, '<img alt="$1" src="$2" />');

        // Code blocks
        html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
        html = html.replace(/`([^`]*)`/gim, '<code>$1</code>');

        // Lists
        html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
        html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
        html = html.replace(/^(\d+)\. (.*$)/gim, '<li>$1. $2</li>');

        // Wrap consecutive list items in ul tags
        html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');
        html = html.replace(/<\/ul>\s*<ul>/gim, '');

        // Paragraphs
        html = html.replace(/^\s*(.+)$/gim, '<p>$1</p>');

        // Line breaks
        html = html.replace(/\n/gim, '<br>');

        return html;
    }

    async loadMarkdownFile(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}`);
            }
            const markdown = await response.text();
            return this.parse(markdown);
        } catch (error) {
            console.error('Error loading markdown file:', error);
            return '<p>Error loading content. Please try again later.</p>';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const blogTemplate = new BlogTemplate();
    blogTemplate.initializeBlog();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BlogTemplate, MarkdownParser };
} 