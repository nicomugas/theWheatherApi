import React , {useState} from 'react';
import s from  './SearchBar.module.css'


/*export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.div}>
      <form className={s.searchBar}>
      <input className={s.input}  placeholder='ciudad...'></input>
      <input type='submit' className={s.submit}  value='Agregar' onClick='' ></input>
      </form>
    </div>
  )
  
};*/

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState('');
  
  const handleinputChange = (e) => {
    e.preventDefault();
    setCity( e.target.value);
   

  }

 

  return (
   <div className={s.div}>
    <form className={s.searchBar} onSubmit={(e) => {
      
      e.preventDefault();
      onSearch(city);
      

      
    
    }}>
      <input
        id='inbox'
        type="text"
        value = {city}
        placeholder="  Search City..."
        className={s.input}
        onChange={ (e) => {handleinputChange(e)}}
        
      />
      <input type="submit" value="Add" className={s.submit} />
    </form>
    </div>
  );
 
}

