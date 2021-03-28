import './App.css';
import React, { useState } from 'react';
import { sendEmail } from './api/index';

function App() {
  const [state, setState] = useState({
    email: '',
    asunto: '',
    mensaje: '',
  });

  function setValues(e) {
    return setState({ ...state, [e.target.name]: e.target.value });
  }

  function onSubmit (e) {
    e.preventDefault();
    sendEmail(state);
  }
  return (
    <div className='App'>
      {console.log(state)}
      <form className='formulario' onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            className='form-control'
            onChange={setValues}
          />
        </div>
        <div>
          <label>Asunto:</label>
          <input
            type='text'
            name='asunto'
            className='form-control'
            onChange={setValues}
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            rows='8'
            name='mensaje'
            className='form-control'
            onChange={setValues}
          ></textarea>
        </div>
        <div>
          <br />
          <button>Enviar e-mail</button>
        </div>
      </form>
    </div>
  );
}

export default App;
