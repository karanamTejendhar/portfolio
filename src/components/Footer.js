import React, { Component } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class Footer extends Component {
  render() {
    return (
      <div className="main">
        <div className="footer">
          <div className="center">
            <div className="copyright">
              <span><a href="karanamtejendhar@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon fontSize="large" /></a></span>
              <span><a href="https://github.com/karanamTejendhar" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ fontSize: 30 }} /></a></span>
              <span><a href="https://www.linkedin.com/in/karanam-tejendhar-a7779a16b/" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="large" /></a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Footer;
