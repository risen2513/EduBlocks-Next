<template>
  <div class="terminalDiv" v-if="mode === 'RPi'">
    <div class="terminalContainer">
      <div id="terminal"></div>
    </div>
  </div>
</template>

<script>
import { mode } from "@/scripts/state/useState";
export default {
  name: "Terminal",
  setup() {
    return { mode };
  }
};
</script>

<style scoped>
.terminalDiv {
  position: fixed;
  z-index: 1;
  top: 52px;
  right: 0px;
  bottom: 0px;
  line-height: 20px;
  width: 40%;
  float: right;
}

.terminalContainer {
  height: 100%;
  position: relative;
  background: black;
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 15px;
}

#terminal {
  width: 100%;
  height: 100%;
}
</style>
