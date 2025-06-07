# Simple Blog Template System

This blog template system uses a simple approach: just add your markdown files and list them in the JavaScript file. No complex configuration needed!

## 🚀 How It Works

The blog system consists of:

1. **Simple Blog Loader** (`js/simple-blog-loader.js`) - Loads articles from a simple file list
2. **Blog Template System** (`js/blog-template.js`) - Handles rendering and markdown parsing
3. **Markdown Articles** (`blog/articles/`) - Individual article content with optional frontmatter

## ✨ Adding a New Blog Article

### Step 1: Create the Markdown File

Create a new `.md` file in the `blog/articles/` directory. You can use frontmatter for metadata or just write plain markdown:

**With frontmatter (recommended):**

```markdown
---
title: "Your Article Title"
date: "2024-03-20"
category: "Success Story"
author:
  name: "Author Name"
  role: "Author Title/Role"
  avatar: "AN"
excerpt: "A brief description of your article."
image: "images/blog/your-article-image.jpg"
featured: false
tags: ["tag1", "tag2", "tag3"]
---

# Your Article Title

Your article content goes here...
```

**Or just plain markdown:**

```markdown
# Your Article Title

Your article content goes here. The system will automatically extract the title and generate an excerpt.
```

### Step 2: Add File to the List

Open `js/simple-blog-loader.js` and add your file to the `getArticleFiles()` function:

```javascript
getArticleFiles() {
    return [
        'polyphia-redefining-instrumental-music.md',
        'your-new-article.md'  // Add your file here
        // Add more files here as you create them
    ];
}
```

### Step 3: That's It!

Your article will automatically appear on the blog. No other configuration needed!

## 📁 File Structure

```
blog/
├── articles/           # Markdown files
│   ├── polyphia-redefining-instrumental-music.md
│   └── your-new-article.md
├── README.md          # This file
js/
├── simple-blog-loader.js # Simple article loader
└── blog-template.js   # Template system and markdown parser
images/
└── blog/             # Article images (optional)
    └── your-article-image.jpg
```

## 🏷️ Frontmatter Fields (All Optional)

- **title**: Article title (auto-extracted from # heading if not provided)
- **date**: Publication date in YYYY-MM-DD format (defaults to today)
- **category**: Article category (defaults to "Uncategorized")
- **author**: Author information object with name, role, avatar
- **excerpt**: Brief description (auto-generated if not provided)
- **image**: Path to article image
- **featured**: Set to `true` to feature this article at the top
- **tags**: Array of tags

## 📂 Categories

The system automatically detects categories from your articles. Common categories:

- **Success Story** - User success stories and case studies
- **Writing Tips** - Writing advice and best practices
- **AI Insights** - Articles about AI and technology
- **Publishing Guide** - Publishing and marketing advice

## ⭐ Featured Articles

To make an article featured (appears at the top):

- Add `featured: true` to the frontmatter
- Only one article should be featured at a time

## 📝 Markdown Support

Full markdown support including:

- Headers (# ## ###)
- Bold (**text**) and italic (_text_)
- Links ([text](url))
- Images (![alt](url))
- Code blocks (`code`) and inline code (`code`)
- Lists (- item or 1. item)
- Blockquotes (> text)

## 🎨 Customization

### Adding More Articles

1. Create markdown file in `blog/articles/`
2. Add filename to the list in `js/simple-blog-loader.js`
3. Done!

### Styling

- Modify CSS in `blog.html` and `blog-post.html`
- Change colors by updating CSS variables

### Functionality

- Edit `js/simple-blog-loader.js` to change how articles are loaded
- Modify `js/blog-template.js` for rendering changes

## 💡 Tips

1. **File naming**: Use descriptive filenames (they become the article ID)
2. **Images**: Add images to `images/blog/` and reference them in frontmatter
3. **Excerpts**: Write compelling excerpts or let the system auto-generate them
4. **Categories**: Use consistent category names for better organization
5. **Featured**: Only set one article as featured at a time

## 🔧 Troubleshooting

### Article not appearing?

- Check that the filename is added to `getArticleFiles()` in `js/simple-blog-loader.js`
- Verify the markdown file exists in `blog/articles/`
- Check browser console for errors

### Frontmatter not working?

- Ensure frontmatter is at the very top of the file
- Check that it's enclosed in `---` lines
- Verify YAML syntax (proper indentation, colons after keys)

### Images not loading?

- Confirm image files exist in the specified path
- Check that image paths are correct in frontmatter
- Ensure paths are relative to the website root

## 🚀 Advantages of This Simple System

✅ **Easy to use** - Just add files to a list  
✅ **No complex configuration** - Minimal setup required  
✅ **Flexible frontmatter** - Use as much or as little metadata as you want  
✅ **Auto-generated content** - Titles and excerpts extracted automatically  
✅ **Error handling** - Graceful handling of missing files or metadata  
✅ **Fast loading** - Simple and efficient

## 📝 Example Workflow

1. Write your article: `blog/articles/my-awesome-post.md`
2. Add to list: Edit `js/simple-blog-loader.js` and add `'my-awesome-post.md'`
3. Refresh your blog - article appears automatically!

---

_This simple template system gets you up and running quickly. Focus on writing great content instead of managing complex configurations!_
