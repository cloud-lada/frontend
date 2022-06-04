<template>
  <div id="map" class="map" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import leaflet from "leaflet";

export default class Map extends Vue {
  map!: leaflet.Map;
  circle!: leaflet.Circle;

  mounted(): void {
    const center: leaflet.LatLngExpression = [51.505, -0.09];
    const zoom = 13;

    this.createMap(center, zoom);
    this.createTileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    this.createCircle(center);
  }

  createMap(center: leaflet.LatLngExpression, zoom: number): void {
    const config = {
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
    };

    this.map = leaflet.map("map", config).setView(center, zoom);
  }

  createTileLayer(url: string): void {
    const tileLayer = leaflet.tileLayer(url);

    tileLayer.addTo(this.map);
  }

  createCircle(location: leaflet.LatLngExpression): void {
    this.circle = leaflet.circle(location, {
      radius: 1000,
      interactive: false,
    });

    this.circle.addTo(this.map);
  }
}
</script>

<style lang="css" scoped>
.map {
  min-height: 15rem;
  max-height: 40rem;
}
</style>
