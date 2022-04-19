// export const initialBackground = ' linear-gradient(320deg, rgba(254,147,85,.5) 0%, rgba(252,214,114,.5) 25%, rgba(153,219,254,.5) 50%, rgba(25,158,233,.5) 75%, rgba(18,55,134,.5) 100%)';

import { IcolorSection } from '../interfaces/colors';

export const initialBackground = ' linear-gradient(135deg, rgba(18,55,134,.5) 0%, rgba(25,158,233,.5) 25%, rgba(153,219,254,.5) 50%, rgba(252,214,114,.5) 75%, rgba(254,147,85,.5) 100%)';


export const colorSections: IcolorSection[] = [
    {
        start: -40,
        end: -21,
        firstColor: {
            r: 18,
            g: 55,
            b: 134
        },
        secondColor: {
            r: 25,
            g: 158,
            b: 233
        },
        thirdColor: {
            r: 153,
            g: 219,
            b: 254
        }
    },
    {
        start: -20,
        end: -1,
        firstColor: {
            r: 25,
            g: 158,
            b: 233
        },
        secondColor: {
            r: 153,
            g: 219,
            b: 254
        },
        thirdColor: {
            r: 252,
            g: 214,
            b: 114
        }
    },
    {
        start: 0,
        end: 19,
        firstColor: {
            r: 153,
            g: 219,
            b: 254
        },
        secondColor: {
            r: 252,
            g: 214,
            b: 114
        },
        thirdColor: {
            r: 254,
            g: 147,
            b: 85
        }
    },
    {
        start: 20,
        end: 40,
        firstColor: {
            r: 252,
            g: 214,
            b: 114
        },
        secondColor: {
            r: 254,
            g: 147,
            b: 85
        },
        thirdColor: {
            r: 255,
            g: 147,
            b: 105
        }
    }
]

export const coldFallbackColor = 'linear-gradient(135deg,  rgba(18,55,134,1) 50%, rgba(11,31,73,1) 100%)';

export const hotFallbackColor = 'linear-gradient(135deg,  rgba(254,147,85,1) 50%, rgba(186,70,3,1) 100%)';


export const boundaryColor = (colorSection: IcolorSection | undefined) => `linear-gradient(135deg, rgba(${colorSection?.firstColor.r},${colorSection?.firstColor.g},${colorSection?.firstColor.b},1) 50%,rgba(${colorSection?.secondColor.r},${colorSection?.secondColor.g},${colorSection?.secondColor.b},1) 100%)`