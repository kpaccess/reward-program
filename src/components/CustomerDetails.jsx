import { useState } from "react";
import { calculatePoints } from "../utils/calculatePoints";

const CustomerDetails = ({ customer }) => {
  const { transactions, customerName } = customer;
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  const pointsPerMonth = transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.date);

    const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
    const points = calculatePoints(transaction.amount);

    if (!acc[monthYear]) {
      acc[monthYear] = 0;
    }
    acc[monthYear] += points;
    return acc;
  }, {});

  const totalPoints = Object.values(pointsPerMonth).reduce(
    (acc, points) => acc + points,
    0
  );

  return (
    <div>
      <h3 data-testid="customer-name" onClick={toggleDetails}>
        {customerName}
      </h3>
      {showDetails && (
        <div data-testid="customer-details">
          <ul>
            {Object.entries(pointsPerMonth).map(([month, points]) => {
              return (
                <li key={month}>
                  {month} : {points} points
                </li>
              );
            })}
          </ul>
          <p className="total-points">Total points: {totalPoints}</p>
        </div>
      )}
    </div>
  );
};
export default CustomerDetails;
