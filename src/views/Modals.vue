<template>
  <div>
    <Modal
      identifier="WelcomeModal"
      :visible="currentModal === 'WelcomeModal'"
      :clickToExit="false"
    >
      <WelcomeModal />
    </Modal>

    <Modal
      identifier="PlatformSelect"
      :visible="currentModal === 'PlatformSelect'"
      :clickToExit="false"
    >
      <FourBoxModal :options="platformSelectOptions" />
    </Modal>

    <Modal
      identifier="LoginModal"
      :visible="currentModal === 'LoginModal'"
      :clickToExit="true"
    >
      <LoginModal />
    </Modal>

    <Modal
      identifier="FilesModal"
      :visible="currentModal === 'FilesModal'"
      :clickToExit="true"
    >
      <FilesModal v-if="currentModal === 'FilesModal'" />
    </Modal>

    <Modal
      identifier="ShareModal"
      :visible="currentModal === 'ShareModal'"
      :clickToExit="true"
    >
      <ShareModal />
    </Modal>

    <Modal
      identifier="QuestionModal"
      :visible="currentModal === 'QuestionModal'"
      :clickToExit="true"
    >
      <QuestionModal
        :yesFunc="yes"
        :noFunc="no"
        :title="$t('Just To Check')"
        :body="$t('OverwriteMessage')"
      />
    </Modal>

    <Modal
      identifier="SettingsModal"
      :visible="currentModal === 'SettingsModal'"
      :clickToExit="true"
    >
      <SettingsModal v-if="currentModal === 'SettingsModal'" />
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import {
  openModal,
  currentModal,
  closeModal
} from "@/scripts/state/useModalState";

import { switchMode } from "@/scripts/state/useState";

import FourBoxModal from "@/components/modals/FourBoxModal.vue";
import LoginModal from "@/components/modals/LoginModal.vue";
import FilesModal from "@/components/modals/FilesModal.vue";
import ShareModal from "@/components/modals/ShareModal.vue";
import SettingsModal from "@/components/modals/SettingsModal.vue";
import WelcomeModal from "@/components/modals/WelcomeModal.vue";
import QuestionModal from "@/components/modals/QuestionModal.vue";

export default {
  name: "modals",
  components: {
    Modal,
    FourBoxModal,
    LoginModal,
    FilesModal,
    ShareModal,
    SettingsModal,
    WelcomeModal,
    QuestionModal
  },
  setup() {
    if (
      !localStorage.getItem("visited") ||
      location.host === "localhost:8080"
    ) {
      openModal("WelcomeModal");
    } else {
      openModal("PlatformSelect");
    }

    const platformSelectOptions = [
      {
        title: "Python 3",
        key: "Python",
        image: "/assets/images/platforms/python.png",
        func: switchMode
      },
      {
        title: "BBC micro:bit",
        key: "microbit",
        image: "/assets/images/platforms/microbit.png",
        func: switchMode
      },
      {
        title: "Raspberry Pi",
        key: "RPi",
        image: "/assets/images/platforms/raspberrypi.png",
        func: switchMode
      },
      {
        title: "CircuitPython",
        key: "CircuitPython",
        image: "/assets/images/platforms/circuitpython.png",
        func: switchMode
      }
    ];

    const yes = () => {
      openModal("PlatformSelect");
    };

    const no = () => {
      closeModal();
    };

    return { currentModal, platformSelectOptions, yes, no };
  }
};
</script>
