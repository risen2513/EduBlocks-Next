<template>
  <nav class="demo">
    <a href="#" class="brand">
      <img class="logo" src="https://i.ibb.co/2Zp0pyw/weblogo.png" />
    </a>

    <!-- responsive-->
    <input id="bmenub" type="checkbox" class="show" />
    <label for="bmenub" class="burger pseudo button">menu</label>

    <div class="menu">
      <input class="filename" placeholder="Untitled" v-model="filename" />
      <a
        href="#"
        v-for="option in options"
        :class="option.class"
        class="button"
        :key="option.title"
        @click="option.func"
      >
        <font-awesome-icon
          v-if="option.icon"
          class="button-icon"
          :icon="option.icon"
        />
        {{ option.title }}
      </a>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { saveFile } from "../scripts/functions/saveFile";
import { openFile } from "../scripts/functions/openFile";

export default {
  name: "Nav",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      options: [
        {
          title: "Save",
          class: "green-button",
          icon: ["fas", "save"],
          func: this.save
        },
        { title: "Share", class: "white-button", icon: ["fas", "share-alt"] },
        {
          title: "Files",
          class: "white-button",
          icon: ["fas", "folder-open"],
          func: this.open
        },
        {
          title: "New",
          class: "white-button",
          icon: ["fas", "plus"],
          func: this.new
        }
      ],
      filename: "",
      xml: ""
    };
  },
  methods: {
    save() {
      if (this.xml) {
        saveFile(this.xml, this.filename + ".xml", "text/xml;charset=utf-8");
      }
    },
    async open() {
      const newxml = await openFile();
      const textToDom = Blockly.Xml.textToDom(newxml);
      const workspace = Blockly.mainWorkspace;
      Blockly.Xml.domToWorkspace(textToDom, workspace);
    },
    new() {
      Blockly.mainWorkspace.clear();
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #1b173d;
}

nav .menu > * {
  margin-right: 20px;
}

nav .brand {
  padding: 0px;
}

.menu {
  float: left;
}

.button-icon {
  margin: 0 0.6em 0 0;
}

.white-button {
  margin-top: 7px;
  border: solid white 1px !important;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
}

.green-button {
  margin-top: 7px;
  border: solid #49b04d 1px !important;
  background-color: #49b04d;
  border-radius: 10px;
}

.filename {
  width: 255px;
  color: black;
  border: solid white 1px !important;
  font-weight: bold;
  margin-left: 5px;
  border-radius: 10px;
}
</style>
