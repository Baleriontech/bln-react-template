import Decimal from 'decimal.js'

Decimal.set({
  rounding: Decimal.ROUND_HALF_EVEN, // Banker Rounding
});

export { Decimal as PriceDecimal }
