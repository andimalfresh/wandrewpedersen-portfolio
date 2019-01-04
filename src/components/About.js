import React from 'react'

const About = (props) => {
    return(
        <div className="aboutContent">
            
            <div className="aboutText">
               <div className="picDiv">
                    <img className="personalPic" alt="Andrew Pedersen Pic" src={require('./personalPic.jpg')}/>
               </div>
               <div className="textDiv">
                    <p>Hello friend !! My name is Andrew. I am a Software Engineer in both front-end and back-end development. From a young age I have been enthralled in technology, I began learning front end development in the late 90's and kept it up as a hobby over the years along with graphic design. In early 2018, I decided to make a pivot in my career and focus soley on Software Engineering. I am currently enrolled in Galvanize's Full Stack Immersive Web Development Program which is over 800 hours of front and back end application development.</p>
                    <p>You've come across my late 1990s themed web page, built in React with responsive mobile design to showcase some of my past and current projects. Whats with the cool looking umbrella you ask ? Check back in a few weeks and its mystery shall be revealed. Also feel free to contact me through any of the resources below!</p>
                </div>
            </div>
            <ul className="contactList">
                <li>
                    <a className="contactLink" rel="noopener noreferrer" target="_blank" href="http://linkedin.com/in/wandrewpedersen">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn</a>
                    </li>
                <li>
                    <a className="contactLink" rel="noopener noreferrer" target="_blank" href="https://www.github.com/andimalfresh/">
                        <i className="fab fa-instagram"></i>
                        GitHub</a>
                </li>
                <li>
                    <a className="contactLink" href="mailto:w.andrew.pedersen@gmail.com?Subject=SnowG%20question" rel="noopener noreferrer" target="_top">
                        <i className="fas fa-envelope"></i>
                        Email</a>
                </li>
                <li>
                    <a className="contactLink" rel="noopener noreferrer" target="_blank" href="tel:+19705319665">
                        <i className="fas fa-phone-square"></i>
                        Phone</a>
                </li>
            </ul>
        </div>
    )
}
export default About