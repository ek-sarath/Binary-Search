import React, { useState } from 'react';

const BinarySearchComponent = () => {
  const [inputArray, setInputArray] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [resultIndex, setResultIndex] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);

  const binarySearch = () => {
    const startTime = performance.now();

    const array = inputArray.split(',').map((item) => parseInt(item, 10))
      .sort((a, b) => a - b);

    const target = parseInt(searchValue, 10);
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (array[mid] === target) {
        setResultIndex(mid);
        const endTime = performance.now();
        setTimeTaken((endTime - startTime).toFixed(3));
        return;
      }

      if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setResultIndex(null);
    setTimeTaken(null);
  };

  return (
    <div>
      <label>
        Enter a sorted array:
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        />
      </label>
      <br/>

      {inputArray && (
        <p>
          Entered Array: [{inputArray}]
        </p>
      )}<br/>


      <label>
        Enter a number to search:
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <br/><br/>
      <button onClick={binarySearch}>Search Number</button>
      <p>
        {resultIndex !== null
          ? `Element found at index ${resultIndex}`
          : 'Element not found'}
      </p>
      <p>Search Time : { timeTaken} ms</p>
    </div>
  );
};

export default BinarySearchComponent;





















// import React, { useState } from 'react';

// const BinarySearchComponent = () => {
//   const [inputArray, setInputArray] = useState('');
//   const [searchValue, setSearchValue] = useState('');
//   const [resultIndex, setResultIndex] = useState(null);

//   const binarySearch = () => {
//     const array = inputArray.split(',').map((item) => parseInt(item, 10))
//       .sort((a, b) => a - b);

//     const target = parseInt(searchValue, 10);
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);

//       if (array[mid] === target) {
//         setResultIndex(mid);
//         return;
//       }

//       if (array[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }

//     setResultIndex(null);
//   };

//   return (
//     <div>
//       <label>
//         Enter a sorted array :
//         <input
//           type="text"
//           value={inputArray}
//           onChange={(e) => setInputArray(e.target.value)}
//         />
//       </label>
//       <br/>

//       {inputArray && (
//         <p>
//           Entered Array: [{inputArray}]
//         </p>
//       )}<br/>


//       <label>
//         Enter a number to search:
//         <input
//           type="text"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//         />
//       </label>
//       <br/><br/>
//       <button onClick={binarySearch}>Search Number</button>
//       <p>
//         {resultIndex !== null
//           ? `Element found at index ${resultIndex}`
//           : 'Element not found'}
//       </p>
//     </div>
//   );
// };

// export default BinarySearchComponent;
