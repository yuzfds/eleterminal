<template>
  <div ref="terminalDom" class="hello"></div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from "vue";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { addTerminalBackDataListener, sendTerminalData } from "@/utils/ipc";
defineProps(["msg"]);
const terminalDom = ref();
const term = new Terminal();
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
onMounted(() => {
  term.open(terminalDom.value);

  // term.write(" \x1B[1;3;31madmin\x1B[0m $ ");
  term.onData((val) => {
    sendTerminalData(val);
  });
  addTerminalBackDataListener((data: any) => {
    term.write(data);
  });
  fitAddon.fit();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 100vw;
  height: 100vh;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
