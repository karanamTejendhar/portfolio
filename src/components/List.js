import React, { useState, useEffect } from 'react';
import { DATA }  from './Data';


const List = ({match}) => {
  let id = match.params.id -1;

  const [item,setItem] = useState(DATA[id]);

  return (
    <div className="main">
      <div className="wrapper">
      <h1>{item.name}</h1>
      <div className="listWrapper">
        <div className="imgContainer">
          <img title={item.imgtitle} src={item.src} alt={item.alt} className="prjImg" />
        </div>
        <ul className="desc">
          <li className="name">{item.name}</li>
          <li><a href={item.href} target="_blank">{item.href}</a></li>
          <li className="listStyle">
            {item.skill.map((list) => (
              <span>{list}</span>
            ))}
          </li>
          <li>{item.period}</li>
        </ul>
      </div>
      <p className="wdesc">{item.desc1}</p>
      <div className="wdesc">
        <ul>
        {item.desc2.map((lists) => (
            <li>{lists}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  )
}
export default List;