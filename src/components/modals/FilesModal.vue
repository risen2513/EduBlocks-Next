<template>
  <div class="filesModal">
    <div class="left">
      <!-- <div v-for="file in files" :key="file.label">
        <button @click="openFirebaseFile(file.ref)">{{ file.label }}</button>
      </div> -->
      <div class="leftContainer" v-if="user">
        <img v-if="user.photoURL" :src="user.photoURL" class="profileImage" />
        <img
          v-else
          src="/assets/images/global/default-profile-image.png"
          class="profileImage"
        />
        <h1>{{ greet() }}</h1>
        <span>{{ user.displayName }}</span
        ><br />
        <button class="localFileButton" @click="open">Open local file</button>
      </div>
    </div>
    <div class="right">
      <h1 class="filesTitle">
        Files
        <a class="close" @click="closeModal">Close</a>
      </h1>
      <div class="file-list" :key="fileListKey">
        <table type="primary">
          <tbody>
            <tr v-for="file in files" :key="file.label">
              <td>{{ file.label }}</td>
              <td class="file-buttons">
                <font-awesome-icon
                  class="open-button"
                  :icon="['far', 'folder-open']"
                  @click="openFirebaseFile(file.ref)"
                />
                <font-awesome-icon
                  class="close-button"
                  :icon="['far', 'times-circle']"
                  @click="deleteFile(file.ref)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  listFirebaseFiles,
  openFirebaseFile,
  deleteFile
} from "@/scripts/state/useFirebase";
import { files, fileListKey } from "@/scripts/state/useState";
import { open } from "@/scripts/functions";
import firebase from "firebase";
import { ref } from "vue";
import { closeModal } from "@/scripts/state/useModalState";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FilesModal",
  components: {
    FontAwesomeIcon
  },
  setup() {
    const user = ref(firebase.auth().currentUser);

    const greet = () => {
      const myDate = new Date();
      let greet;
      const hrs = myDate.getHours();
      if (hrs < 12) greet = "Morning,";
      else if (hrs >= 12 && hrs <= 17) greet = "Afternoon,";
      else if (hrs >= 17 && hrs <= 24) greet = "Evening,";
      return greet + "\n";
    };

    return {
      listFirebaseFiles,
      files,
      openFirebaseFile,
      user,
      greet,
      closeModal,
      open,
      fileListKey,
      deleteFile
    };
  }
};
</script>

<style scoped>
.filesModal {
  height: 455px;
  width: 755px;
  display: flex;
}

.left {
  width: 35%;
  background: #1b173d;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 100%;
  display: table;
  text-align: center;
}

.right {
  width: 65%;
  background: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 25px;
}

.profileImage {
  width: 125px;
  border-radius: 100%;
  margin: 0 auto;
  height: 125px;
}

.leftContainer {
  display: table-cell;
  vertical-align: middle;
  color: white;
}

span {
  font-size: 20px;
}

.localFileButton {
  background-color: #e71d64;
  margin-top: 1.2rem;
}

.close {
  font-size: 20px !important;
  margin-top: 26px;
}

.fileTitle {
  margin-bottom: 1.5rem;
}

.file-list {
  height: 80%;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 1rem;
}

.open-button {
  margin-right: 17px;
}

table tr {
  height: 50px;
}

table {
  width: 100%;
}

.card .close,
.modal .overlay ~ * .close {
  top: 0.6em;
  right: 0.7em;
}

.file-buttons {
  font-size: 20px;
  padding: 0;
  width: 20%;
}

.open-button {
  margin-right: 17px;
  color: #4455a5;
  cursor: pointer;
}

.close-button {
  color: #e71d64;
  cursor: pointer;
}
</style>
