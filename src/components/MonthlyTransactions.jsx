import PropTypes from "prop-types";
import { calculatePoints, totalPoint } from "../utils/helper/calculatePoints";
import { getMonth, getYear } from "../utils/helper/getDates";

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
                  <th>Year</th>
                  <th>Month</th>
                  <th>Transaction Id</th>
                  <th>Amount</th>
                  <th>Points</th>
                  <th>Total Rewards</th>
                </tr>
              </thead>
              <tbody>
                {customer.transactions.map((transaction, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{getYear(transaction.date)}</td>
                      <td>{getMonth(transaction.date)}</td>
                      <td>{transaction.transactionId}</td>
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

MonthlyTransactions.propTypes = {
  customerId: PropTypes.number,
  customerName: PropTypes.string,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      date: PropTypes.data,
      transactionId: PropTypes.string,
    })
  ),
};
export default MonthlyTransactions;
