// import { useState } from 'react'
// import Form from "./components/Form/form";

import "./App.css";

function App() {
  // тим FormData тут вбудований тому імпортувати непотрібно нічого
  const handleSubmit = (formData: FormData) => {
    // для отримання значення метод formData.get("name поля")
    // formData.get() повертає null тому пишемо as string тип
    const username = formData.get("username") as string;
    console.log("name", username);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="username" defaultValue="John" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
