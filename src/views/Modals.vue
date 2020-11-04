<template>
  <Modal
    identifier="PlatformSelect"
    :visible="currentModal === 'PlatformSelect'"
    :clickToExit="false"
  >
    <FourBoxModal :options="platformSelectOptions" />
  </Modal>
</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import { openModal, currentModal } from "@/scripts/state/useModalState";
import { switchMode } from "@/scripts/state/useState";
import FourBoxModal from "@/components/modals/FourBoxModal.vue";

export default {
  name: "modals",
  components: {
    Modal,
    FourBoxModal
  },
  setup() {
    openModal("PlatformSelect");

    const platformSelectOptions = [
      {
        title: "Python 3",
        key: "python",
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
        key: "pi",
        image: "/assets/images/platforms/raspberrypi.png",
        func: switchMode
      },
      {
        title: "CircuitPython",
        key: "circuitpython",
        image: "/assets/images/platforms/circuitpython.png",
        func: switchMode
      }
    ];

    return { currentModal, platformSelectOptions };
  }
};
</script>
