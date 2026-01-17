/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentDay = 40;
  const LONG_STRIC = 7;
  const LONG_STRIC_DISCOUNT = 50;
  const LOW_STRIC = 3;
  const LOW_STRIC_DISCOUNT = 20;

  let totalCost = 1 * days * rentDay;

  if (days >= LONG_STRIC) {
    totalCost -= LONG_STRIC_DISCOUNT;
  } else if (days >= LOW_STRIC) {
    totalCost -= LOW_STRIC_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
