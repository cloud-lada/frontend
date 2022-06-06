<template>
  <Alert
    v-if="display"
    message="Data is out-of-date"
    :description="message"
    type="warning"
    show-icon
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Alert } from "ant-design-vue";
import { StatusClient } from "@/lib/status";
import { HTTPClient } from "@/lib/http";

@Options({
  components: {
    Alert,
  },
  computed: {
    message(): string {
      return `The Lada has not posted any data in ${this.difference} hour(s). This might be due to poor connection, or just shoddy programming. It's not possible to fix programming issues on the road, so lets hope it's temporary. The Lada will store data over time and attempt to upload it all to the platform. Eventually, data will get here.`;
    },

    display(): boolean {
      return this.difference >= 1;
    },

    difference(): number {
      const milliseconds =
        new Date().getTime() - new Date(this.lastIngestTimestamp).getTime();
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);

      return Math.floor(minutes / 60);
    },
  },
})
export default class Status extends Vue {
  lastIngestTimestamp: Date = new Date();

  client!: StatusClient;
  intervalId!: number;

  beforeMount(): void {
    const http = new HTTPClient();
    this.client = new StatusClient(http);
  }

  async mounted(): Promise<void> {
    const interval = 10000;
    await this.sync();

    this.intervalId = setInterval(this.sync, interval);
  }

  unmounted(): void {
    clearInterval(this.intervalId);
  }

  async sync(): Promise<void> {
    const { lastIngestTimestamp } = await this.client.status();

    this.lastIngestTimestamp = lastIngestTimestamp;
  }
}
</script>
