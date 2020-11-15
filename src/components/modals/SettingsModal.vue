<template>
  <div class="settingsModal">
    <div class="left">
      <div class="leftContainer">
        <h1>{{ $t("Settings") }}</h1>
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
        <a class="close" @click="closeModal">{{ $t("Close") }}</a>
      </h1>
      <div v-if="currentTab === $t('General')">
        <label>{{ $t("Extras") }}</label>
        <div class="settingsRow">
          <div class="settingsCard" v-for="option in extras" :key="option.id">
            <img :src="option.image" />
            <h3>{{ option.title }}</h3>
          </div>
          <div class="emptyCard"></div>
        </div>

        <label>{{ $t("Themes") }}</label>
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
      <div v-if="currentTab === $t('Languages')">
        <div class="settingsRow">
          <div
            class="settingsCard"
            v-for="option in languagesRow1"
            :key="option.id"
            :class="[option.end ? 'noMarginRight' : '']"
            @click="changeLanguage(option.code)"
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
            @click="$i18n.locale = option.code"
          >
            <img :src="option.image" />
            <h3>{{ option.title }}</h3>
          </div>
          <div class="emptyCard"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { closeModal } from "@/scripts/state/useModalState";
import { savePython } from "@/scripts/state/useState";
import { ref, Ref } from "vue";
import "@/scripts/types";

export default {
  name: "settingsModal",
  setup() {
    const { t, locale } = useI18n();

    const changeLanguage = (code: string) => {
      closeModal();
      locale.value = code;
    };

    const currentTab: Ref<string> = ref("");
    currentTab.value = t("General");

    const tabButtons: Array<TabButtons> = [
      { id: 1, title: t("General") },
      { id: 2, title: t("Samples") },
      { id: 2, title: t("Languages") },
      { id: 2, title: t("About") }
    ];

    const extras: Array<SettingsOptions> = [
      {
        id: 1,
        title: t("Export"),
        image: "assets/images/settings/export.png",
        func: savePython
      },
      {
        id: 2,
        title: t("ToggleCamera"),
        image: "assets/images/settings/camera.png"
      }
    ];

    const themes: Array<SettingsOptions> = [
      {
        id: 1,
        title: t("Default"),
        image: "assets/images/settings/themes/default.png"
      },
      {
        id: 2,
        title: t("Dark"),
        image: "assets/images/settings/themes/dark.png"
      },
      {
        id: 3,
        title: t("Light"),
        image: "assets/images/settings/themes/light.png",
        end: true
      }
    ];

    const languagesRow1: Array<LanguageOptions> = [
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

    const languagesRow2: Array<LanguageOptions> = [
      {
        id: 1,
        title: "Welsh",
        code: "cy",
        image: "assets/images/settings/languages/welsh.png"
      },
      {
        id: 2,
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
      languagesRow2,
      changeLanguage
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
  cursor: pointer;
}

.emptyCard {
  width: 33%;
}

.settingsCard img {
  height: 75px;
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
