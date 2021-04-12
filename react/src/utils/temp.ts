export const calculateTemp = (raw: number, fahrenheit?: boolean) => {
    if(!fahrenheit) return Math.floor(raw - 273.15) // celcius
    else return Math.floor(((raw - 273.15) * 1.8) + 32) // fahrenheit
}