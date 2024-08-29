import "../styles/App.css";
import AllTransactions from "./AllTransactions";
import MonthlyTransactions from "./MonthlyTransactions";
import Rewards from "./Rewards";

const App = ({ data, loading, error }) => {
  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p data-testid="error">Error loading data</p>;

  return (
    <div>
      <MonthlyTransactions data={data} />
      <AllTransactions data={data} />
      <Rewards data={data} />
    </div>
  );
};
export default App;
