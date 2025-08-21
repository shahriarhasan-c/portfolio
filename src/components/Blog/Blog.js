import React, { useState } from 'react';
import BlogPostPreview from './BlogPostPreview/BlogPostPreview';
import blogPosts from '../../data/blogPosts';
import './Blog.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (slug) => {
    const post = blogPosts.find(p => p.slug === slug);
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section className="blog" id="blog">
      <div className="blog-content">
        <h2>My Blog</h2>
        <p>Sharing insights and tutorials about web development:</p>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <BlogPostPreview
              key={index}
              title={post.title}
              summary={post.summary}
              date={post.date}
              slug={post.slug}
              onPostClick={handlePostClick}
            />
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="blog-modal-overlay" onClick={closeModal}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={closeModal}>
              ×
            </button>
            <article className="blog-post-full">
              <header className="blog-post-header">
                <h1>{selectedPost.title}</h1>
                <p className="blog-post-date">{selectedPost.date}</p>
              </header>
              <div className="blog-post-content">
                {selectedPost.content.split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={index}>{line.substring(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={index}>{line.substring(3)}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={index}>{line.substring(4)}</h3>;
                  } else if (line.startsWith('```')) {
                    return null; // Handle code blocks separately if needed
                  } else if (line.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return <p key={index}>{line}</p>;
                  }
                })}
              </div>
            </article>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;