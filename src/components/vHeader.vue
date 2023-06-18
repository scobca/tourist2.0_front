<template>
    <div class="container">
        <div class="logo_container">
            <h1 class="logo">Tourist.ru</h1>
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

.buttons_list {
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
    list-style: none;
    cursor: pointer;
    //border: 2px solid green;
    min-height: 2rem;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 9rem;
    height: 2rem;

    border: 2px solid purple;
    border-radius: .5rem;

    background: lightblue;
}

.logo {
    font-family: Allison, sans-serif;
    font-size: 4rem;
    font-weight: lighter;
}
</style>
