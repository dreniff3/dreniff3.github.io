import NavLinks from '../components/NavLinks';
import { DiGithubFull } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io5';

// Import components
import SkillList from '../components/SkillList';

const About = () => {
    let links = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    let languages = ['Python', 'JavaScript', 'SQL', 'HTML/CSS'];
    let frameworks = ['Express.js', 'Flask', 'React'];
    let other = ['Node.js', 'MongoDB', 'MySQL', 'Git', 'Visual Studio Code'];

    return (
        <>
            <div className="bio">
                <div className="bio-header">
                    <h4>Don Reniff</h4>
                    <div className="social-links">
                        <DiGithubFull className="github-logo" />
                        <IoLogoLinkedin className="linkedin-logo" />
                    </div>
                </div>
                <p className="info-header">A passionate learner with a growth mindset</p>
                <p className="info-description--long">I am a second year student enrolled in Oregon State University's online post-bacc Computer Science program, and I'm looking for an internship for next summer or beyond to gain experience in a professional setting and to learn more about the software development lifecycle.</p>
                <p className="info-description--long">I am a motivated learner who loves problem solving and cares about writing clean, readable, well-documented and efficient code.</p>
                <p className="info-description--long">As a Computer Science student, I have consistently demonstrated high levels of collaboration and strong communication working with other students on large group projects. I have experience with relational databases and a strong interest in Full Stack Web Development.</p>
                <div className="skills">
                    <div className="skills-header">
                        <h5>Skills</h5><span className="line"></span>
                    </div>
                    <div className="skills-list">
                        <SkillList 
                            category={'Languages:'} 
                            skills={languages} 
                        />
                        <SkillList 
                            category={'Frameworks/Libraries:'} 
                            skills={frameworks} 
                        />
                        <SkillList 
                            category={'Other Technologies:'} 
                            skills={other} 
                        />
                    </div>
                    <a href="resume" className="btn-text small">View my resume &rarr;</a>
                </div>
            </div>
            <NavLinks links={links} />
        </>
    );
};

export default About;