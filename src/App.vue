<template>
    <div class="main_container">
        <div class="info_container">
            <v-header/>
            <router-view/>
        </div>
        <div class="right_slide">
            <p></p>
        </div>
    </div>
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
    /*text*/
    --text-color-light: hsl(210, 29%, 24%);
    --text-color-dark: hsl(208, 50%, 54%);

    /*border*/
    --border-color-light: hsl(210, 29%, 24%);
    --border-color-dark: hsl(208, 50%, 54%);
    --border-color-bg: #f6f2f2 //buttons
}

.main_container {
    display: grid;
    grid-template-columns: 14fr 1fr;
}

.right_slide {
    height: 100vh;
    //background: linear-gradient(0deg, #0e42ce 13.57%, #3987a4 98.35%);
    background: radial-gradient(circle at right, #0e42ce 13.57%, #3987a4 98.35%);
}
</style>
