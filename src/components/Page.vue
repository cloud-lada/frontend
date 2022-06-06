<template>
  <div class="page">
    <PageHeader title="Cloud Lada" :ghost="false" :sub-title="`v${version}`">
      <template #extra>
        <slot name="side" />
      </template>
    </PageHeader>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PageHeader } from "ant-design-vue";
import { version } from "../../package.json";

@Options({
  components: {
    PageHeader,
  },
})
export default class Page extends Vue {
  version: string = version;
}
</script>

<style lang="css" scoped>
.page {
  width: 100vw;
  height: 100vh;
  border: 0;
}

.content {
  padding: 1rem 10%;
}
</style>
