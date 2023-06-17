<template>
    <div class="container">
        <div class="logo_container">

        </div>
        <div class="buttons_container">
            <ul class="buttons_list">
                <li class="button" v-if="this.$route.name !== 'about'">
                    <router-link to="about">Об авторах</router-link>
                </li>
                <li class="button" v-if="this.$route.name !== 'landing'">
                    <router-link to="/">Назад</router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vHeader',
    components: {}
}
</script>

<style>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: .5rem 1rem .5rem 1rem;

    height: 3.5rem;
    background: transparent;
    //border: 3px black solid;
}

.logo_container, .buttons_container {
    min-width: 30rem;
    border: 2px solid red;
}

.buttons_list {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-content: center;
    margin: 1rem;

    gap: 2rem;
    border: 2px solid red;
}
</style>
