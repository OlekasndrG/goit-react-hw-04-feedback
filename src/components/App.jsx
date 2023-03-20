import React from 'react';
import FeedbackCounter from './Feedback/FeedbackCounter';
export const App = () => {
  return (
    <div>
      <FeedbackCounter />
    </div>
  );
};
// import { useState, useEffect } from 'react';
// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [total, setTotal] = useState(0);

//   const handleIncrement = ({ target }) => {
//     const name = target.name;
//     switch (target.name) {
//       case 'good':
//         setGood(prev => prev + 1);
//         break;
//       case 'bad':
//         setBad(prev => prev + 1);
//         break;
//       case 'neutral':
//         setNeutral(prev => prev + 1);
//         break;

//       default:
//         return;
//     }
//   };
//   const handleTotal = () => {
//     return setTotal(good + bad + neutral);
//   };

//   const A = useEffect( () => {
//     setTotal(good + bad + neutral);
//   }, [good, bad, neutral]);
//   console.log(A);

//   return (
//     <>
//       <div>
//         <button type="button" onClick={handleIncrement} name="good">
//           good {good}
//         </button>
//       </div>
//       <div>
//         <button type="button" onClick={handleIncrement} name="bad">
//           bad {bad}
//         </button>
//       </div>
//       <div>
//         <button type="button" onClick={handleIncrement} name="neutral">
//           neutral {neutral}
//         </button>
//         <button type="button" onClick={handleTotal} name="total">
//           total {total}
//         </button>
//         {A > 0 && <p>sad</p>}
//       </div>
//     </>
//   );
// };
