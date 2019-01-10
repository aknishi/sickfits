import formatMoney from '../lib/formatMoney';

describe('formatMoney function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(40)).toEqual('$0.40');
  })
  it('leaves cents off for whole dollars', () => {
    expect(formatMoney(2400)).toEqual('$24');
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(30000000)).toEqual('$300,000');
  })
  it('works with whole and fractional dollars', () => {
    expect(formatMoney(1123)).toEqual('$11.23');
    expect(formatMoney(104)).toEqual('$1.04');
    expect(formatMoney(12312344)).toEqual('$123,123.44');
  })
});