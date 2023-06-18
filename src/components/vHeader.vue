<template>
    <div class="container">
        <div class="logo_container">
            <h1 class="logo">Tourist.ru</h1>
        </div>
        <div class="buttons_container">
            <v-router-button
                :placeholder="'Об авторах'"
                :route="'about'"
                v-if="this.$route.name !== 'about'"
            />
            <v-router-button
                :placeholder="'Назад'"
                :route="'/'"
                v-if="this.$route.name !== 'landing'"
            />
        </div>
    </div>
</template>

<script>
import VRouterButton from "@/components/UI/vRouterButton.vue";

export default {
    name: 'vHeader',
    components: {VRouterButton}
}
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 .5rem;

    height: 3.5rem;
    background: var(--text-color-dark);
    //border: 3px black solid;
}

.logo_container, .buttons_container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    max-width: 40rem;
    //border: 2px solid red;

}

.logo {
    font-family: Allison, sans-serif;
    font-size: 4rem;
    font-weight: lighter;
}
</style>
