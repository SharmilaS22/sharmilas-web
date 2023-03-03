import React from 'react';

function About() {
    const aboutText = [
        "Software engineer from India. I like learning and applying computer technologies to develop websites, applications and other software programs.",
        "I am also a part-time blogger. I write articles on Medium about Node.js, AWS, CSS and related topics.",
        "I enjoy reading Sci-fi and Fantasy novels. Designing digital planners is one of my creative interests."
    ]

    return ( <>
        {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
        ))}
    </> );
}

export default About;