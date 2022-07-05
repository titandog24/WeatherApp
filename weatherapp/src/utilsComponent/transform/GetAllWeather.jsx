import { ConvertFromKelvinToCelsius } from '../ToCelsius'

 const getAllWeather = (response, getcityAndCountry) => {
    const { data } = response

    const temperature = ConvertFromKelvinToCelsius(data.main.temp)
    const state = data.weather[0].main
    const humidity = data.main.humidity
    const wind = data.wind.speed

    const propName = getcityAndCountry
    const propValue = { temperature, state, humidity, wind }
    return ({ [propName]: propValue })
}

export default getAllWeather