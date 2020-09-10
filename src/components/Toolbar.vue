<template>
    <div class="toolbar">
        <div class="toolbar-column">
            <a href="#" v-for="option in left" :class="option.class" class="button" :key="option.title">
                <font-awesome-icon v-if="option.icon" class="button-icon" :icon="option.icon"/>
                {{option.title}}
            </a>
        </div>
        <div class="toolbar-column">
            <a href="#" v-for="option in right" :class="option.class" class="button right" :key="option.title" @click="option.func">
                <font-awesome-icon v-if="option.icon" class="button-icon" :icon="option.icon"/>
                {{option.title}}
            </a>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { mapState, mapMutations } from "vuex";

export default {
    name: 'toolbar',
    components: {
        FontAwesomeIcon
    },
    computed: {
        ...mapState(["pythonCode"]),
    },
    data() {
        return {
            left: [
                {title: "Split", class: "orange toolbar-opacity", icon: ['fas', "columns"]},
                {title: "Blocks", class: "pink toolbar-opacity", icon: ['fas', "cube"]},
                {title: "Python", class: "purple toolbar-opacity", icon: ['fab', "python"]},
            ],
            right: [
                {title: "Run", class: "green no-margin-right", icon: ['fas', "play"], func: this.showCode}
            ]
        }
    },
    methods: {
        showCode() {
            alert(this.pythonCode)
        }
  }
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

.right {
    float: right;
}

.no-margin-right {
    margin-right: 0 !important;
}

.green {
    background-color: #49B04D;
}

.button-icon {
    margin: 0 0.4em 0 0;
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