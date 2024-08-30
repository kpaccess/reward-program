import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import App from "./components/App.jsx";
import { fetchTransactions } from "./api/api.js";
import { ErrorFallback } from "./utils/ErrorFallback.jsx";

const Driver = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchTransactions();
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <ErrorBoundary fallback={() => ErrorFallback(error)}>
      <App data={data} loading={loading} error={error} />
    </ErrorBoundary>
  );
};
export default Driver;
