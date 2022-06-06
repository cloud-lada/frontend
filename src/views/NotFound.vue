<template>
  <Page>
    <template #content>
      <Result
        status="404"
        title="404"
        sub-title="Sorry, the page you visited does not exist."
      >
        <template #extra>
          <Button type="primary" href="/">Back Home</Button>
        </template>
      </Result>
    </template>
  </Page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Result, Button } from "ant-design-vue";
import Page from "@/components/Page.vue";

@Options({
  components: {
    Page,
    Result,
    Button,
  },
})
export default class NotFound extends Vue {}
</script>
