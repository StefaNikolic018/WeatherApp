import { colorObject } from '../interfaces/colors';

const finalArray = (colorArray: number[]) => {
  const newArray = colorArray.map((c) => {
    if (c > 255) {
      return 255;
    } else {
      return Math.round(c);
    }
  });

  return newArray;
};

export const sectionColor = (
  firstC: colorObject | undefined,
  secondC: colorObject | undefined,
  thirdC: colorObject | undefined,
  value: number
) => {
  const location = (value * 5) / 100;

  const firstColor = [];
  firstColor[0] = firstC!.r + location * (secondC!.r - firstC!.r);
  firstColor[1] = firstC!.g + location * (secondC!.g - firstC!.g);
  firstColor[2] = firstC!.b + location * (secondC!.b - firstC!.b);
  const first = finalArray(firstColor);

  const secondColor = [];
  secondColor[0] = secondC!.r + location * (thirdC!.r - secondC!.r);
  secondColor[1] = secondC!.g + location * (thirdC!.g - secondC!.g);
  secondColor[2] = secondC!.b + location * (thirdC!.b - secondC!.b);
  const second = finalArray(secondColor);

  const intesity = location * 100;

  return `linear-gradient(135deg, rgba(${first[0]},${first[1]},${first[2]},1) ${intesity}%,rgba(${second[0]},${second[1]},${second[2]},1) 100%)`;
};
