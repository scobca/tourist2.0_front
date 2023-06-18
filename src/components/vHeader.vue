<template>
    <div class="v-header-container">
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
.v-header-container {
    //height: 5rem;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;

    margin: 0;
    padding: 0 1rem;
    height: 5rem;
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
    font-weight: normal;
    letter-spacing: 5px;
    margin: -.1rem 0 0 2rem;
    color: var(--text-color-light);
}
</style>
