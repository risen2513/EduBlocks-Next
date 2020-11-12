<template>
  <div class="trinket">
    <div class="trinketContainer">
      <iframe :src="getTrinketURL()" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { pythonCode } from "@/scripts/state/useState";
import { ref, Ref } from "vue";
export default {
  name: "Trinket",
  props: {
    version: String
  },
  setup() {
    const getTrinketURL: Function = () => {
      let url: string;
      const python: Ref<Ref<string>> = ref(pythonCode.value);
      const usrBin = "#!/usr/bin/python3 \n";
      const pythonURL =
        "https://trinket.io/tools/1.0/jekyll/embed/python?runOption=run&outputOnly=true&start=result#code=";

      const python3URL =
        "https://trinket.io/tools/1.0/jekyll/embed/python3?runOption=run&outputOnly=true&start=result#code=";

      if (pythonCode.value.indexOf("requests") !== -1) {
        url = python3URL + encodeURIComponent(usrBin + python.value);
      } else {
        url = pythonURL + encodeURIComponent(usrBin + python.value);
      }
      return url;
    };

    return { getTrinketURL };
  }
};
</script>

<style scoped>
.trinket {
  position: fixed;
  z-index: 1;
  top: 52px;
  right: 0px;
  bottom: 0px;
  line-height: 20px;
  width: 40%;
  float: right;
}

.trinketContainer {
  height: 100%;
  position: relative;
  background: white;
}

.trinketContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
