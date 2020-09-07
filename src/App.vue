<template>
<div class="flex-1">
    <Nav />
    <div class="p-4 h-screen">
        <router-view>
        </router-view>
    </div>
</div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
    name: 'app',
    components: {
        Nav
    }
}
</script>

<style scoped>
.p-4{
    padding: 0 .6em;
}
</style>
