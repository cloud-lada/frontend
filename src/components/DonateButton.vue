<template>
  <Button
    size="large"
    type="primary"
    href="https://gofund.me/d7217e5e"
    target="_blank"
    danger
  >
    <template #icon><HeartOutlined /></template>
    Donate
  </Button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Button } from "ant-design-vue";
import { HeartOutlined } from "@ant-design/icons-vue";

@Options({
  components: {
    Button,
    HeartOutlined,
  },
})
export default class DonateButton extends Vue {}
</script>
