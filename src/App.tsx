import OrderForm from "./components/OrderForm/OrderForm";
import SearchForm from "./components/SearchForm/SearchForm";
import type { Article } from "./types/article";
import ArticleList from "./components/ArticleList/ArticleList";
import { fetchArticles } from "./services/articleService";
import { useState } from "react";
import "./App.css";

export default function App() {
  // 1. Оголошуємо і типізуємо стан
  // useState<Article[]>([]) це типове початкове значення для масиву
  const [articles, setArticles] = useState<Article[]>([]);
  // оголошуємо і типізуємо процес лоадінгу
  const [isLoading, setIsLoading] = useState(false);
  // оголошуємо і типізуємо процес помилки
  const [isError, setIsError] = useState(false);

  // асинхронна функція яка дістає топік як за аргумент
  const handleSearch = async (topic: string) => {
    // трай при успішному виконанні
    try {
      setIsLoading(true);
      setIsError(false);
      // тут виконуємо HTTP-запит
      const data = await fetchArticles(topic);
      setIsLoading(false);
      setArticles(data);

      // кетч при помилці
    } catch {
      setIsError(true);
      // файналі для того щоб код виконався в лбюбому випадку
      // в даному випадку виключаємо лоадер
    } finally {
      setIsLoading(false);
    }
  };
  const handleOrder = (data: string) => {
    console.log("Order recieved from:", data);
    // можна зберегти повідомлення, викликати API, показати повідомлення тощо
  };

  return (
    <>
      <h2>Ваше Замовлення</h2>
      {/* Тут можна поставити модалку наприклад  */}
      <OrderForm onSubmit={handleOrder} />
      <hr></hr>
      <h2>Пошук</h2>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Someting went wrong, please try againt</p>}
      {/* Тут якщо довжина масиву менша за 0 то НЕ буде виводитись артікл  */}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
