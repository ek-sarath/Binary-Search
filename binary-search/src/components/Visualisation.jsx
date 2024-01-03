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
      <div className='result'>{ result === -1 ? <div>Not Found</div> : <div>Element found at {result+1}</div>}
       </div>
    </div>
  );
};

export default Visualisation;