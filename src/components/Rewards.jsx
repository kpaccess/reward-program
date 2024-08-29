import { totalPoint } from "../utils/calculatePoints";
const Rewards = ({ data }) => {
  return (
    <div className="rewards">
      <h1>Total Rewards for each customer for last three months.</h1>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => {
            const totalPoints = totalPoint(customer);
            return (
              <tr>
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
