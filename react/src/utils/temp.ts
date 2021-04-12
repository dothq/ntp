export const calculateTemp = (raw: number, unit: number) => {
    let temp = 0;

    if(unit == 1) temp = Math.floor(((raw - 273.15) * 1.8) + 32) // fahrenheit
    else if(unit == 2) temp = Math.floor(raw) // already kelvin
    else temp = Math.floor(raw - 273.15) // celcius

    const units = unit == 0
                    ? `C`
                    : unit == 1
                        ? `F`
                        : `K`

    return `${temp}${(unit == 0 || unit == 1) ? `°` : ` `}${units}`
}