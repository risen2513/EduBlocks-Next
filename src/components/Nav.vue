<template>
  <nav class="demo">
    <a href="#" class="brand" @click="openModal('PlatformSelect')">
      <img class="logo" src="/assets/images/logos/mainlogo.png" />
    </a>

    <input id="bmenub" type="checkbox" class="show" />
    <label for="bmenub" class="burger pseudo button">menu</label>

    <div class="login">
      <a class="button" @click="openModal('LoginModal')" v-if="!userData"
        ><font-awesome-icon
          class="button-icon"
          :icon="['fas', 'sign-in-alt']"
        />
        Login
      </a>
      <UserAvatar v-if="userData" />
    </div>

    <div class="menu">
      <input class="filename" placeholder="Untitled" v-model="filename" />
      <a href="#" class="button green-button" @click="saveFirebaseFile">
        <font-awesome-icon class="button-icon" :icon="['fas', 'save']" />
        Save
      </a>
      <a href="#" class="button white-button" @click="openModal('FilesModal')">
        <font-awesome-icon class="button-icon" :icon="['fas', 'share-alt']" />
        Share
      </a>
      <a href="#" class="button white-button" @click="openFilesModal">
        <font-awesome-icon class="button-icon" :icon="['fas', 'folder-open']" />
        Files
      </a>
      <a href="#" class="button white-button" @click="blocklyNew">
        <font-awesome-icon class="button-icon" :icon="['fas', 'plus']" />
        New
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { blocklyNew } from "./blockly/Blockly";
import { filename, save, userData, mode, xml } from "../scripts/state/useState";
import { openModal } from "@/scripts/state/useModalState";
import UserAvatar from "@/components/UserAvatar.vue";
import { listFirebaseFiles } from "@/scripts/state/useFirebase";
import firebase from "firebase";
import { useToast } from "vue-toastification";

export default {
  name: "Nav",
  components: {
    FontAwesomeIcon,
    UserAvatar
  },
  setup() {
    const toast = useToast();

    const openFilesModal = () => {
      listFirebaseFiles();
      openModal("FilesModal");
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
            const progress = snapshot.bytesTransferred / snapshot.totalBytes;
            console.log(progress);
          },
          function(error) {
            toast.error(error.message);
          },
          function() {
            toast.success(filename.value + " Sucessfully Saved!");
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
      listFirebaseFiles,
      openFilesModal,
      saveFirebaseFile
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
</style>
