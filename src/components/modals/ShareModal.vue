<template>
  <div class="shareModal">
    <div class="left">
      <div class="leftContainer">
        <img src="/assets/images/logos/mainlogo.png" />
      </div>
    </div>
    <div class="right">
      <h1 class="shareTitle">
        {{ $t("Share") }}
        <a class="close" @click="closeModal">{{ $t("Close") }}</a>
      </h1>
      <label>{{ $t("Shareable URL") }}</label>
      <div class="shareURL">
        <input type="text" v-model="shortLink" readonly />
        <button
          v-clipboard:copy="shortLink"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
        >
          {{ $t("Copy") }}
        </button>
      </div>
      <label>{{ $t("Embed Code") }}</label>
      <div class="shareURL">
        <input type="text" v-model="embed" readonly />
        <button
          v-clipboard:copy="embed"
          v-clipboard:success="onSuccess"
          v-clipboard:error="onError"
        >
          {{ $t("Copy") }}
        </button>
      </div>
      <label>{{ $t("External Sharing Options") }}</label>
      <button class="shareButton teams" @click="teams">
        <font-awesome-icon
          class="button-icon"
          :icon="['fas', 'user-friends']"
        />
        {{ $t("Share to Microsoft Teams") }}
      </button>
      <button class="shareButton classroom" @click="classroom">
        <font-awesome-icon class="button-icon" :icon="['fab', 'google']" />
        {{ $t("Share to Google Classroom") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { closeModal } from "@/scripts/state/useModalState";
import { shortLink } from "@/scripts/state/useState";
import { useToast } from "vue-toastification";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, Ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "ShareModal",
  components: {
    FontAwesomeIcon
  },
  setup() {
    const toast = useToast();

    const { t } = useI18n();

    const embed: Ref<string> = ref(
      '<iframe src="' +
        shortLink.value +
        'height="600px" width="900px"></iframe>'
    );

    const onSuccess: Function = () => {
      toast.success(t("ClipboardCopy"));
    };

    const onError: Function = () => {
      toast.error(t("ClipboardError"));
    };

    const classroom: Function = () => {
      window.open(
        "https://classroom.google.com/u/0/share?url=" +
          encodeURIComponent(shortLink.value) +
          "&usegapi=1&id=I0_1591303124637&parent=https%3A%2F%2Fwww.gstatic.com&pfname=%2FI0_1591303123749&rpctoken=58755424&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.utl9jrRztb8.O%2Fam%3DwQE%2Fd%3D1%2Fct%3Dzgms%2Frs%3DAGLTcCOUgIiKp6EMsn7UOgLQFm23i5pjzQ%2Fm%3D__features__",
        "1591307119253",
        "width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=600,top=300"
      );
    };

    const teams: Function = () => {
      window.open(
        "https://teams.microsoft.com/share?href=" +
          encodeURIComponent(shortLink.value),
        "1591307119253",
        "width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=600,top=300"
      );
    };

    return {
      closeModal,
      shortLink,
      onSuccess,
      onError,
      embed,
      classroom,
      teams
    };
  }
};
</script>

<style scoped>
.shareModal {
  height: 440px;
  width: 755px;
  display: flex;
}

.button-icon {
  margin: 0 0.6em 0 0;
}

.shareURL {
  display: flex;
  margin-top: 0.6rem;
  margin-bottom: 1rem;
}

.leftContainer img {
  width: 218px;
  margin-top: 40px;
}

.shareButton {
  margin-top: 0.6rem;
  width: 100%;
}

.shareURL input {
  width: 70%;
}

.shareURL button {
  width: 30%;
  margin: 0;
  margin-left: 15px;
  background-color: #e71d64;
}

label {
  font-weight: 700;
}

.left {
  width: 35%;
  background: url("/assets/images/logos/background.png") center center/cover
    no-repeat !important;
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
  top: 30%;
  position: absolute;
  margin: 0;
  text-align: center;
  color: white;
}

.close {
  font-size: 20px !important;
  margin-top: 26px;
}

.shareTitle {
  margin-bottom: 1.5rem;
}

.card .close,
.modal .overlay ~ * .close {
  top: 0.6em;
  right: 0.7em;
}

.teams {
  background-color: #5359af;
}

.classroom {
  background-color: #279f5d;
}
</style>
