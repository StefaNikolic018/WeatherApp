import {
  boundaryColor,
  coldFallbackColor,
  colorSections,
  hotFallbackColor,
} from '../config/colors';
import { IcolorSection } from '../interfaces/colors';
import { sectionColor } from './sectionColor';

export const calculateColors = (value: number) => {
  const colorSection: IcolorSection | undefined = colorSections.find(
    (section) => section.start <= value && section.end >= value
  );

  switch (value) {
    case -40:
      return coldFallbackColor;
    case 0:
      return boundaryColor(colorSection);
    case 20:
      return boundaryColor(colorSection);
    case 40:
      return hotFallbackColor;
    default:
      return sectionColor(
        colorSection?.firstColor,
        colorSection?.secondColor,
        colorSection?.thirdColor,
        value
      );
  }
};
