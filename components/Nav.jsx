import React from "react";
import s from './Nav.module.css';
import {  Link } from 'react-router-dom'; 


export default function Nav () {

    return (
        <div className={s.nav}>
            <Link to='/'><p>Home</p></Link>
            <Link to='/About'><p>About</p></Link>
            <Link to='/Contact'><p>Contact</p></Link>
            {/* <Link to='/Register'><p>Register</p></Link>
            <Link to='/Pruebaboos'><p>prueba</p></Link> */}

            

           
        
      

        </div>


    );
}