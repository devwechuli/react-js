module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "192fdbacc329e2a27a6e2564c0c5c480c453cb09ff712a874378387d2d144b28",
  SECRET:
    process.env.SECRET ||
    "86b2b2ac40faab2b94538a1258894958e5cc0943408923b658ee6f515f8d8f3c",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
