import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { shake } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './../App.css';


const shakeAnimation = keyframes`${shake}`;
const NameBounce = styled.div`
animation: 5s ${shakeAnimation};
`; 

const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}
class Nav extends Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
      handleScroll = () => {
        if (window.scrollY > 490) {
          document.querySelector(".nav").className = "nav scroll";
        } else {
          document.querySelector(".nav").className = "nav";
        }
      };
    render() {
    return (
    <nav className="nav">
        <div className="nav_wrapper">
            <div className="logo">
                <NameBounce>
                    <NavLink to="/Home">
                        <span>Karanam</span><br></br>
                        <span>Tejendhar</span>
                    </NavLink>
                </NameBounce>
            </div>
            <ul className="router menu menu_wrap">
                <li>
                    <NavLink 
                        to="#Intro" 
                        className="menu_item" 
                        activeClassName="selected" 
                        smooth
                        isActive={checkActive}
                    >
                        <span className="menu_item_name">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="#Project" 
                        className="menu_item"
                        activeClassName="selected"
                        smooth
                    >
                    <span className="menu_item_name">Project</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="#About" 
                        className="menu_item" 
                        activeClassName="selected" 
                        smooth
                        isActive={checkActive}
                    >
                        <span className="menu_item_name">About</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
            }
}

export default Nav