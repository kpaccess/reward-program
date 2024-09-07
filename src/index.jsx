import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import App from "./components/App.jsx";
import { fetchTransactions } from "./api/api.js";
import { ErrorFallback } from "./utils/helper/ErrorFallback.jsx";

const Driver = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchTransactions();
        setData(response);
        setIsLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <ErrorBoundary fallback={() => ErrorFallback(error)}>
      <App data={data} loading={isLoading} error={error} />
    </ErrorBoundary>
  );
};
export default Driver;
