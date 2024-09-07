import { totalPoint } from "../utils/helper/calculatePoints";
const Rewards = ({ data }) => {
  return (
    <div className="rewards">
      <h1 data-testid="reward-header">
        Total Rewards for each customer for last three months.
      </h1>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((customer, idx) => {
            const totalPoints = totalPoint(customer);
            return (
              <tr key={idx}>
                <td>{customer.customerName}</td>
                <td>{totalPoints}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Rewards;
