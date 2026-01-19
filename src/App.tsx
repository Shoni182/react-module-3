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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      // тут виконуємо HTTP-запит
      const data = await fetchArticles(topic);
      setIsLoading(false);
      setArticles(data);
    } catch {
      setIsError(true);
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
      <OrderForm onSubmit={handleOrder} />
      <hr></hr>
      <h2>Пошук</h2>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {isError && <p>Someting went wrong, please try againt</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
