<template>
  <Button size="large" href="https://github.com/cloud-lada" target="_blank">
    <template #icon><GithubOutlined /></template>
    Source Code
  </Button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Button } from "ant-design-vue";
import { GithubOutlined } from "@ant-design/icons-vue";

@Options({
  components: {
    Button,
    GithubOutlined,
  },
})
export default class SourceCodeButton extends Vue {}
</script>
