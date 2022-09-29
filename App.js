import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact';
import Register from './components/Register';
import Pruebaboos from './components/Pruebaboos';
import Ciudad from './components/Ciudad';


function App() {

  const [cities, setCities] = useState([]); //SIEMPRE !! se inicializa con un valor, en este caso un Array vacio. HOlis

  function onSearch(ciudad) {
    //const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    const apiKey = '56afd98ecd1e98e3c7b57994bd609828';
    //fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
      
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
        
      });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <div>
        <Route
          path='/'
          render={() => <Nav />}
        />
      </div>
      <div>
        <Route
          exact
          path='/About'
          render={() => <About />}
        />
      </div>
      <div>
        <Route
          exact
          path='/'
          render={() =>  <SearchBar
            onSearch={onSearch}
          />}
        />
      </div>   


      <div>
      <Route
          exact
          path='/'
          render={() => <Cards
            cities={cities} onClose={onClose}
          />}
        />       
      </div>

      <div>
        <Route
          exact
          path='/Contact'
          render={() => <Contact />}
        />
      </div>

      <div>
        {/* <Route
          exact
          path='/Register'
          render={() => <Register />}
        /> */}
      </div>

      <div>
        {/* <Route
          exact
          path='/Pruebaboos'
          render={() => <Pruebaboos />}
        /> */}
      </div>

      <Route
          exact path='/ciudad/:ciudadId'
          render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />}
        />


    </div>
  );
}

export default App;
