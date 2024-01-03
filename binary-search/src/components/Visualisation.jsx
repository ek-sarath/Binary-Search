import React from 'react';
import '../App.css';
import {useSelector} from 'react-redux';

const Visualisation = () => {
  const result=useSelector((state)=>state.binary.result)
  const array=useSelector((state)=>state.binary.array)
  const left=useSelector((state)=>state.binary.left)
  const right=useSelector((state)=>state.binary.right)
  return (
    <div className="Visualization">
      
      <h1>Visualisation</h1>

      <div className="Array">
        {array?.map((num, index) => (
          <div
            key={index}
            className={`ArrayElement ${index < left || index>right? 'inactive' : ''} $`}
          >
            {num}
          </div>
        ))}
      </div>

      <p>{ result === -1 ? <h4> Not Found</h4> : <h4>Element found at {result+1}</h4>}
       </p>

    </div>
  );
};

export default Visualisation;