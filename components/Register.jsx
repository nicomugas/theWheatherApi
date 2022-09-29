import React, { useState } from "react";

import s from './Register.module.css'


export default function Register() {

    const [input, setInput] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        mail: ''

    });

    const { nombre, apellido, telefono, mail } = input;

    const actualizarInput = e => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const registrar = e => {
        e.preventDefault();
        alert('hola')

    }

    return (

        <div className={s.containerform}>
            <form onSubmit={registrar}
            class="needs-validation" novalidate
            >
                <div>
                    <label for="validationCustom01" class="form-label">Nombre:</label>
                    <input type='text' name='nombre' id='validationCustom01' placeholder="Nombre..."
                         class="form-control"
                        onChange={actualizarInput}
                        value={nombre}
                        required
                    ></input>
                </div>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type='text' name='apellido' placeholder="Apellido..."
                        onChange={actualizarInput}
                        value={apellido}
                        required
                    ></input>
                </div>
                <div>
                    <label>Telefono:</label>
                    <input type='text' name='telefono' placeholder="Telefono..."
                        onChange={actualizarInput}
                        value={telefono}
                        required
                    ></input>
                </div>
                <div>
                    <label>E  -  Mail: </label>
                    <input type='text' name='mail' placeholder="mail..."
                        onChange={actualizarInput}
                        value={mail}
                        required
                    ></input>
                </div>
                <div>
                    <button type='submit'>Registrarme</button>
                </div>
            </form>

        </div>


    )

}