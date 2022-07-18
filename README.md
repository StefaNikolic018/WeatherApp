# Personal WeatherApp

Personal React TypeScript WeatherApp that fetches data from [OpenWeatherApi](https://openweathermap.org/current) using [Axios](https://axios-http.com/docs/intro).
[StyledComponents](https://styled-components.com/) and SASS was used for styling, and also for a graphic representation of the data [React ChartJS](https://www.npmjs.com/package/react-chartjs-2) was used.
ContextAPI was implemented for state management.
Some ready made solutions that were used for minor components: 
- [spinners-react](https://github.com/adexin/spinners-react)
- [react-select](https://react-select.com/home)
- [react-switch](https://www.npmjs.com/package/react-switch)

Formatting configuration defined with ESLint and Prettier.
Learning JEST Testing through this project.

## Idea and Usage
Idea is that application shows current weather for Belgrade, Serbia on load.
<img src="/public/screenshots/weather.png" alt="On load" title="On load" style="text-align: center">
User can select preffered country from country dropdown, input a city, and also select preffered degree measurement unit(F/C).
For every city, gradient background of the application will change according to average value of that place in next five days.
Daily temperature with icons corresponding to it will be shown for the next 7 days i.e one week, and in the next row there will be a graphic representation of the data in shape of the chart.

There is error handling for the following cases:
- If user enters invalid city name, application will show error message
<img src="/public/screenshots/spell.png" alt="Spelling mistake" title="Spelling mistake" style="text-align: center">
- If user enters empty string
<img src="/public/screenshots/empty.png" alt="Empty string" title="Empty string" style="text-align: center">

View demo [here](https://stefanikolic018.github.io/WeatherApp/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
