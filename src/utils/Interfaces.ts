export interface GeoLocationAPIResponse {
    city: string,
    country_name: string,
}

export interface WeatherAPIResponse {
    currently: Currently,

    daily: Daily,

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

export interface Currently {
    apparentTemperature: number,
    temperature: number,
    icon: string,
    time: number,
    summary: string
}

export interface Daily{
    data: DailyDataObjects[],
    icon: string,
    summary: string
}

export interface DailyDataObjects {
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
}