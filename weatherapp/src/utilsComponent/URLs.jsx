import token from "./token"

export const URLWeather = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token()}`
}

export const URLForecast = (city) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${token()}`
}
