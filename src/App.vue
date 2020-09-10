<template>
<div class="flex-1">
    <Nav />
    <Toolbar />
    <div class="page">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import Nav from './components/Nav.vue'
import Toolbar from './components/Toolbar.vue'

export default {
    name: 'app',
    components: {
        Nav,
        Toolbar
    }
}
</script>

<style>
h1{
    padding: 0px !important;
}

.page{
    height: 100vh;
    position: relative;
    padding-top: 5.255em;
    background-color: white;
}

.blocklyToolboxDiv {
    background-color: #585858 !important;
    color: #FFFFFF !important;
}

div.blocklyTreeRow {
    border-radius: 4px;
    padding-left: 6px !important;
}
.blocklyTreeRow {
    height: 51px !important;
}

.blocklyFlyoutBackground {
    fill: #444;
    fill-opacity: .8;
}

.blocklyTreeIconCustom {
    background: none !important;
    font-family: 'Font Awesome\ 5 Free';
    font-weight: 900;
    font-size: 1.3rem;
    margin: 0 .25em;
    width: 30px !important;
    height: 100% !important;
    line-height: 51px;
    min-height: 45px;
    vertical-align: middle;
}

.blocklyTreeIconCustom.imports::before {
    content: "\f093";
}

</style>
