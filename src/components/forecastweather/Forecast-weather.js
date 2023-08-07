import "./forecast-weather.css";
import { Accordion, AccordionItem } from "react-accessible-accordion";

const Week_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastWeather = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = Week_DAYS.slice(dayInAWeek, Week_DAYS.length).concat(
    Week_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <div className="Weakly-weather">
              <div className="Currently-date">
                <div className="day">
                  {forecastDays[idx]}
                  <label>{item.message}</label>
                  <label className="Weather">
                    {item.weather[0].description}
                  </label>
                </div>
                <div className="icon-div">
                  <img
                    alt="weather"
                    className="weather-icon"
                    src={`icons-weather/${item.weather[0].icon}.png`}
                  />
                </div>
              </div>

              <div className="Current-weather">
                <label className="wind">Wind speed:{item.wind.speed} m/s</label>
                <label className="humidy">Humidity:{item.main.humidity}%</label>
                <label className="sea-level">
                  Sea Level:{item.main.sea_level}m
                </label>
              </div>
              <div
                className="temeprature-div"
                style={{
                  color: `${
                    item.main.temp_max > 35
                      ? "red"
                      : item.main.temp_max < 20
                      ? "blue"
                      : "black"
                  }`,
                }}
              >
                {Math.round(item.main.temp_max)}°C
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default ForecastWeather;
