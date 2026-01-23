// import { useEffect, useState } from "react";

// export default function Timer() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     //   1. Зберігаємо індетифікатор інтервалу. в змінну
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//       console.log(`Interval - ${Date.now()}`);
//     }, 1000);

//     return () => {
//       //   2. Видаляємо інтервал з його id
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <p>TimeBox - {time.toLocaleTimeString()}</p>;
// }
