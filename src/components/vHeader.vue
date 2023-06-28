<template>
    <div class="v-header-container">
        <div class="container">
            <div class="logo_container">
                <h1 class>
                    <img src="@/assets/svg/logo_ru_white.svg" alt="tourist_logo" class="logo">
                </h1>
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
    box-shadow: 0 0 5px #4f4f4f;
    background: rgba(7, 18, 25, 0.75);
    border-bottom: 1px solid inherit;
    border-radius: 0 0 1rem 1rem;
    width: 95vw;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;

    margin: 0;
    padding: 0 1rem;
    height: 5rem;
}

.logo_container, .buttons_container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    max-width: 40rem;
}

.logo {
    margin: 0.35rem 0 0 0;
    height: 3.5rem;
}
</style>
