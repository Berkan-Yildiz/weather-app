import { Geolocation } from '@capacitor/geolocation';
import {ref} from 'vue'
import {OneWeather} from "@/weather/oneWeather.model";

const weatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?exclude=minutely,hourly&appid=3fb756f53f84f267de25b2b0218a4e08';

const weather=ref<OneWeather>();

async function fetchWeather(): Promise<void> {
    const { coords } = await Geolocation.getCurrentPosition();

    const res = await fetch(`${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=metric`);
    weather.value = await res.json();
}

function formatTemperature(value: number, format: 'F'|'C'): string {
    return `${Math.round(value)}° ${format}`;
}
function getWeatherImageUrl(iconName: string, size: '2x'| '4x'): string {
    return `http://openweathermap.org/img/wn/${iconName}@${size ? size : '2x'}.png`;
}
setInterval(fetchWeather, 10000);

export function useWeather(){
    return {
        weather,
        fetchWeather,
        formatTemperature,
        getWeatherImageUrl,
    };
}