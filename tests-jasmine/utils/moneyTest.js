import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formeteCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('it round up to the closest currency', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('the code works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
});