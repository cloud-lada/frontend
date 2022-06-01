<template>
  <ConfigProvider>
    <Layout>
      <LayoutContent>
        <RouterView />
      </LayoutContent>
    </Layout>
  </ConfigProvider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Layout, LayoutContent, ConfigProvider } from "ant-design-vue";

@Options({
  components: {
    Layout,
    LayoutContent,
    ConfigProvider,
  },
})
export default class App extends Vue {}
</script>
