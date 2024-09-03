import { transactions } from "../data/data";

export const fetchTransactions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(transactions);
      } catch (error) {
        reject(new Error("Failed to fetch transactions"));
      }
    }, 1000);
  });
};
