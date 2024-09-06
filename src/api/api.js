export const fetchTransactions = async () => {
  const response = await fetch("../../data/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch transaction");
  }

  return response.json();
};
