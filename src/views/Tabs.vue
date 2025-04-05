<template>
  <ion-page>
    <ion-tabs>
      <!-- 🔹 Router Outlet (Buraya yönlendirilen sayfalar yüklenecek) -->
      <ion-router-outlet></ion-router-outlet>

      <!-- 🔹 Sekme Menüleri -->
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <img :src="getWeatherImageUrl(weather?.current?.weather[0].icon, '1x')" alt="">
          <ion-label>Hava Durumu {{ formatTemperature(weather?.current?.temp, 'C') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="calendarOutline"></ion-icon>
          <ion-label>Tahmin</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
import { calendarOutline } from 'ionicons/icons';
import { useWeather } from "@/weather/useWeather"

export default defineComponent({
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
  setup() {
    const { weather, formatTemperature, getWeatherImageUrl } = useWeather();

    return { weather, formatTemperature, getWeatherImageUrl, calendarOutline };
  }
});
</script>
