// import { useState } from 'react'
// import Form from "./components/Form/form";

import "./App.css";

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const username = formData.get("username");
    console.log("username", username);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
