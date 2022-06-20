<template>
  <div>
    <Spin v-if="loading" size="large" class="spin" />
    <Line
      v-if="!loading"
      :chart-options="chartOptions"
      :chart-data="chartData.value"
      :height="80"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { StatisticsClient } from "@/lib/statistics";
import { HTTPClient } from "@/lib/http";
import { Spin } from "ant-design-vue";
import { Line } from "vue-chartjs";
import { SensorType } from "@/lib/reading";
import { Formatter } from "@/lib/time";
import { ref, PropType, Ref, toRefs } from "vue";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

@Options({
  components: {
    Line,
    Spin,
  },
  props: {
    date: { type: Date, default: new Date() },
    sensor: { type: String as PropType<SensorType>, required: true },
    unit: { type: String },
    label: { type: String },
    colour: { type: String, default: "red" },
  },
  watch: {
    async date(): Promise<void> {
      await this.sync();
    },
  },
})
export default class StatisticChart extends Vue {
  loading = true;
  date!: Date;
  sensor!: SensorType;
  unit!: string;
  label!: string;
  colour!: string;

  client!: StatisticsClient;
  chartOptions!: ChartOptions;
  chartData!: Ref<ChartData>;
  intervalId!: number;
  dateFormatter!: Formatter;

  beforeMount(): void {
    const http = new HTTPClient();
    this.client = new StatisticsClient(http);
    this.dateFormatter = new Formatter();
    this.chartData = ref<ChartData<"line">>({
      datasets: [],
    });
  }

  setup(props: any): void {
    const { date, sensor, unit, label, colour } = toRefs(props);

    this.date = date.value;
    this.sensor = sensor.value;
    this.unit = unit.value;
    this.label = label.value;
    this.colour = colour.value;
  }

  async mounted(): Promise<void> {
    const interval = 10000;
    this.chartOptions = {
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: (value) => {
              return `${value}${this.unit}`;
            },
          },
        },
      },
    };

    this.loading = true;
    await this.sync();
    this.loading = false;

    this.intervalId = setInterval(this.sync, interval);
  }

  unmounted(): void {
    clearInterval(this.intervalId);
  }

  async sync(): Promise<void> {
    if (!this.date) {
      return;
    }

    const statistics = await this.client.forDate(this.sensor, this.date);

    this.chartData.value = {
      labels: statistics.map(({ timestamp }) =>
        this.dateFormatter.hoursAndMinutes(timestamp)
      ),
      datasets: [
        {
          data: statistics.map(({ value }) => value),
          label: `${this.label} (${this.unit})`,
          backgroundColor: this.colour,
          borderColor: this.colour,
        },
      ],
    };
  }
}
</script>

<style lang="css" scoped>
.spin {
  width: 100%;
  height: 100px;
  line-height: 100px;
}
</style>
