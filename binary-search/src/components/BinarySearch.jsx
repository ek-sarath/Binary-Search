import React, {useState} from 'react';
import '../App.css'
import {useDispatch} from "react-redux";
import {setresult, settarget, setInputArray, setleft, setright } from '../Redux/binarySlice';

const BinarySearch = () => {
  const [userArray, setUserArray] = useState([null]);
  const [target, setTarget] = useState('');
  const [timeTaken, setTimeTaken] = useState(null);
  const dispatch=useDispatch()
  const handleInputChange=(e)=>{
  const value=e.target.value.split(',').map(Number)
  setUserArray(value)
  dispatch(setInputArray(value))
 }

  const binarySearch = async () => {
    const startTime = performance.now(); 
    let left = 0;
    dispatch(setleft(left))
    let right = userArray.length - 1;
    dispatch(setright(right))

    while (left <= right) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mid = Math.floor((left + right) / 2);
      
      if (userArray[mid] === target) {
        dispatch(setleft(mid));
        dispatch(setright(mid));
        dispatch(setresult(mid))
        const endTime = performance.now(); 
        setTimeTaken(endTime - startTime); 
        dispatch(settarget(target));
        return;
      } else if (userArray[mid] < target) {
        left = mid + 1;
        
        dispatch(setleft(left))
      } else {
        right = mid - 1;
        dispatch(setright(right))
      }
    }

    dispatch(setresult(-1))
    const endTime = performance.now(); 
    setTimeTaken (endTime - startTime); 
  };

  return (
    <div className='BinarySearch'>
      
        <label>
          Enter a sorted array :
          <input
            type="text"
            onChange= {handleInputChange}
          />
        </label><br/><br/>

        {userArray && (
          <p>
             Entered Array : <br/>{userArray.join(', ')}
         </p>
         )}<br/>

      
        <label>
        Enter a number to search :
          <input
            type="text"
            value={target}
            onChange={(e) => {
              setTarget(Number(e.target.value));
              dispatch(settarget(Number(e.target.value)));
            }}
          />
        </label><br/><br/>

      <button onClick={binarySearch}>Search Number</button> <br/>

      {timeTaken !== null && <p>Search Time : {timeTaken.toFixed(3)} ms</p>}
    </div>
  );
};

export default BinarySearch;