<template>
  <div class="page">
    <PageHeader :title="title" :ghost="false" :sub-title="subtitle">
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

@Options({
  components: {
    PageHeader,
  },
  props: {
    title: { type: String, required: true },
    subtitle: { type: String },
  },
})
export default class Page extends Vue {}
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
