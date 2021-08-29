<template>
  <Terminal msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import Terminal from "./components/Terminal.vue";

export default defineComponent({
  name: "App",
  components: {
    Terminal,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
