import React from 'react';
import './App.css';
import BinarySearch from './components/BinarySearch';
import Visualisation from './components/Visualisation';

const App = () => {
  return (
    <div>
      <h1>Binary Search App</h1>
      <BinarySearch />
      <Visualisation/>
    </div>
  );
};

export default App;
