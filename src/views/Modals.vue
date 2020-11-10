<template>
  <div>
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
      identifier="SettingsModal"
      :visible="currentModal === 'SettingsModal'"
      :clickToExit="true"
    >
      <SettingsModal />
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import { openModal, currentModal } from "@/scripts/state/useModalState";
import { switchMode } from "@/scripts/state/useState";

import FourBoxModal from "@/components/modals/FourBoxModal.vue";
import LoginModal from "@/components/modals/LoginModal.vue";
import FilesModal from "@/components/modals/FilesModal.vue";
import ShareModal from "@/components/modals/ShareModal.vue";
import SettingsModal from "@/components/modals/SettingsModal.vue";

export default {
  name: "modals",
  components: {
    Modal,
    FourBoxModal,
    LoginModal,
    FilesModal,
    ShareModal,
    SettingsModal
  },
  setup() {
    openModal("PlatformSelect");

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

    return { currentModal, platformSelectOptions };
  }
};
</script>
