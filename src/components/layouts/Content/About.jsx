import React from 'react';

function About() {
    const aboutText = [
        "Software engineer from India. I like learning and applying computer technologies to develop websites, applications and other software programs.",
        "I am also a part-time blogger. I write articles on Medium about Node.js, AWS, CSS and related topics.",
        "I enjoy reading Sci-fi and Fantasy novels. Designing digital planners is one of my creative interests."
    ]

    const aboutTextUpdated = [
        "I am a passionate software engineer from India, dedicated to learning and applying computer technologies to develop websites, applications, and software programs.",
        "As a part-time blogger, I share my expertise through Medium articles on Node.js, AWS, CSS, and more.",
        "In my free time, I indulge in reading Sci-fi and Fantasy novels, and I express my creativity by designing digital designs."
    ]

    return ( <div className="about-box">
        {aboutTextUpdated.map((text, index) => (
            <p className="about-paragraph" key={index}>{text}</p>
        ))}
    </div> );
}

export default About;