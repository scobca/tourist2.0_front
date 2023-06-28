<template>
    <div class="main_container">
        <div class="info_container">
            <v-header/>
            <router-view/>
        </div>
<!--        <div class="right_slide">-->
<!--            <p></p>-->
<!--        </div>-->
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
    --text-color-dark-2: hsl(180, 36%, 96%);
    --text-button-color: hsl(180, 36%, 96%);
    --text-router-button-dark: hsl(0, 0%, 66%);

    /*border*/
    --border-color-light: hsl(210, 29%, 24%);
    --border-color-dark: hsl(208, 50%, 54%);
    --border-color-bg: hsl(0, 18%, 96%);
    --border-color-bg-2: hsl(0, 0%, 66%);
}

.main_container {
    display: grid;
    //grid-template-columns: 14fr 1fr;
    grid-template-columns: 14fr;
}

.info_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right_slide {
    height: 100vh;
    background: radial-gradient(circle at right, #0e42ce 13.57%, #3987a4 98.35%);
}
</style>
