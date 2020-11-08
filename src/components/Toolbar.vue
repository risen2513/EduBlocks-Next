<template>
  <div class="toolbar">
    <div class="toolbar-column">
      <a
        href="#"
        class="button orange"
        :class="[view === 'Split' ? '' : 'toolbar-opacity']"
        @click="updateView('Split')"
      >
        <font-awesome-icon class="button-icon" :icon="['fas', 'columns']" />
        Split
      </a>
      <a
        href="#"
        class="button pink"
        :class="[view === 'Blocks' ? '' : 'toolbar-opacity']"
        @click="updateView('Blocks')"
        v-if="!runWindow"
      >
        <font-awesome-icon class="button-icon" :icon="['fas', 'cube']" />
        Blocks
      </a>
      <a
        href="#"
        class="button purple"
        :class="[view === 'Python' ? '' : 'toolbar-opacity']"
        @click="updateView('Python')"
      >
        <font-awesome-icon class="button-icon" :icon="['fab', 'python']" />
        Python
      </a>
    </div>
    <div class="toolbar-column">
      <div id="pythonButtons" v-if="mode === 'Python'">
        <a
          href="#"
          class="button right green no-margin-right"
          @click="runPythonCode"
          v-if="!runWindow"
        >
          <font-awesome-icon class="button-icon" :icon="['fas', 'play']" />
          Run
        </a>

        <a
          href="#"
          class="button right red no-margin-right"
          @click="stopPythonCode"
          v-if="runWindow"
        >
          <font-awesome-icon
            class="button-icon"
            :icon="['fas', 'times-circle']"
          />
          Stop
        </a>
      </div>

      <a
        href="#"
        class="button right green no-margin-right"
        @click="downloadHex"
        v-if="mode === 'microbit'"
      >
        <font-awesome-icon class="button-icon" :icon="['fas', 'download']" />
        Download
      </a>

      <a
        href="#"
        class="button right green no-margin-right"
        @click="savePython('code')"
        v-if="mode === 'CircuitPython'"
      >
        <font-awesome-icon class="button-icon" :icon="['fas', 'download']" />
        Download
      </a>

      <a
        href="#"
        class="button right blue"
        @click="changePythonFontSize('in')"
        v-if="view !== 'Blocks'"
      >
        <font-awesome-icon
          class="button-icon no-icon-margin"
          :icon="['fas', 'search-plus']"
        />
      </a>

      <a
        href="#"
        class="button right blue"
        @click="changePythonFontSize('out')"
        v-if="view !== 'Blocks'"
      >
        <font-awesome-icon
          class="button-icon no-icon-margin"
          :icon="['fas', 'search-minus']"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  updateView,
  view,
  runWindow,
  runPythonCode,
  stopPythonCode,
  changePythonFontSize,
  pythonCode,
  savePython,
  mode
} from "../scripts/state/useState";
import { onMounted } from "vue";

import { fsUniversalHex } from "@/scripts/microbit.js";

export default {
  name: "toolbar",
  components: {
    FontAwesomeIcon
  },
  setup() {
    onMounted(() => {
      view.value = "Split";
    });

    function downloadHex() {
      fsUniversalHex(pythonCode.value);
    }

    return {
      view,
      updateView,
      runWindow,
      runPythonCode,
      stopPythonCode,
      changePythonFontSize,
      downloadHex,
      savePython,
      mode
    };
  }
};
</script>

<style scoped>
.orange {
  background-color: rgb(235, 154, 64);
  margin-right: 1rem;
}

.pink {
  background-color: rgb(214, 54, 100);
  margin-right: 1rem;
}

.purple {
  background-color: rgb(68, 87, 160);
}

.blue {
  background-color: #15bad4;
}

.right {
  float: right;
  margin-right: 1rem;
}

.no-icon-margin {
  margin: 0 0em 0 0 !important;
}

.no-margin-right {
  margin-right: 0 !important;
}

.green {
  background-color: #49b04d;
}

.red {
  background-color: red;
}

.button-icon {
  margin: 0 0.4em 0 0;
}

.toolbar-opacity {
  opacity: 40%;
  -webkit-opacity: 0.4;
  visibility: visible;
}

.toolbar {
  margin-top: 48px;
  height: 2.5em;
  background-color: #343350;
  display: flex;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

.toolbar a {
  height: 2.5em;
  border-radius: 0px;
}

.toolbar-column {
  flex: 50%;
}

.tab-button {
  display: inline-block;
  text-align: center;
  margin: 0;
  padding: 0.3em 0.9em;
  vertical-align: middle;
  background: #0074d9;
  color: #fff;
  border: 0;
  border-radius: 0.2em;
  width: auto;
  user-select: none;
  margin: 0.3em 0;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 0.2em;
  height: auto;
  box-shadow: 0 0 transparent inset;
}
</style>
