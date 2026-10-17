import React from "react";
import blog1 from '../assets/images/blog_1.jpg';
import '../assets/styles/Blog.scss';

const BLOG1 = "https://medium.com/voice-tech-podcast/desktop-assistant-in-python-3-6-e11ab7739f70"

function Blog() {
    return(
    <div className="blogs-container" id="blogs">
        <h1>Blogs</h1>
        <div className="blogs-grid">
            <div className="blog">
                <a href={BLOG1} target="_blank" rel="noreferrer"><img src={blog1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={BLOG1} target="_blank" rel="noreferrer"><h2>Desktop Assistant in Python</h2></a>
                <p>Remember JARVIS from Iron Man? This was my (very humble) attempt to build one. I created a Python-based desktop assistant that can take voice commands and perform tasks like telling the time, opening apps, and searching the web. It was my first hands-on dive into speech recognition and automating everyday interactions - and the spark that got me hooked on building smart interfaces.</p>
            </div>
        </div>
    </div>
    );
}

export default Blog;