import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.divcontainer}>
      <div>
        <span className={s.spanclosebutton}  ><button className={s.closebutton}  onClick={props.onClose} >X</button></span>
        <span className={s.title}>
        <Link className={s.link} to={`/ciudad/${props.id}`} >
          {props.name}
          </Link>
          </span>
          
      </div>
      <div className={s.tempactual}><span>{props.temp} °C</span></div>
      <div className={s.divcontainerinf}>
        <div >
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div >
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <div >
          <p><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} /></p>
        </div>
      </div>
    </div>
  )
};