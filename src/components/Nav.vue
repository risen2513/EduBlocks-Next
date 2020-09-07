<template>
    <nav class="demo">
    <a href="#" class="brand">
        <img class="logo" src="https://i.ibb.co/2Zp0pyw/weblogo.png" />
    </a>

  <!-- responsive-->
  <input id="bmenub" type="checkbox" class="show">
  <label for="bmenub" class="burger pseudo button">menu</label>

  <div class="menu">
    <input class="filename" placeholder="Untitled"/>
    <a href="#" v-for="option in options" :class="option.class" class="button" :key="option.title" @click="save()">
        <font-awesome-icon v-if="option.icon" class="button-icon" :icon="option.icon"/>
        {{option.title}}
    </a>
  </div>

</nav>
</template>

<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import EButton from './Button.vue'

export default {
    name: 'Nav',
    components: {
        EButton,
        FontAwesomeIcon
    },
    data() {
        return {
            options: [
                {title: "Save", class: "green-button", icon: ['fas', "save"]},
                {title: "Share", class: "white-button", icon: ['fas', "share-alt"]},
                {title: "Files", class: "white-button", icon: ['fas', "folder-open"]},
                {title: "New", class: "white-button", icon: ['fas', "plus"]}
            ]
        }
    },
    methods: {
        save(){
            alert("Save");
        }
    }
}
</script>

<style scoped> 
nav {
    background-color: #1B173D;
}

nav .menu>* {
    margin-right: 20px;
}

nav .brand {
    padding: 0px;
}

.menu {
    float: left;
}

.button-icon {
    margin: 0 0.6em 0 0;
}

.white-button {
    margin-top: 7px;
    border: solid white 1px !important;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
}

.green-button {
    margin-top: 7px;
    border: solid #49B04D 1px !important;
    background-color: #49B04D;
    border-radius: 10px;
}

.filename {
    width: 210px; 
    color:black; 
    border: solid white 1px !important;
    margin-left: 5px; 
    border-radius: 10px;
}
</style>