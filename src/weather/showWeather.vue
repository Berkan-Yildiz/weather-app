<template>
  <div>
    <Forecast />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Forecast from "@/weather/forecast.vue";

export default defineComponent({
  components: {
    Forecast,
  },
  setup() {


    return {}
  }
})
</script>

<style scoped>

</style>