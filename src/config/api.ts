const apiKey = 'a0a0eb373ff6161724f0496322247f06';

const cleanInputString = (input: string) => {
  const inputArray = input.toLowerCase().replace(' ', '%20').split(',');
  if (inputArray[2]) {
    inputArray[2] = `,${inputArray[2]}`;
  } else {
    inputArray[2] = '';
  }
  return inputArray;
};

export const belgrade = 'Belgrade,rs';

export const coordUrl = (input: string) => {
  const inputData = cleanInputString(input);
  return `http://api.openweathermap.org/geo/1.0/direct?q=${inputData[0]},${inputData[1]}${inputData[2]}&limit=5&appid=${apiKey}`;
};

export const weatherUrl = (lat: string, lon: string) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
};
