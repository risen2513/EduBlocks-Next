<template>
    <nav class="demo">
    <a href="#" class="brand">
        <img class="logo" src="https://i.ibb.co/2Zp0pyw/weblogo.png" />
    </a>

  <!-- responsive-->
  <input id="bmenub" type="checkbox" class="show">
  <label for="bmenub" class="burger pseudo button">menu</label>

  <div class="menu">
    <a href="#" class="button icon-picture" v-for="option in options" :key="option.title">{{option.title}}</a>
  </div>

</nav>
</template>

<script lang="ts">
import EButton from './Button.vue'
export default {
    name: 'Nav',
    components: {
        EButton
    },
    data() {
        return {
            options: [
                {title: "Open", class: ""},
                {title: "Save", class: ""},
                {title: "New", class: ""},
            ]
        }
    }
}
</script>

<style scoped> 
nav {
    background-color: #1B173D;
}
</style>