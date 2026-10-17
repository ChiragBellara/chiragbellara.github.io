import React, {useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {
    Home,
    AboutMe,
    Navigation,
    Project,
    ScrollToTop,
    Footer,
    Writings,
    WritingPage
} from "./components";
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <div className="main-container">
        <Navigation/>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/projects" element={<Project />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/writings/:slug" element={<WritingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
    </div>
    );
}

export default App;