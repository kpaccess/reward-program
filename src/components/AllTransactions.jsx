import PropTypes from "prop-types";
import { calculatePoints } from "../utils/helper/calculatePoints";
import { getYear, getMonth } from "../utils/helper/getDates";

const AllTransactions = ({ data }) => {
  return (
    <div className="all-transactions">
      <h1>All Transactions</h1>
      <table>
        <thead>
          <tr>
            <th data-testid="customer-name">Customer Name</th>
            <th data-testid="customer-id">Customer Id</th>
            <th data-testid="year">Year</th>
            <th data-testid="month">Month</th>
            <th data-testid="transaction-id">Transaction Id</th>
            <th data-testid="amount">Amount</th>
            <th data-testid="points">Points</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((customer) => {
              return customer.transactions.map((transaction, index) => (
                <tr key={`${customer.customerName}-${index}`}>
                  {index === 0 && (
                    <>
                      <td rowSpan={customer.transactions.length}>
                        {customer.customerName}
                      </td>
                      <td rowSpan={customer.transactions.length}>
                        {customer?.customerId}
                      </td>
                    </>
                  )}
                  <td>{getYear(transaction.date)}</td>
                  <td>{getMonth(transaction.date)}</td>

                  <td>{transaction.transactionId}</td>
                  <td>${transaction.amount.toFixed(2)}</td>
                  <td>{calculatePoints(transaction.amount)}</td>
                </tr>
              ));
            })}
        </tbody>
      </table>
    </div>
  );
};

AllTransactions.propTypes = {
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

export default AllTransactions;
