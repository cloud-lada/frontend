<template>
  <Page title="Cloud Lada" :subtitle="`v${version}`">
    <template #side>
      <DonateButton />
      <SourceCodeButton />
    </template>

    <template #content>
      <BadgeRibbon text="Live" color="red">
        <Card size="small">
          <LiveStatistics />
        </Card>
      </BadgeRibbon>

      <Card size="small" class="separated">
        <Map />
      </Card>
    </template>
  </Page>
</template>

<script lang="ts">
import Page from "@/components/Page.vue";
import { Options, Vue } from "vue-class-component";
import { Card, BadgeRibbon } from "ant-design-vue";
import { version } from "../../package.json";
import SourceCodeButton from "@/components/SourceCodeButton.vue";
import DonateButton from "@/components/DonateButton.vue";
import LiveStatistics from "@/components/LiveStatistics.vue";
import Map from "@/components/Map.vue";

@Options({
  components: {
    Map,
    LiveStatistics,
    DonateButton,
    SourceCodeButton,
    Page,
    Card,
    BadgeRibbon,
  },
})
export default class Home extends Vue {
  version: string = version;
}
</script>

<style lang="css" scoped>
.separated {
  margin-top: 1rem;
}
</style>
