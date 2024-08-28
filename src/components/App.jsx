import CustomerList from "./CustomerList";
import "../styles/App.css";

const App = ({ data, loading, error }) => {
  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p data-testid="error">Error loading data</p>;

  return (
    <div>
      <CustomerList data={data} />
    </div>
  );
};
export default App;
