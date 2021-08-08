import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <div className="wrapper" id="About" >
        <h2 className="heading">About me</h2>
        <div className="container">
          <div className="about">

          <h4>Education</h4>
            <p>Bachelor of Technology in Computer Science and Engineering from Indian Institute of Technology, Kharagpur (IIT Kharagpur).<span>(2017 - 2021)</span></p>
            <p>Currently pursuing my masters in Computer Science and Engineering at IIT Kharagpur. </p>


            <h4>Work Experience</h4>
            <h5>Mastercard <span>Summer Intern (2021 Summer)(India/Pune)</span></h5>
            <ul>
              <li>Worked as a  webdeveloper and designed two pages for mastercard.</li>
              <li>Converted a part of front-end in Angular to React</li>
              <li>Collaborated with the team to learn about React, Redux, Bootstapping and testing platform Cypress.</li>
            </ul>

          </div>
        </div>
      </div>
      );
  }
}
  
  export default About;