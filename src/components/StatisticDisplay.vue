<template>
  <Statistic class="statistic" :title="title" :value="value">
    <template #suffix>
      <TypographyText type="secondary" class="unit">
        {{ unit }}
      </TypographyText>
    </template>
  </Statistic>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Statistic, TypographyText } from "ant-design-vue";

@Options({
  components: {
    Statistic,
    TypographyText,
  },
  props: {
    title: { type: String, required: true },
    unit: { type: String },
    value: { type: [String, Number], required: true },
  },
})
export default class StatisticDisplay extends Vue {}
</script>

<style lang="css" scoped>
.statistic {
  text-align: center;
}

.unit {
  font-size: 14px;
}
</style>
