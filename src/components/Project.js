import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { DATA }  from './Data';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Project() {
  const [items,] = useState(DATA);


  return (
    <div className="wrapper" id="Project">
      <h2 className="heading">Projects</h2>
      <div className="itemContainer">
          {items.map((item) => (
            <div 
              data-aos="fade-up"
              data-aos-offset="180"
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              // data-aos-anchor-placement="top-center"
              className="items"
            >
              {/* <Link to={`/Project/${item.id}`}> */}
                <a className="linkWrapper" href="/">
                <ul>
                    <li className="itemname">{item.name}</li>
                    <li className="listStyle">
                      {item.skill.map((list) => (
                      <span>{list}</span>
                      ))}
                    </li>
                    <div className="desclist">
                      {item.desc1 ? (
                      <li>{item.desc1}</li>
                      ) : ( null
                      )}
                        {item.desc2.map((li) => (
                        <li>{li}</li>
                        ))}
                    </div>
                    <li className="demobtnwrap">
                      {item.href ? (<a className="demobtn" href={item.href} target="_blank" rel="noopener noreferrer">Live Demo</a>)
                    : (null)  
                    }
                      <a className="demobtn" href={item.repo} target="_blank" rel="noopener noreferrer">Github Repo</a>
                    </li>
                  </ul>

                  <div 
                    className="tPic"
                    data-aos="zoom-in-up"
                    data-aos-delay="50"
                    data-aos-duration="800"
                  >
                    <img title={item.imgtitle} src={item.src} alt={item.alt} />
                  </div>
                  
                </a>
              {/* </Link> */}
          </div>
        ))}
        </div>
      </div>
    );
  }

  //https://github.com/michalsnik/aos
