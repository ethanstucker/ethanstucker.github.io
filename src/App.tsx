import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
    const [showResume, setShowResume] = useState(false);

    const handleResumeClick = () => {
        setShowResume(!showResume);
    };

    return (
        <div className="App fade-in">
            <div>
                <h1>Hi! My name is Ethan Stucker,</h1>
                <p>I'm currently a senior at UCA in Conway AR studying Computer Science.</p>
                <p>Click on a card below to learn more about me.</p>
            </div>
            <div className="card-container">
                <Card
                    image="/GitHub-Logo.png"
                    text="View my github and see the projects I have done!"
                    onClick={() => window.location.href = 'https://github.com/ethanstucker'}
                />
                <Card
                    image="/resume_logo.png"
                    text="Take a look at my Resume!"
                    onClick={handleResumeClick}
                />
                <Card
                    image="/construction_cone.png"
                    text="Coming Soon"
                    onClick={() => {}}
                />
            </div>
            {showResume && (
                <div className="resume">
                    <h2>Resume</h2>
                    <p className="indentLeft">Ethan Stucker</p>
                    <hr className="barrier" />
                    <p className="indentLeft">Objective:<br />&emsp;Continue Internship till fruition</p>
                    <hr className="barrier" />
                    <p className="indentLeft">Education:<br />&emsp;
                        University of Central Arkansas<br />&emsp;
                        Bachelor of Science in Computer Science<br />&emsp;
                        Major: Computer Science -- Senior -- Anticipated Graduation: December 2025
                    </p>
                    <hr className="barrier" />
                    <p className="indentLeft">Skills:<br />&emsp;
                        • Proficient in Microsoft Office Apps<br />&emsp;
                        • Proficient in handling technology<br />&emsp;
                        • 120 WPM typing, NUM Pad included<br />&emsp;
                        • Fast-learner<br />&emsp;
                        • Hard worker<br />&emsp;
                        • Coding since Freshman year in High School<br />&emsp;
                        • Java & C++<br />&emsp;
                        • Knowledge of tends/social media<br />&emsp;
                        • Employee Management<br />&emsp;
                        • ServSafe Certified<br />&emsp;
                        • Data Structures<br />&emsp;
                    </p>
                    <hr className="barrier" />
                    <p className="indentLeft">Work Experience:<br />&emsp;
                        Sonic Drive-In of Ash Flat, Ash Flat, AR<br />&emsp;
                        Carhop, Crew, Assistant Manager
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;March 2021 - May 2022<br />&emsp;
                        • Nightly Deposits<br />&emsp;
                        • Created a task list for carhops and cooks<br />&emsp;
                        • Customer Service<br />&emsp;
                        • Communication<br />&emsp;
                        • Maintained accurate sales receipt as well as tip outs for all carhops<br />&emsp;
                        • Managed Staff<br />&emsp;
                        • Handled Food Safety<br />&emsp;
                        • Audit Ready<br />&emsp;
                        • Handled Labor and Sales<br />&emsp;
                    </p>
                    <p className="indentLeft">
                        Chipotle, Conway, AR<br />&emsp;
                        Crew, Kitchen Leader
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;October 2022 - May 2024<br />&emsp;
                        • Customer Service<br />&emsp;
                        • Opening/Closing Chores<br />&emsp;
                        • Knowledge of Food and Employee Safety<br />&emsp;
                        • Ordering Food Truck<br />&emsp;
                        • Taking Inventory<br />&emsp;
                        • Managing Flow of money<br />&emsp;
                    </p>
                    <p className="indentLeft">
                        Acxiom LLC, Conway, AR<br />&emsp;
                        Intern - Database Tester
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;May 2024 - Present<br />&emsp;
                        • API Testing<br />&emsp;
                        • QA Testing<br />&emsp;
                        • Taking meetings<br />&emsp;
                        • Microsoft Office/Work Apps<br />&emsp;
                        • Java Programming<br />&emsp;
                        • Automation Programs<br />&emsp;
                    </p>
                    <hr className="barrier" />
                    <p className="indentLeft">Classes Currently Taking:<br />&emsp;
                        • Ethical Hacking - Learning basics of hacking<br />&emsp;
                        • Ethical Implications of Technology - Ethics about day to day techonology<br />&emsp;
                        • Artificial Intelligence - Learning the fundamentals of AI<br />&emsp;
                        • Principles of Programming Language - Learning the fundamentals of languages<br />&emsp;
                        • College Physics<br />&emsp;
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;