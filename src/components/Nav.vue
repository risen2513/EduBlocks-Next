<template>
  <nav class="demo">
    <a href="#" class="brand" @click="openModal('PlatformSelect')">
      <img class="logo" src="/assets/images/logos/mainlogo.png" />
    </a>

    <input id="bmenub" type="checkbox" class="show" />
    <label for="bmenub" class="burger pseudo button">
      {{ $t("Menu") }}
    </label>

    <div class="login">
      <a class="button" @click="openModal('LoginModal')" v-if="!userData"
        ><font-awesome-icon
          class="button-icon"
          :icon="['fas', 'sign-in-alt']"
        />
        {{ $t("Login") }}
      </a>
      <a class="button settingsButton" @click="openModal('SettingsModal')">
        <font-awesome-icon :icon="['fas', 'cog']" />
      </a>
      <UserAvatar v-if="userData" />
    </div>

    <div class="menu">
      <input
        class="filename"
        placeholder="Untitled"
        v-model="filename"
        v-if="mode !== 'CircuitPython'"
      />
      <a href="#" class="button green-button" @click="saveFirebaseFile">
        <font-awesome-icon class="button-icon" :icon="['fas', 'save']" />
        {{ $t("Save") }}
      </a>
      <a
        href="#"
        class="button white-button"
        @click="shareModalOpen"
        v-if="userData"
      >
        <font-awesome-icon class="button-icon" :icon="['fas', 'share-alt']" />
        {{ $t("Share") }}
      </a>
      <a href="#" class="button white-button" @click="open" v-if="!userData">
        <font-awesome-icon class="button-icon" :icon="['fas', 'folder-open']" />
        {{ $t("Open") }}
      </a>
      <a
        href="#"
        class="button white-button"
        @click="openFilesModal"
        v-if="userData"
      >
        <font-awesome-icon class="button-icon" :icon="['fas', 'folder-open']" />
        {{ $t("Files") }}
      </a>
      <a href="#" class="button white-button" @click="blocklyNew">
        <font-awesome-icon class="button-icon" :icon="['fas', 'plus']" />
        {{ $t("New") }}
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { blocklyNew } from "./blockly/Blockly";
import {
  filename,
  save,
  userData,
  mode,
  xml,
  isUser,
  open,
  isSaved,
  currentFileRef,
  share
} from "../scripts/state/useState";
import { openModal } from "@/scripts/state/useModalState";
import UserAvatar from "@/components/UserAvatar.vue";
import { listFirebaseFiles } from "@/scripts/state/useFirebase";
import firebase from "firebase";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";

export default {
  name: "Nav",
  components: {
    FontAwesomeIcon,
    UserAvatar
  },
  setup() {
    const toast = useToast();
    const { t } = useI18n();

    const openFilesModal = () => {
      listFirebaseFiles();
      openModal("FilesModal");
    };

    const shareModalOpen = () => {
      if (isSaved.value) {
        share();
      } else {
        toast.error(t("ShareMessage"));
      }
    };

    const saveFirebaseFile = () => {
      const user = firebase.auth().currentUser;
      if (user) {
        const platform = " (" + mode.value + ")";
        const ref = firebase
          .storage()
          .ref(`blocks/${user.uid}/${filename.value}${platform}`);
        const task = ref.putString(xml.value, undefined, {
          contentType: "text/xml"
        });
        task.on(
          "state_changed",
          function(snapshot) {
            //Saving
            snapshot;
          },
          function(error) {
            toast.error(error.message);
          },
          function() {
            currentFileRef.value = ref;
            toast.success(filename.value + " " + t("Successfully Saved") + "!");
            isSaved.value = true;
          }
        );
      } else {
        save();
      }
    };

    return {
      filename,
      blocklyNew,
      openModal,
      userData,
      save,
      mode,
      open,
      shareModalOpen,
      listFirebaseFiles,
      openFilesModal,
      saveFirebaseFile,
      currentFileRef,
      isUser
    };
  }
};
</script>

<style scoped>
nav {
  background-color: #1b173d;
}

nav .menu > * {
  margin-right: 1rem;
}

nav .brand {
  padding: 0px;
}

.logo {
  margin-right: 1rem;
}

.menu {
  float: left;
}

.burger {
  color: white;
}

.settingsButton {
  margin-right: 10px;
  padding: 0px 5px;
}

.login {
  color: white;
  border-radius: 5px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  float: right;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
}

.login a {
  background: rgba(0, 0, 0, 0);
}

.floatRight {
  float: right;
}

.noMarginButton {
  margin-right: 0px !important;
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
  width: 238px;
  color: black;
  border: solid white 1px !important;
  font-weight: bold;
  border-radius: 10px;
}

.burger {
  text-align: right;
}
</style>
