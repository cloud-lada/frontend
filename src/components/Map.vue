<template>
  <div id="map" class="map" />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import leaflet from "leaflet";
import { HTTPClient } from "@/lib/http";
import { LocationClient } from "@/lib/location";

export default class Map extends Vue {
  map!: leaflet.Map;
  circle!: leaflet.Circle;
  client!: LocationClient;
  intervalId!: number;

  beforeMount(): void {
    const http = new HTTPClient();
    this.client = new LocationClient(http);
  }

  async mounted(): Promise<void> {
    const interval = 10000;

    this.setup();
    await this.sync();

    this.intervalId = setInterval(this.sync, interval);
  }

  unmounted(): void {
    clearInterval(this.intervalId);
  }

  setup(): void {
    const zoom = 13;
    const initial: leaflet.LatLngExpression = [0, 0];
    const config = {
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
    };

    this.map = leaflet.map("map", config);
    this.map.setView(initial, zoom);

    const tileLayer = leaflet.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );

    tileLayer.addTo(this.map);

    this.circle = leaflet.circle(initial, {
      radius: 1000,
      interactive: false,
    });

    this.circle.addTo(this.map);
  }

  async sync(): Promise<void> {
    const { latitude, longitude } = await this.client.latest();
    const location: leaflet.LatLngExpression = [latitude, longitude];

    this.circle.setLatLng(location);
    this.map.setView(location);
  }
}
</script>

<style lang="css" scoped>
.map {
  min-height: 15rem;
  max-height: 40rem;
}
</style>
