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

<style scoped>
h1{
    padding: 0px !important;
}

.page{
    height: 100vh;
    position: relative;
    padding-top: 5.271em;
    background-color: white;
}
</style>
