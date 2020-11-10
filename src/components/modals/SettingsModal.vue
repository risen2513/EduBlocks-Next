<template>
  <div class="settingsModal">
    <div class="left">
      <div class="leftContainer">
        <h1>Settings</h1>
        <button
          v-for="button in tabButtons"
          :key="button.id"
          @click="currentTab = button.title"
          :class="[currentTab === button.title ? 'greenButton' : '']"
        >
          {{ button.title }}
        </button>
      </div>
    </div>
    <div class="right">
      <h1 class="settingsTitle">
        {{ currentTab }}
        <a class="close" @click="closeModal">Close</a>
      </h1>
      <div v-if="currentTab === 'General'">
        <label>Extras</label>
        <div class="settingsRow">
          <div class="settingsCard" v-for="option in extras" :key="option.id">
            <img :src="option.image" />
            <h3>{{ option.title }}</h3>
          </div>
          <div class="emptyCard"></div>
        </div>

        <label>Theme</label>
        <div class="settingsRow">
          <div
            class="settingsCard"
            v-for="option in themes"
            :key="option.id"
            :class="[option.end ? 'noMarginRight' : '']"
          >
            <img :src="option.image" />
            <h3>{{ option.title }}</h3>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'Languages'">
        <div class="settingsRow">
          <div
            class="settingsCard"
            v-for="option in languagesRow1"
            :key="option.id"
            :class="[option.end ? 'noMarginRight' : '']"
          >
            <img :src="option.image" />
            <h3>{{ option.title }}</h3>
          </div>
        </div>
        <div class="settingsRow">
          <div
            class="settingsCard"
            v-for="option in languagesRow2"
            :key="option.id"
          >
            <img :src="option.image" />
            <h3>{{ option.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { closeModal } from "@/scripts/state/useModalState";
import { ref } from "vue";

export default {
  name: "settingsModal",
  setup() {
    const toast = useToast();
    const currentTab = ref("General");

    const tabButtons = [
      { id: 1, title: "General" },
      { id: 2, title: "Samples" },
      { id: 2, title: "Languages" },
      { id: 2, title: "About" }
    ];

    const extras = [
      {
        id: 1,
        title: "Export .py",
        image: "assets/images/settings/export.png"
      },
      {
        id: 2,
        title: "Toggle Camera",
        image: "assets/images/settings/camera.png"
      }
    ];

    const themes = [
      {
        id: 1,
        title: "Default",
        image: "assets/images/settings/themes/default.png"
      },
      {
        id: 2,
        title: "Dark",
        image: "assets/images/settings/themes/dark.png"
      },
      {
        id: 3,
        title: "Light",
        image: "assets/images/settings/themes/light.png",
        end: true
      }
    ];

    const languagesRow1 = [
      {
        id: 1,
        title: "English",
        code: "en",
        image: "assets/images/settings/languages/english.png"
      },
      {
        id: 2,
        title: "French",
        code: "fr",
        image: "assets/images/settings/languages/french.png"
      },
      {
        id: 3,
        title: "German",
        code: "de",
        image: "assets/images/settings/languages/german.png",
        end: true
      }
    ];

    const languagesRow2 = [
      {
        id: 1,
        title: "Welsh",
        code: "cy",
        image: "assets/images/settings/languages/welsh.png"
      }
    ];

    return {
      closeModal,
      currentTab,
      tabButtons,
      extras,
      themes,
      languagesRow1,
      languagesRow2
    };
  }
};
</script>

<style scoped>
.settingsModal {
  height: 480px;
  width: 755px;
  display: flex;
}

.button-icon {
  margin: 0 0.6em 0 0;
}

.left {
  width: 35%;
  background-color: #1b173d;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 25px;
  position: relative;
  color: white;
}

.right {
  width: 65%;
  background: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 25px;
}

.leftContainer {
  top: 22%;
  position: absolute;
  margin: 0;
  text-align: center;
  color: white;
  left: 0;
  right: 0;
  width: 98%;
}

.leftContainer button {
  width: 130px;
  background-color: #e71d64;
}

.leftContainer h1 {
  margin-bottom: 15px;
}

.close {
  font-size: 20px !important;
  margin-top: 26px;
}

.settingsTitle {
  margin-bottom: 0.8rem;
}

.card .close,
.modal .overlay ~ * .close {
  top: 0.6em;
  right: 0.7em;
}

label {
  font-weight: 700;
  cursor: auto;
  display: block;
  margin-bottom: 10px;
}

.settingsRow {
  display: flex;
  width: 100%;
  box-sizing: border-box;
}

.settingsCard {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #f1f1f1;
  margin-bottom: 20px;
  border-radius: 15px;
  padding-top: 10px;
  min-height: 127px;
  margin-right: 20px;
  text-overflow: ellipsis;
  width: 33%;
}

.emptyCard {
  width: 33%;
}

.settingsCard img {
  height: 75px;
  cursor: pointer;
}

.settingsCard h3 {
  padding-bottom: 10px !important;
  font-size: 17px;
  padding-top: 0px !important;
}

.settingsCard:hover {
  -ms-transform: scale(1.03); /* IE 9 */
  -webkit-transform: scale(1.03); /* Safari 3-8 */
  transform: scale(1.03);
}

.noMarginRight {
  margin-right: 0px;
}

.greenButton {
  background-color: yellowgreen !important;
}
</style>
