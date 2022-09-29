import React, { Fragment, useState } from "react";
import s from './Contact.module.css';

export default function Contact() {
    const [input, setInput] = useState({
        name: '',
        lastname: '',
        email: '',
        comments: ''

    });

    const [error, setError] = useState(false);

    const { name, lastname, email, comments } = input;

    const actualizarState = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    };

   const submitContact = e =>{
        e.preventDefault();
        if (name.trim()==='' || lastname.trim() === '' || 
        email.trim() ==='' || comments.trim()===''){
            
            setError(true);
            return;
        }
        setError(false);

        setInput ({
            name: '',
            lastname: '',
            email: '',
            comments: ''
        })
        console.log (error)
    } 
 

  
   

    return (
        <Fragment>
            <div className={s.container} >
                
            {error ? <p  className={s.error}>Todos los campos son obligatorios.</p>  : <p  >El formulario se envio correctamente</p>};
                <form onSubmit={submitContact}>
                    <div className={s.tittle}>Contact</div>
                    <span className={s.label}>Name</span>
                    <input
                        type="text"
                        name='name'
                        className='form-group row'
                        placeholder=" Name.."
                        onChange={actualizarState}
                        value={name}

                    />

                    <span className={s.label}>Last Name</span>
                    <input
                        type="text"
                        name='lastname'
                        className='form-group row'
                        placeholder=" Last Name.."
                        onChange={actualizarState}
                        value={lastname}

                    />
                    <span className={s.label}>Email</span>
                    <input
                        type="text"
                        name='email'
                        className='form-group row'
                        placeholder=" @..."
                        onChange={actualizarState}
                        value={email}

                    />
                    <span className={s.label}>Comments</span>
                    <textarea

                        className='form-group row'
                        name="comments"
                        placeholder=" Comments...."
                        onChange={actualizarState}
                        value={comments}
                    />
                    <button
                        className={s.btnsubmit}
                        type="submit">
                        Send Comments
                    </button>
                </form>
            </div>
        </Fragment>

    )


}