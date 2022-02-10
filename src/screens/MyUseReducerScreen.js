import React, { useReducer, useRef } from 'react';
import { useInput } from '../components/useInput';

const initialState = {
  message: 'Hi',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'yell':
      return {
        message: `HEY!, I just said ${state.message}`,
      };
    case 'whisper':
      return {
        message: `excuse me I just said ${state.message}`,
      };
    default:
      return;
  }
};

const MyUseReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = '';
    color.current.value = '';
  };

  const submit2 = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <>
      <div className="app-wrapper">
        <h1>useReducer</h1>
        <p>Message: {state.message}</p>
        <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
        <button onClick={() => dispatch({ type: 'whisper' })}>Whisper</button>
        <br />
        <br />
        <br />
        <a href="/">
          <button>Home</button>
        </a>
        <hr />

        <div>
          <h1>useRef</h1>
          <form onSubmit={submit}>
            <input ref={sound} type="text" placeholder="Sound..." />
            <input ref={color} type="color" />
            <button>ADD</button>
          </form>
        </div>
      </div>

      <div className="app-wrapper">
        <div>
        <h1>Custom Hook</h1>
          <form onSubmit={submit2}>
            <input {...titleProps} type="text" placeholder="Sound..." />
            <input {...colorProps} type="color" />
            <button>ADD</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyUseReducerScreen;
