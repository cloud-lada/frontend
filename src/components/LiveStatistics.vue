<template>
  <Row v-if="loading">
    <Spin size="large" class="spin" />
  </Row>
  <Row v-if="!loading">
    <Col :span="5">
      <StatisticDisplay title="Speed" :value="speed" unit="km/h" />
    </Col>
    <Col :span="1">
      <Divider class="divider" type="vertical" />
    </Col>
    <Col :span="5">
      <StatisticDisplay title="Fuel" :value="fuel" unit="%" />
    </Col>
    <Col :span="1">
      <Divider class="divider" type="vertical" />
    </Col>
    <Col :span="5">
      <StatisticDisplay
        title="Engine Temperature"
        :value="engineTemperature"
        unit="°C"
      />
    </Col>
    <Col :span="1">
      <Divider class="divider" type="vertical" />
    </Col>
    <Col :span="5">
      <StatisticDisplay title="Revolutions" :value="revolutions" unit="rpm" />
    </Col>
  </Row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Row, Col, Divider, Spin } from "ant-design-vue";
import StatisticDisplay from "@/components/StatisticDisplay.vue";
import { HTTPClient } from "@/lib/http";
import { StatisticsClient } from "@/lib/statistics";

@Options({
  components: {
    StatisticDisplay,
    Row,
    Col,
    Divider,
    Spin,
  },
})
export default class LiveStatistics extends Vue {
  loading = true;
  speed = 0;
  fuel = 0;
  engineTemperature = 0;
  revolutions = 0;

  client!: StatisticsClient;
  intervalId!: number;

  beforeMount(): void {
    const http = new HTTPClient();
    this.client = new StatisticsClient(http);
  }

  async mounted(): Promise<void> {
    const interval = 10000;

    this.loading = true;
    await this.sync();
    this.loading = false;

    this.intervalId = setInterval(this.sync, interval);
  }

  unmounted(): void {
    clearInterval(this.intervalId);
  }

  async sync(): Promise<void> {
    const { fuel, speed, engineTemperature, revolutions } =
      await this.client.latest();

    this.fuel = fuel;
    this.speed = speed;
    this.engineTemperature = engineTemperature;
    this.revolutions = revolutions;
  }
}
</script>

<style lang="css" scoped>
.divider {
  height: 100%;
}

.spin {
  width: 100%;
  height: 64px;
  line-height: 84px;
}
</style>
