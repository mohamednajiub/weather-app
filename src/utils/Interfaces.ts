export interface GeoLocationAPIResponse {
    city: string,
    country_name: string,
}

export interface WeatherAPIResponse {
    currently: {
        apparentTemperature: number,
        temperature: number,
        icon: string,
        time: number,
        summary: string
    },

    daily: {
        data: {
            [index: number]: {
                apparentTemperatureHigh: number,
                apparentTemperatureLow: number,
                apparentTemperatureMax: number,
                apparentTemperatureMin: number,
                temperatureHigh: number,
                temperatureLow: number,
                temperatureMax: number,
                temperatureMin: number,
                icon: string,
                summary: string,
            };
        },
        icon: string,
        summary: string
    },

    hourly: {
        [index: number]: {
            time: string,
            apparentTemperature: number,
            temperature: number,
            icon: string,
            summary: string,
        };
    }
}