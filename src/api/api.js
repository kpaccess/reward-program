export const fetchTransactions = async () => {
  const response = await fetch("../../data/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch transaction");
  }

  const data = await response.json();

  // get all unique months from the transaction
  const getUniqueMonths = (data) => {
    const months = new Set();
    data.forEach((customer) => {
      customer.transactions.forEach((transaction) => {
        const date = new Date(transaction.date);
        if (date.getFullYear() === 2024) {
          months.add(date.getMonth() + 1);
        }
      });
    });
    return [...months].sort((a, b) => a - b);
  };

  // find three consecutive months from the sorted months
  const findConsecutiveMonths = (months) => {
    //it iterates through the array of months and stops two elements before the end
    // as we looking for 3 consecutive months

    for (let i = 0; i < months.length - 2; i++) {
      // months[i + 1] === months[i] checks if the next month is exactly one more then the current month
      // months[i + 2] === months[i] + 2 checks if the month after that is exactly two more then the current month
      if (months[i + 1] === months[i] + 1 && months[i + 2] === months[i] + 2) {
        return [months[i], months[i + 1], months[i + 2]];
      }
    }

    return [];
  };

  const filterTransactionByConsecutiveMonths = (
    data,
    consecutiveMonths,
    year
  ) => {
    return data.map((customer) => {
      const filteredTransaction = customer.transactions.filter(
        (transaction) => {
          const transactionDate = new Date(transaction.date);
          const transactionMonth = transactionDate.getMonth() + 1;

          const transactionYear = transactionDate.getFullYear();
          return (
            consecutiveMonths.includes(transactionMonth) &&
            year === transactionYear
          );
        }
      );

      return {
        ...customer,
        transactions: filteredTransaction,
      };
    });
  };

  const uniqueMonths = getUniqueMonths(data);

  const consecutiveMonths = findConsecutiveMonths(uniqueMonths);

  const filteredData = filterTransactionByConsecutiveMonths(
    data,
    consecutiveMonths,
    2024
  );

  return filteredData;
};
