<template>
  <transition name="fade">
    <div class="modal">
      <input :id="identifier" type="checkbox" :checked="visible" />
      <label
        :for="[clickToExit === true ? identifier : 'whoops']"
        class="overlay"
      ></label>
      <article>
        <slot></slot>
      </article>
    </div>
  </transition>
</template>

<script lang="ts">
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
