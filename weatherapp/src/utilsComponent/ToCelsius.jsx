import convertUnits from 'convert-units'

export const ConvertFromKelvinToCelsius = (value) => {
    return Number(convertUnits(value).from('K').to('C').toFixed(0))
}