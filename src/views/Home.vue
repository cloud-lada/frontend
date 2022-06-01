<template>
  <Page title="Cloud Lada" :subtitle="`v${version}`">
    <template #side>
      <Button
        shape="circle"
        size="large"
        href="https://github.com/cloud-lada"
        target="_blank"
      >
        <template #icon><GithubOutlined /></template>
      </Button>
    </template>
  </Page>
</template>

<script lang="ts">
import Page from "@/components/Page.vue";
import { Options, Vue } from "vue-class-component";
import { Button } from "ant-design-vue";
import { GithubOutlined } from "@ant-design/icons-vue";
import { version } from "../../package.json";

@Options({
  components: {
    Page,
    Button,
    GithubOutlined,
  },
})
export default class Home extends Vue {
  version: string = version;
}
</script>
