import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards({cities, onClose}) {
 
  if(cities){
    return (
      <div className={s.cards}>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
            temp={c.temp}
            
          /> )}
      </div>
    );
  } else {
    return(
      <div className={s.cards}>Sin ciudades esta aca adentro</div>
    )
  }
}