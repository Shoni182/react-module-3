// import { useEffect, useState } from "react";
// import axios from "axios";

//: ПОбачні ефекти
// 1 завантажився app далі ініціалізував стан та намалював розмітку
// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   // 2 виконується ф-я ефекта та запускається HTTP запит
//   useEffect(() => {
//     console.log("Effect Ran! ");
//     async function fetchCharacter() {
//       // Сюди добавляємо try catch а також індикатор завантаження
//       const response = await axios.get(
//         `https://swapi.info/api/people/${count}`,
//       );
//       // 3 Відбулося оновлення стану person за допомогою ф-ї setPerson
//       setPerson(response.data);
//     }
//     fetchCharacter();
//   }, [count]); // Порожній масив залежностей ==> далі добавили count тоді він знає від чого залежить
//   // це може бути стан, пропсти, або будь які локальні змінні з тіла компонена. Обовʼязково добавляти їх у масив залежностей

//   // 4 після оновленя стану ф-я App була викликана оновився інтерфейс але
//   // ефект знову НЕ викликався, це завдяки порожньому масиву залежностей
//   console.log("App rendered ");

//   return (
//     <>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// : Суворий режим

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see this message only once");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// }

// : Очищення Ефектів приклад проблеми
// import { useState } from "react";
// import Timer from "./Timer";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "hide timer" : "Show timer"}
//       </button>
//       {isOpen && <Timer />}
//     </>
//   );
// }

// : Функція очищення

// import { useEffect, useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Effect ran for: ${count}`);
//     // Повертаємо функцію очищення
//     return () => {
//       console.log(`Clean up for ${count}`);
//     };
//   }, [count]);

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//     </>
//   );
// }

// : Очищення Ефектів приклад випраалення в таймері

// import { useState } from "react";
// import Timer from "./Timer";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "hide timer" : "Show timer"}
//       </button>
//       {isOpen && <Timer />}
//     </>
//   );
// }

// : Модальне Вікно
import Modal from "./components/Modal/Modal";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <h1>Main content of the page</h1>
      <button onClick={openModal}></button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is some content inside the modal</p> */
        </Modal>
      )}
    </div>
  );
}
