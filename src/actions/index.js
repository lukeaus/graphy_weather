import SECRETS from '../secrets';
import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${SECRETS.API_KEY_OPEN_WEATHER_MAP}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// ActionCreator
export function fetchWeather(city) {
  // ToDo - change to user input country
  const url = `${ROOT_URL}&q=${city},au`;
  // returns a promise
  const request = axios.get(url);

  // must return an object with type
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
