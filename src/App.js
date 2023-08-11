import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/Mycomponent';
import React from 'react';

const App = () => {


  return (
    <div className="App">
      Hello world
      <button className='btn btn-primary'>Test</button>
    </div>
  );
}

export default App;
