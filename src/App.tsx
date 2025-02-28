import './App.css';
import Card from './Card';

function App() {
    const handleGithubClick = () => {
        window.location.href = 'https://github.com/ethanstucker';
    };

    const handleResumeClick = () => {
        window.location.href = '/path/to/resume.pdf';
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
                    text="GitHub"
                    onClick={handleGithubClick}
                />
                <Card
                    image="path/to/resume-image.png"
                    text="Resume"
                    onClick={handleResumeClick}
                />
                <Card
                    image="path/to/placeholder-image.png"
                    text="Coming Soon"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}

export default App;