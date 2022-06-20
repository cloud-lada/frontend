<template>
  <Row>
    <Col :span="24">
      <StatisticChart
        :date="date.value"
        unit="km/h"
        label="Speed"
        sensor="speed"
        colour="red"
      />
    </Col>
  </Row>
  <Row class="separated">
    <Col :span="24">
      <StatisticChart
        :date="date.value"
        unit="%"
        label="Fuel"
        sensor="fuel"
        colour="blue"
      />
    </Col>
  </Row>
  <Row class="separated">
    <Col :span="24">
      <StatisticChart
        :date="date.value"
        unit="°C"
        label="Engine Temperature"
        sensor="engine_temperature"
        colour="green"
      />
    </Col>
  </Row>
  <Row class="separated">
    <Col :span="24">
      <StatisticChart
        :date="date.value"
        unit="rpm"
        label="Revolutions"
        sensor="revolution"
        colour="orange"
      />
    </Col>
  </Row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Row, Col } from "ant-design-vue";
import { ref } from "vue";
import StatisticChart from "@/components/StatisticChart.vue";

@Options({
  components: { StatisticChart, Row, Col },
})
export default class DailyCharts extends Vue {
  date = ref<Date>(new Date());
}
</script>

<style lang="css" scoped>
.separated {
  margin-top: 1em;
}
</style>
