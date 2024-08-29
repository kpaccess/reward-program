import { calculatePoints } from "../utils/calculatePoints";

const AllTransactions = ({ data }) => {
  return (
    <div className="all-transactions">
      <h1>All Transactions</h1>
      <table>
        <thead>
          <tr>
            <th data-testid="customer-name">Customer Name</th>
            <th data-testid="date">Date</th>
            <th data-testid="amount">Amount</th>
            <th data-testid="points">Points</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((customer) =>
            customer.transactions.map((transaction, index) => (
              <tr key={`${customer.customerName}-${index}`}>
                {index === 0 && (
                  <td rowSpan={customer.transactions.length}>
                    {customer.customerName}
                  </td>
                )}
                <td>{transaction.date}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>{calculatePoints(transaction.amount)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default AllTransactions;
