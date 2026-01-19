import OrderForm from "./components/OrderForm/OrderForm";
import "./App.css";

function App() {
  const handleOrder = (data: string) => {
    console.log("Order recieved from:", data);
    // можна зберегти повідомлення, викликати API, показати повідомлення тощо
  };

  return (
    <>
      <h1>Ваше Замовлення</h1>
      <OrderForm onSubmit={handleOrder} />
    </>
  );
}

export default App;
