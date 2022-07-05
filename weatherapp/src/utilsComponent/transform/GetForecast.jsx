import moment from 'moment'
import 'moment/locale/es'
import { ConvertFromKelvinToCelsius } from '../ToCelsius'

const getAllForecast = (response) => {
    const { data } = response
    const daysAhead = [0, 1, 2, 3, 4, 5]
    const days = daysAhead.map(d => moment().add(d, 'd'))
    const dataAux = days.map(day => {

        const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
        })

        const temps = tempObjArray.map(item => item.main.temp)

        return ({
            dayHour: day.format('ddd'),
            min: ConvertFromKelvinToCelsius(Math.min(...temps)),
            max: ConvertFromKelvinToCelsius(Math.max(...temps)),
            hasTemps: (temps.length > 0) ? true : false
        })
    }).filter(item => item.hasTemps)

    const interval = [4, 8, 12, 16, 20, 24]
    const forecastItemListAux = data.list
        .filter((item, index) => interval.includes(index))
        .map(item => {
            return (
                {
                    hour: moment.unix(item.dt).hour(),
                    weekDay: moment.unix(item.dt).format('dddd'),
                    state: item.weather[0].main.toLowerCase(),
                    temperature: ConvertFromKelvinToCelsius(item.main.temp),
                }
            )
        })
    return {dataAux, forecastItemListAux}

}

export default getAllForecast