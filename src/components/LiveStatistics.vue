<template>
  <Row>
    <Col :span="5">
      <StatisticDisplay title="Speed" value="60" unit="km/h" />
    </Col>
    <Col :span="1">
      <Divider class="divider" type="vertical" />
    </Col>
    <Col :span="5">
      <StatisticDisplay title="Fuel" value="50" unit="%" />
    </Col>
    <Col :span="1">
      <Divider class="divider" type="vertical" />
    </Col>
    <Col :span="5">
      <StatisticDisplay title="Engine Temperature" value="45" unit="°C" />
    </Col>
    <Col :span="1">
      <Divider class="divider" type="vertical" />
    </Col>
    <Col :span="5">
      <StatisticDisplay title="Revolutions" value="100" unit="rpm" />
    </Col>
  </Row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Row, Col, Divider } from "ant-design-vue";
import StatisticDisplay from "@/components/StatisticDisplay.vue";

@Options({
  components: {
    StatisticDisplay,
    Row,
    Col,
    Divider,
  },
})
export default class LiveStatistics extends Vue {}
</script>

<style lang="css" scoped>
.divider {
  height: 100%;
}
</style>
