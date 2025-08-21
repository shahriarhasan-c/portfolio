import React from 'react';
import './BlogPostPreview.css';

const BlogPostPreview = ({ title, summary, date, slug, onPostClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPostClick(slug);
  };

  return (
    <article className="blog-post-preview">
      <div className="blog-post-content">
        <h3>{title}</h3>
        <p className="blog-post-date">{date}</p>
        <p className="blog-post-summary">{summary}</p>
        <button className="read-more-link" onClick={handleClick}>
          Read More
        </button>
      </div>
    </article>
  );
};

export default BlogPostPreview;