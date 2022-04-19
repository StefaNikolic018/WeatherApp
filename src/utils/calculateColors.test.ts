import { calculateColors } from './calculateColors';
import '@testing-library/jest-dom';


describe('Testing util function for calculating colors based on temperature', () => {
  const standardTemperatures = [-40, -20, 0, 20, 40];

  const coldFallbackColor = 'linear-gradient(135deg,  rgba(18,55,134,1) 50%, rgba(11,31,73,1) 100%)';
  const hotFallbackColor = 'linear-gradient(135deg,  rgba(254,147,85,1) 50%, rgba(186,70,3,1) 100%)';
  const minus20 = 'linear-gradient(135deg, rgba(25,158,233,1) 50%,rgba(153,219,254,1) 100%)';
  const zero = 'linear-gradient(135deg, rgba(153,219,254,1) 50%,rgba(252,214,114,1) 100%)';
  const plus20 = 'linear-gradient(135deg, rgba(252,214,114,1) 50%,rgba(254,147,85,1) 100%)';
  const plus15 = 'linear-gradient(135deg, rgba(227,215,149,1) 75%,rgba(254,164,92,1) 100%)';


  it('testing for -40 degrees celsius', () => {
    expect(calculateColors(standardTemperatures[0])).toBe(coldFallbackColor);
  });
  it('testing for -20 degrees celsius', () => {
    expect(calculateColors(standardTemperatures[1])).toBe(minus20);
  });
  it('testing for 0 degrees celsius', () => {
    expect(calculateColors(standardTemperatures[2])).toBe(zero);
  });
  it('testing for 20 degrees celsius', () => {
    expect(calculateColors(standardTemperatures[3])).toBe(plus20);
  });
  it('testing for 40 degrees celsius', () => {
    expect(calculateColors(standardTemperatures[4])).toBe(hotFallbackColor);
  });
  it('testing with random value and also testing sectionColor function', () => {
    expect(calculateColors(15)).toBe(plus15);
  });
});