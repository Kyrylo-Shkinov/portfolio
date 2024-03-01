import React from "react";
import profileImg from "../img/profile-pic.png";
import Typed from 'typed.js';

function Cv() {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<span class="bold">Hello there!</span> 👋<br>Welcome to my website, a creation born out of my desire to organize and reinforce my knowledge of React. <br>This project stands as one of my initial hands-on experiences with React, encompassing a variety of technologies. <br><span class="bold">🚀 Key Features:</span> <br>Utilization of fundamental React concepts such as State, useEffect, localStorage, and Fetch. <br>Integration of third-party technologies, including an API for currency exchange rates, a library for animations, and the implementation of simple SVG animations.<br><span class="bold">🌐 Project Highlight:</span> <br>Explore my first React project designed for a humanities office, a venture that holds special significance to me. <br><span class="bold">📄 Download My Resume:</span> <br>For a more comprehensive overview of my skills, experiences, and qualifications, feel free to download my resume <span class="bold"><a class="cv-link" href="../CV-React-Shkinov-Kyrylo.pdf" download>here.</a></span> <br><br>Feel free to navigate around and delve into the world of React with me! 🚀'],
            typeSpeed: 2,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);



    return (
        <>
            <div className="cv">
                <div className="cv-title">
                    <img className="cv-title-photo" src={profileImg} alt="" />
                    <div className="cv-title-text">
                        <h1>Kyrylo Shkinov</h1>
                        <p className="cv-title-text-role">React Developer</p>
                    </div>
                </div>
                <div className="cv-objective">
                    <span className="cv-objective-text" ref={el}></span>
                    <span className="cv-objective-text"></span>
                </div>
            </div>
        </>
    );
}

export default Cv;