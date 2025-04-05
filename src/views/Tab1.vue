<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hava Durumu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Hava Durumu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="auto" class="min-width">
            <CurrentWeather />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CurrentWeather from '@/weather/currentWeather.vue';
import IonComp from '@/shared/ionComp';

export default defineComponent({
  components: {
    CurrentWeather,
    ...IonComp
  }
});
</script>

<style scoped>
.min-width {
  min-height: 350px;
}
</style>
