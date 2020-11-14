/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <transition name="fade">
    <div class="modal">
      <input :id="identifier" type="checkbox" :checked="visible" />
      <label @click="closeModal" class="overlay"></label>
      <article>
        <slot></slot>
      </article>
    </div>
  </transition>
</template>

<script>
import { currentModal } from "@/scripts/state/useModalState";

export default {
  name: "modal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    identifier: String,
    clickToExit: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const closeModal = () => {
      if (props.clickToExit) {
        currentModal.value = "";
      }
    };

    return { closeModal };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
