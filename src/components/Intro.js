import React, { Component } from 'react';
import Pdf from '../images/resume.pdf'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 6
  },
  mobile: {
    breakpoint: { max: 639, min: 360 },
    items: 3
  }
};

class Intro extends Component {
  render() {
    return (
      <>
      <div className="intro" id="Intro">
        <div className="center">
          <div className="text">
            <h1>Welcome!!!</h1>
            <h1>I'm Karanam Tejendhar</h1>
            <h1>Software developer</h1>
            <p>A self-motivated developer, who enjoys bulding user-friendly web apps and websites.<br></br>
              I love to work with inspiring, creative people
            </p>
            <div className="download">
              <a href = {Pdf} target = "_blank" rel="noopener noreferrer">
              DOWNLOAD RESUME
              </a>
            </div>
          </div>
          <div className="one">
            <div className="circle">
            </div>
            <div className="circle1">
            </div>
            <div className="circle2">
            </div>
            <div className="circle3">
            </div>
            <div className="circle4">
            </div>
          </div>
          {/* <svg>
            <defs>
              <filter id="wave">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="wave" />
                <feComposite in="SourceGraphic" in2="wave" operator="atop"/>  
              </filter>
            </defs>
          </svg>
           */}
        </div>
      </div>
      <div className="skill">
        <h2 className="heading">SKILLS</h2>
        <div className="center">
        <div className="icons">
        <Carousel
          centerMode={false}
          swipeable={true}
          draggable={true}
          // showDots={true}
          responsive={responsive}
          ssr={true} 
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["desktop"]}
          showDots={false}
          renderButtonGroupOutside={true}
        >   
            <div>
              <span>
                <svg width="65" viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
                <em>React</em>
              </span>
            </div>
            <div>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="221.807 89.47 440 621.061" enableBackground="new 221.807 89.47 440 621.061"><filter id="a" width="150%" height="150%" x="-5%" y="-5%"><feFlood floodColor="#000" result="floodFill" floodOpacity=".5"/><feComposite in="floodFill" in2="SourceAlpha" operator="in" result="coloredAlpha"/><feGaussianBlur in="coloredAlpha" result="blur" stdDeviation="8"/><feComposite in="blur" in2="SourceGraphic" operator="out" result="maskedOffsetBlur"/><feMerge><feMergeNode in="maskedOffsetBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><g filter="url(#a)"><path fill="#e44d26" d="M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z"/><path fill="#f16529" d="M441.807 672.348l145.596-40.367 34.258-383.735H441.807z"/><path fill="#ebebeb" d="M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zM441.807 557.876l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z"/><path fill="#fff" d="M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zM441.617 303.33v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z"/></g></svg>
                <em>HTML</em>
              </span>
            </div>
            <div>
              <span>
                <svg width="50" enableBackground="new 0 0 1771 2499.8" viewBox="0 0 1771 2499.8" xmlns="http://www.w3.org/2000/svg"><path d="m161.2 2299.1-161.2-1807.7h1771l-161.4 1807.4-725.2 201z" fill="#1572b6"/><path d="m885.5 2346.2 586-162.5 137.8-1544.5h-723.8z" fill="#33a9dc"/><path d="m885.5 1294.1h293.4l20.2-227h-313.6v-221.6h556l-5.3 59.5-54.5 611h-496.2z" fill="#fff"/><path d="m886.7 1869.9h-1l-246.9-66.7-15.8-176.8h-222.4l31.1 348.1 454.2 126.4h1.3v-231z" fill="#ebebeb"/><path d="m1160.1 1506.3-26.7 296.7-247.3 66.7v231l454.5-126 3.3-37.5 38.6-431h-222.4z" fill="#fff"/><path d="m886.3 845.5v221.7h-535.4l-4.6-49.8-10.1-112.4-5.3-59.5zm-.8 448.6v221.7h-244.1l-4.3-49.8-10.1-112.4-5.3-59.5h263.7z" fill="#ebebeb"/></svg>
                <em>CSS</em>
              </span>
            </div>
            <div>
              <span>
                <svg width="50" enableBackground="new 0 0 1776 2500" viewBox="0 0 1776 2500" xmlns="http://www.w3.org/2000/svg"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329"/><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22"/><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff"/><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb"/></svg>
                <em>JavaScript</em>
              </span>
            </div>
            <div>
              <span>
              <svg width="65px" viewBox="0 0 400 300" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path fill="#007acc" d="M0 200V0h400v400H0"/><path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/></svg>
                <em>Type Script</em>
              </span>
            </div>
            <div>
              <span className="npm">
              <svg width="80" height="50" viewBox="0 0 256 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z" fill="#CB3837"/><path d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z" fill="#FFF"/></svg>
                <em>NPM</em>
              </span>
            </div>
            <div>
              <span>
              <svg width="70" height="50" viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC"/></svg>
                <em>Redux</em>
              </span>
            </div>
            <div>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1023 1635 c-197 -44 -353 -196 -398 -386 -43 -182 9 -365 139 -494 224 -222 581 -202 778 43 21 26 38 52 38 57 0 6 -50 38 -110 73 l-109 63 -37 -41 c-50 -55 -105 -82 -180 -88 -149 -12 -277 109 -276 262 0 74 18 120 68 176 104 115 263 119 377 9 l51 -49 95 55 c137 78 127 68 103 107 -30 49 -121 132 -172 158 -119 61 -254 81 -367 55z"/></g></svg>
              <em>c</em>
              </span>
            </div>
            <div>
              <span>
              <svg  xmlns="http://www.w3.org/2000/svg" width="80" height="50" viewBox="0 0 980.000000 646.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,646.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M2515 6453 c-403 -25 -704 -99 -1020 -253 -1042 -506 -1577 -1734 -1485 -3410 49 -891 244 -1538 609 -2015 69 -91 236 -260 326 -330 272 -213 583 -344 954 -405 213 -34 445 -44 773 -31 583 22 957 71 1461 192 l127 31 0 659 0 659 -228 0 -228 0 -18 -58 c-64 -204 -202 -503 -294 -632 -109 -154 -269 -287 -423 -351 -153 -63 -365 -99 -586 -99 -879 0 -1385 727 -1520 2180 -22 236 -25 981 -5 1195 47 501 148 929 301 1275 309 696 836 1045 1483 981 441 -43 712 -242 917 -672 54 -113 141 -351 141 -385 0 -12 40 -14 230 -14 l230 0 0 638 0 639 -82 21 c-268 70 -545 122 -805 152 -257 29 -668 45 -858 33z"/><path d="M5480 3830 l0 -460 -450 0 -450 0 0 -170 0 -170 450 0 450 0 0 -465 0 -465 178 2 177 3 3 463 2 462 450 0 450 0 0 170 0 170 -450 0 -450 0 0 460 0 460 -180 0 -180 0 0 -460z"/><path d="M8540 3830 l0 -460 -450 0 -450 0 0 -170 0 -170 450 0 450 0 0 -465 0 -465 178 2 177 3 3 463 2 462 450 0 450 0 0 170 0 170 -450 0 -450 0 0 460 0 460 -180 0 -180 0 0 -460z"/></g></svg>
              <em>c++</em>
              </span>
            </div>
            <div>
              <span>
                <svg width="65" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g className="darkmodeforgit" fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
                <em>Github</em>
              </span>
            </div>
          </Carousel>
          </div>
        </div>
      </div>
      </>
    );
  }
}
  
  export default Intro;


  //https://www.npmjs.com/package/react-multi-carousel
  //https://w3js.com/react-multi-carousel
  // https://www.csscodelab.com/css-circle-menu-with-wave-animation/