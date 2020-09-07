<template>
    <button class='warning icon login'>Warning</button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'EButton'
}
</script>

<style>
  .icon::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }

  .login::before {
    font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f007";
  }
</style>