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
        months.add(date.getMonth() + 1);
      });
    });
    return [...months].sort((a, b) => a - b);
  };

  // find three consecutive months from the sorted months
  const findConsecutiveMonths = (months) => {
    for (let i = 0; i < months.length - 3; i++) {
      if (months[i + 1] === months[i] + 1 && months[i + 2] === months[i] + 2) {
        return [months[i], months[i + 1], months[i + 2]];
      }
    }
    return [];
  };

  const filterTransactionByConsecutiveMonths = (data, consecutiveMonths) => {
    return data.map((customer) => {
      const filteredTransaction = customer.transactions.filter(
        (transaction) => {
          const transactionDate = new Date(transaction.date);
          const transactionMonth = transactionDate.getMonth() + 1;
          return consecutiveMonths.includes(transactionMonth);
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
    consecutiveMonths
  );

  console.log(" filtered Data ", filteredData);

  return filteredData;
};
