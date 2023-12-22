import React from 'react';
import BinarySearch from './components/BinarySearch';
import './App.css';
import Visualisation from './components/Visualisation';

const App = () => {
  return (
    <div>
      <h1>Binary Search App</h1><br/>
      <BinarySearch /><br/><br/>
      <Visualisation/>
    </div>
  );
};

export default App;
