import { calculatePoints, totalPoint } from "../utils/calculatePoints";

const MonthlyTransactions = ({ data }) => {
  return (
    <div className="customers">
      <h1>Monthwise Transactions for each customer and total rewards</h1>
      {data.map((customer, index) => {
        const totalPoints = totalPoint(customer);

        return (
          <div key={index}>
            <h3>{customer.customerName}</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Points</th>
                  <th>Total Rewards</th>
                </tr>
              </thead>
              <tbody>
                {customer.transactions.map((transaction, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{transaction.date}</td>
                      <td>$ {transaction.amount}</td>
                      <td>{calculatePoints(transaction.amount)}</td>
                      {idx === 0 && (
                        <td rowSpan={customer.transactions.length}>
                          {totalPoints}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default MonthlyTransactions;
