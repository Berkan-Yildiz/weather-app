<template>
  <ion-list>
    <ion-list-header>
      Hava Tahminleri
    </ion-list-header>
    <ion-item v-for="daily in weather?.daily" :key="daily.dt">
      <ion-avatar slot="start">
        <div class="weather-background">
          <img :src="getWeatherImageUrl(daily.weather[0].icon,'2x')" />
        </div>
      </ion-avatar>
      <ion-label>
        <h1>{{formatTemperature(daily.temp.day,'C')}}</h1>
        <h2>{{daily.weather[0].description}}</h2>
        <p>
          {{
            new Date(daily.dt*1000).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useWeather} from "@/weather/useWeather";

export default defineComponent({
  setup() {

    const {weather,formatTemperature,getWeatherImageUrl} = useWeather();
    console.log(weather);
    return {weather,formatTemperature,getWeatherImageUrl}
  }
})
</script>

<style scoped>
.weather-background {
  background-color: skyblue;
  border-radius: 100%;
  border: 2px solid white;
}
ion-avatar {
  margin-right: 10px;
}
</style>