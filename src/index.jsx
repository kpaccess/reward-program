import { useState, useEffect } from "react";
import App from "./components/App.jsx";
import { fetchTransactions } from "./api/api.js";

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
        setError(err);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return <App data={data} loading={loading} error={error} />;
};
export default Driver;
