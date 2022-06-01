<template>
  <div id="map" class="map" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import leaflet from "leaflet";

export default class Map extends Vue {
  mounted(): void {
    const config = {
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
    };

    const center: leaflet.LatLngExpression = [51.505, -0.09];
    const zoom = 13;

    const map = leaflet.map("map", config).setView(center, zoom);

    const tileURL =
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";
    const tileLayer = leaflet.tileLayer(tileURL);

    tileLayer.addTo(map);

    const circle = leaflet.circle([51.505, -0.09], {
      radius: 1000,
      interactive: false,
    });

    circle.addTo(map);
  }
}
</script>

<style lang="css" scoped>
.map {
  height: 40rem;
}
</style>
