<template>
    <div class="toolbar">
        <div class="toolbar-column">
            <a href="#" v-for="option in options" :class="option.class" class="button" :key="option.title">
                <font-awesome-icon v-if="option.icon" class="button-icon" :icon="option.icon"/>
                {{option.title}}
            </a>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    name: 'toolbar',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            options: [
                {title: "Split", class: "orange toolbar-opacity", icon: ['fas', "columns"]},
                {title: "Blocks", class: "pink toolbar-opacity", icon: ['fas', "cube"]},
                {title: "Python", class: "purple toolbar-opacity", icon: ['fab', "python"]},
            ]
        }
    },
}
</script>

<style scoped>
.orange {
    background-color: rgb(235, 154, 64);
}

.pink {
    background-color: rgb(214, 54, 100);
}

.purple {
    background-color: rgb(68, 87, 160);
}

.toolbar-opacity {
    opacity: 40%;
    -webkit-opacity: 0.4;
    visibility: visible;
}

.toolbar {
    margin-top: 48px;
    height: 2.5em;
    background-color: #343350;
    display: flex;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}

.toolbar a {
    margin-right: 0.6em;
    height: 2.5em;
    border-radius: 0px;
}

.toolbar-column {
    flex: 50%;
}

.tab-button {
    display: inline-block;
    text-align: center;
    margin: 0;
    padding: 0.3em 0.9em;
    vertical-align: middle;
    background: #0074d9;
    color: #fff;
    border: 0;
    border-radius: 0.2em;
    width: auto;
    user-select: none;
    margin: 0.3em 0;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0.2em;
    height: auto;
    box-shadow: 0 0 transparent inset;
}
</style>