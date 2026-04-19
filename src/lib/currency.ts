// Currency formatting helpers for Indian Rupees (INR)
// All product prices in `src/data/products.ts` are stored in rupees.

export const formatINR = (amount: number): string => {
  // Indian numbering system (e.g. 1,23,456)
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
};

export const formatINRCompact = (amount: number): string => {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return formatINR(amount);
};
