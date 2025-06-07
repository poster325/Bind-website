// Automatic Blog Loader - Scans articles folder and extracts metadata
class AutoBlogLoader {
    constructor() {
        this.markdownParser = new MarkdownParser();
        this.articles = [];
        this.featured = null;
    }

    // Get list of markdown files in articles folder
    async getArticleFiles() {
        try {
            // Since we can't directly list directory contents in browser,
            // we'll use a manifest file approach
            const response = await fetch('blog/articles/manifest.json');
            if (response.ok) {
                const manifest = await response.json();
                return manifest.files || [];
            }
        } catch (error) {
            console.warn('No manifest.json found, falling back to predefined list');
        }

        // Fallback: predefined list of articles
        return [
            'ai-writing-journey.md',
            'startup-success-story.md',
            'writing-tips-ai.md',
            'polyphia-redefining-instrumental-music.md'
        ];
    }

    // Parse frontmatter from markdown content
    parseFrontmatter(content) {
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
        const match = content.match(frontmatterRegex);
        
        if (!match) {
            return { frontmatter: {}, content: content };
        }

        const frontmatterText = match[1];
        const markdownContent = match[2];
        const frontmatter = {};

        // Parse YAML-like frontmatter
        const lines = frontmatterText.split('\n');
        let currentKey = null;
        let currentObject = null;
        
        lines.forEach(line => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return;
            
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                const key = line.substring(0, colonIndex).trim();
                let value = line.substring(colonIndex + 1).trim();
                
                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) || 
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }

                // Handle arrays (tags)
                if (value.startsWith('[') && value.endsWith(']')) {
                    value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
                    frontmatter[key] = value;
                    currentKey = null;
                    currentObject = null;
                }
                // Handle objects (author)
                else if (value === '' && (key === 'author' || key === 'tags')) {
                    currentKey = key;
                    currentObject = {};
                    frontmatter[key] = currentObject;
                }
                // Handle boolean values
                else if (value === 'true' || value === 'false') {
                    frontmatter[key] = value === 'true';
                    currentKey = null;
                    currentObject = null;
                }
                // Handle regular values
                else {
                    frontmatter[key] = value;
                    currentKey = null;
                    currentObject = null;
                }
            }
            // Handle nested object properties
            else if (currentKey && currentObject && trimmedLine.includes(':')) {
                const nestedColonIndex = trimmedLine.indexOf(':');
                const nestedKey = trimmedLine.substring(0, nestedColonIndex).trim();
                let nestedValue = trimmedLine.substring(nestedColonIndex + 1).trim();
                
                // Remove quotes if present
                if ((nestedValue.startsWith('"') && nestedValue.endsWith('"')) || 
                    (nestedValue.startsWith("'") && nestedValue.endsWith("'"))) {
                    nestedValue = nestedValue.slice(1, -1);
                }
                
                currentObject[nestedKey] = nestedValue;
            }
        });

        return { frontmatter, content: markdownContent };
    }

    // Generate article ID from filename
    generateId(filename) {
        return filename.replace('.md', '').toLowerCase();
    }

    // Extract excerpt from content
    extractExcerpt(content, maxLength = 200) {
        // Remove markdown formatting for excerpt
        let text = content
            .replace(/^#.*$/gm, '') // Remove headers
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
            .replace(/\*(.*?)\*/g, '$1') // Remove italic
            .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
            .replace(/```[\s\S]*?```/g, '') // Remove code blocks
            .replace(/`(.*?)`/g, '$1') // Remove inline code
            .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
            .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
            .replace(/\n+/g, ' ') // Replace newlines with spaces
            .trim();

        if (text.length > maxLength) {
            text = text.substring(0, maxLength).trim() + '...';
        }

        return text;
    }

    // Load and process a single article
    async loadArticle(filename) {
        try {
            const response = await fetch(`blog/articles/${filename}`);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}`);
            }

            const content = await response.text();
            const { frontmatter, content: markdownContent } = this.parseFrontmatter(content);

            // Generate article object
            const article = {
                id: frontmatter.id || this.generateId(filename),
                title: frontmatter.title || 'Untitled Article',
                excerpt: frontmatter.excerpt || this.extractExcerpt(markdownContent),
                date: frontmatter.date || new Date().toISOString().split('T')[0],
                category: frontmatter.category || 'Uncategorized',
                author: frontmatter.author || {
                    name: 'Anonymous',
                    role: 'Writer',
                    avatar: 'A'
                },
                image: frontmatter.image || null,
                tags: frontmatter.tags || [],
                markdownFile: `blog/articles/${filename}`,
                featured: frontmatter.featured === true || frontmatter.featured === 'true'
            };

            return article;
        } catch (error) {
            console.error(`Error loading article ${filename}:`, error);
            return null;
        }
    }

    // Load all articles
    async loadAllArticles() {
        try {
            const files = await this.getArticleFiles();
            const articlePromises = files.map(file => this.loadArticle(file));
            const loadedArticles = await Promise.all(articlePromises);

            // Filter out failed loads and separate featured articles
            this.articles = [];
            this.featured = null;

            loadedArticles.forEach(article => {
                if (article) {
                    if (article.featured) {
                        this.featured = article;
                    } else {
                        this.articles.push(article);
                    }
                }
            });

            // Sort articles by date (newest first)
            this.articles.sort((a, b) => new Date(b.date) - new Date(a.date));

            return {
                featured: this.featured,
                articles: this.articles
            };
        } catch (error) {
            console.error('Error loading articles:', error);
            return { featured: null, articles: [] };
        }
    }

    // Get article by ID
    getArticleById(id) {
        if (this.featured && this.featured.id === id) {
            return this.featured;
        }
        return this.articles.find(article => article.id === id);
    }

    // Filter articles by category
    filterByCategory(category) {
        if (category === 'All Stories') return this.articles;
        return this.articles.filter(article => article.category === category);
    }

    // Get all unique categories
    getCategories() {
        const categories = new Set(['All Stories']);
        this.articles.forEach(article => categories.add(article.category));
        return Array.from(categories);
    }

    // Get all unique tags
    getTags() {
        const tags = new Set();
        this.articles.forEach(article => {
            if (article.tags) {
                article.tags.forEach(tag => tags.add(tag));
            }
        });
        return Array.from(tags);
    }
}

// Enhanced Blog Template with Auto-Loading
class AutoBlogTemplate extends BlogTemplate {
    constructor() {
        super();
        this.autoLoader = new AutoBlogLoader();
        this.blogData = null;
    }

    // Initialize with auto-loaded data
    async initializeBlog() {
        try {
            // Show loading state
            this.showLoading();

            // Load articles automatically
            this.blogData = await this.autoLoader.loadAllArticles();

            // Render content
            if (this.blogData.featured) {
                await this.renderFeaturedArticle(this.blogData.featured);
            }

            this.renderBlogGrid(this.blogData.articles);
            this.setupAutoFilters();

            // Hide loading state
            this.hideLoading();

        } catch (error) {
            console.error('Error initializing auto blog:', error);
            this.showError('Failed to load blog articles');
        }
    }

    // Setup filters with auto-detected categories
    setupAutoFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const categories = this.autoLoader.getCategories();

        filterTabs.forEach((tab, index) => {
            if (index < categories.length) {
                tab.textContent = categories[index];
                tab.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Remove active class from all tabs
                    filterTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');

                    // Filter and render articles
                    const category = categories[index];
                    const filteredArticles = this.autoLoader.filterByCategory(category);
                    this.renderBlogGrid(filteredArticles);
                });
            }
        });
    }

    // Show loading state
    showLoading() {
        const blogGrid = document.querySelector('.blog-grid');
        if (blogGrid) {
            blogGrid.innerHTML = '<div class="loading-state">Loading articles...</div>';
        }
    }

    // Hide loading state
    hideLoading() {
        const loadingState = document.querySelector('.loading-state');
        if (loadingState) {
            loadingState.remove();
        }
    }

    // Show error state
    showError(message) {
        const blogGrid = document.querySelector('.blog-grid');
        if (blogGrid) {
            blogGrid.innerHTML = `<div class="error-state">${message}</div>`;
        }
    }

    // Get article by ID (for blog post page)
    getArticleById(id) {
        return this.autoLoader.getArticleById(id);
    }
}

// Enhanced Blog Post Loader
class AutoBlogPostLoader extends BlogPostLoader {
    constructor() {
        super();
        this.autoLoader = new AutoBlogLoader();
    }

    async loadPost() {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');

        if (!postId) {
            this.showError('No article ID provided');
            return;
        }

        try {
            // Load all articles to find the requested one
            await this.autoLoader.loadAllArticles();
            const article = this.autoLoader.getArticleById(postId);

            if (!article) {
                this.showError('Article not found');
                return;
            }

            // Load and display the article
            await this.displayPost(article);

        } catch (error) {
            console.error('Error loading post:', error);
            this.showError('Error loading article');
        }
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AutoBlogLoader, AutoBlogTemplate, AutoBlogPostLoader };
} 