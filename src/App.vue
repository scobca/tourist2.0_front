<template>
    <v-header/>
    <router-view/>
</template>


<script>
import VHeader from "@/components/vHeader.vue";

export default {
    name: 'app',
    components: {VHeader}
}
</script>


<style>
:root {
    --text-color-light: hsl(210, 29%, 24%);
    --text-color-dark: hsl(208, 50%, 54%);
    --border-color-hold: hsl(153, 47%, 49%);
}
</style>
