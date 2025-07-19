# How to Add New Blog Posts - Non-Coder Guide

This guide will help you add new blog posts to the Click Career website without any coding knowledge.

## Quick Start

1. **Copy the template**: Use `BLOG_TEMPLATE.md` as your starting point
2. **Fill in your content**: Replace the placeholder text with your blog content
3. **Save with proper filename**: Use the naming format `YYYY-MM-DD-your-blog-title.md`
4. **Place in correct folder**: Save the file in the `content/blogs/` folder

## Step-by-Step Instructions

### Step 1: Create Your Blog File

1. Open the `content/blogs/` folder
2. Copy the `BLOG_TEMPLATE.md` file
3. Rename it using this format: `2024-01-15-your-blog-title.md`
   - Use today's date (YYYY-MM-DD format)
   - Replace spaces with hyphens in the title
   - Keep it short and descriptive

**Example filenames:**
- `2024-01-15-python-programming-tips.md`
- `2024-01-15-ssc-exam-preparation.md`
- `2024-01-15-digital-marketing-guide.md`

### Step 2: Fill in the Blog Information (Frontmatter)

At the top of your file, you'll see information between `---` lines. This is called "frontmatter" and contains your blog's metadata:

```markdown
---
title: "Your Blog Post Title Here"
author: "Your Name"
authorRole: "Your Role/Credentials"
publishDate: "2024-01-15"
readTime: "5 min"
category: "Technical Zone"
tags: ["Tag1", "Tag2", "Tag3"]
image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d"
featured: false
excerpt: "A brief summary of your blog post"
---
```

**Fill in each field:**

- **title**: Your blog post title (keep it engaging and descriptive)
- **author**: Your full name
- **authorRole**: Your credentials or role (e.g., "Senior Software Engineer", "UPSC Mentor")
- **publishDate**: Today's date in YYYY-MM-DD format
- **readTime**: Estimate how long it takes to read (e.g., "5 min", "10 min")
- **category**: Choose from:
  - "Technical Zone"
  - "Govt Exam Zone"
  - "Communication Zone"
  - "AI & Freelancing Zone"
- **tags**: 3-5 relevant keywords in square brackets
- **image**: URL of a relevant image (you can use Unsplash URLs)
- **featured**: Set to `true` if you want this blog to appear in the featured section
- **excerpt**: A 1-2 sentence summary that appears in blog listings

### Step 3: Write Your Blog Content

After the `---` line, write your blog content using simple formatting:

#### Headings
```markdown
# Main Title (automatically added from frontmatter)
## Section Heading
### Subsection Heading
```

#### Text Formatting
```markdown
**Bold text**
*Italic text*
```

#### Lists
```markdown
Bullet points:
- First point
- Second point
- Third point

Numbered lists:
1. First step
2. Second step
3. Third step
```

#### Links
```markdown
[Link text](https://example.com)
```

#### Quotes
```markdown
> This is an important quote or note
```

#### Code
```markdown
Use `backticks` for inline code.

For code blocks:
```
Your code here
Multiple lines supported
```
```

### Step 4: Choose Categories and Tags

**Categories** (choose one):
- **Technical Zone**: Programming, networking, Linux, technical skills
- **Govt Exam Zone**: SSC, UPSC, banking exams, government job preparation
- **Communication Zone**: English speaking, interview skills, personality development
- **AI & Freelancing Zone**: Digital marketing, content writing, freelancing, AI tools

**Tags** (choose 3-5):
- Be specific and relevant
- Use keywords people might search for
- Examples: ["Python", "Programming", "Beginner"], ["SSC CGL", "Government Jobs", "Preparation"]

### Step 5: Find Good Images

Use free stock photos from:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com

Copy the image URL and paste it in the `image` field.

### Step 6: Save and Test

1. Save your file in the `content/blogs/` folder
2. The website will automatically detect and display your new blog post
3. Check the blog section to see your post appear

## Content Writing Tips

### Writing Engaging Content

1. **Start with a hook**: Begin with an interesting fact, question, or story
2. **Use clear headings**: Break content into digestible sections
3. **Write conversationally**: Use "you" and "your" to connect with readers
4. **Include examples**: Real-world examples make content more relatable
5. **End with action**: Tell readers what to do next

### SEO Best Practices

1. **Use keywords naturally**: Include relevant terms in your title and content
2. **Write descriptive headings**: Use headings that clearly describe the section
3. **Keep paragraphs short**: 2-3 sentences per paragraph for better readability
4. **Add internal links**: Reference other blog posts or courses when relevant

### Content Ideas by Category

**Technical Zone:**
- Tutorial guides
- Best practices
- Tool comparisons
- Career advice
- Industry trends

**Govt Exam Zone:**
- Study strategies
- Exam patterns
- Current affairs
- Success stories
- Time management tips

**Communication Zone:**
- Speaking tips
- Interview preparation
- Personality development
- Professional communication
- Confidence building

**AI & Freelancing Zone:**
- Freelancing guides
- Client acquisition
- Pricing strategies
- Tool recommendations
- Success stories

## Common Mistakes to Avoid

1. **Wrong filename format**: Always use `YYYY-MM-DD-title.md`
2. **Missing frontmatter**: Don't forget the `---` lines at the top
3. **Wrong category**: Choose the correct category for your content
4. **No excerpt**: Always include a compelling excerpt
5. **Poor formatting**: Use headings and lists to break up text
6. **No call-to-action**: End with next steps for readers

## Getting Help

If you need help:
1. Look at existing blog files for examples
2. Use the template as a starting point
3. Ask the technical team for assistance with complex formatting

## File Naming Examples

✅ **Good:**
- `2024-01-15-python-programming-basics.md`
- `2024-01-15-ssc-cgl-preparation-strategy.md`
- `2024-01-15-english-speaking-tips.md`

❌ **Bad:**
- `python blog.md` (no date, has spaces)
- `2024-1-15-blog.md` (wrong date format)
- `my-blog-post.txt` (wrong file extension)

Remember: The goal is to create valuable, helpful content for your audience. Focus on solving their problems and answering their questions!