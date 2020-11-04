import { ref } from "vue";

type Modals = "" | "PlatformSelect" | "Settings";

export const currentModal = ref<Modals>("");

export const openModal: Function = (modal: Modals) => {
  currentModal.value = modal;
};

export const closeModal: Function = () => {
  currentModal.value = "";
};
