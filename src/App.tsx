import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
    const [showResume, setShowResume] = useState(false);

    const handleResumeClick = () => {
        setShowResume(!showResume);
    };

    return (
        <div className="App">
            <div>
                <h1>Hi! My name is Ethan Stucker,</h1>
                <p>I'm currently a senior at UCA in Conway AR studying Computer Science.</p>
                <p>Click on a card below to learn more about me.</p>
            </div>
            <div className="card-container">
                <Card
                    image="/public/GitHub-Logo.png"
                    text="View my github and see the projects I have done!"
                    onClick={() => window.location.href = 'https://github.com/ethanstucker'}
                />
                <Card
                    image="/public/resume_logo.png"
                    text="Take a look at my Resume!"
                    onClick={handleResumeClick}
                />
                <Card
                    image="/public/construction_cone.png"
                    text="Coming Soon"
                    onClick={() => {}}
                />
            </div>
            {showResume && (
                <div className="resume">
                    <h2>My Resume</h2>
                    <p>Here is the text of my resume with some <span className="highlight">highlighting</span>.</p>
                    <p>Click <span className="highlight" onClick={handleResumeClick}>here</span> to close.</p>
                </div>
            )}
        </div>
    );
}

export default App;