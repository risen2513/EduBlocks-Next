<template>
  <div class="toolbar">
    <div class="toolbar-column">
      <a
        v-for="option in left"
        :key="option.title"
        :class="[view === option.title ? '' : 'toolbar-opacity']"
        @click="updateView(option.title)"
      >
        <a href="#" :class="option.class" class="button">
          <font-awesome-icon
            v-if="option.icon"
            class="button-icon"
            :icon="option.icon"
          />
          {{ option.title }}
        </a>
      </a>
      <h1></h1>
    </div>
    <div class="toolbar-column">
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
  </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  updateView,
  view,
  runWindow,
  runPythonCode,
  stopPythonCode
} from "../scripts/state/useState";
import { onMounted } from "vue";

export default {
  name: "toolbar",
  components: {
    FontAwesomeIcon
  },
  setup() {
    const left = [
      {
        title: "Split",
        class: "orange",
        icon: ["fas", "columns"]
      },
      {
        title: "Blocks",
        class: "pink",
        icon: ["fas", "cube"]
      },
      {
        title: "Python",
        class: "purple",
        icon: ["fab", "python"]
      }
    ];

    onMounted(() => {
      view.value = "Split";
    });

    return {
      left,
      view,
      updateView,
      runWindow,
      runPythonCode,
      stopPythonCode
    };
  }
};
</script>

<style scoped>
.orange {
  background-color: rgb(235, 154, 64);
}

.pink {
  background-color: rgb(214, 54, 100);
}

.purple {
  background-color: rgb(68, 87, 160);
}

.right {
  float: right;
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
  margin-right: 0.6em;
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
