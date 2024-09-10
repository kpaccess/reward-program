import { year } from "../constants/constant";
import {
  getUniqueMonths,
  findConsecutiveMonths,
  filterTransactionByConsecutiveMonths,
} from "../utils/helper/dataHelper";

export const fetchTransactions = async () => {
  const response = await fetch("../../data/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch transaction");
  }

  const data = await response.json();

  const uniqueMonths = getUniqueMonths(data);

  const consecutiveMonths = findConsecutiveMonths(uniqueMonths);

  const filteredData = filterTransactionByConsecutiveMonths(
    data,
    consecutiveMonths,
    year
  );

  return filteredData;
};
