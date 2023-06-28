<template>
    <div class="container">
        <div class="buttons_container">
            <ul class="buttons_list">
                <li class="button">
                    <router-link :to="this.route" class="router-button"> {{this.placeholder}} </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vRouterButton',
    components: {},
    props: {
        placeholder: {
            type: String,
            default: 'Button'
        },
        route: {
            type: String,
            default: ''
        }
    }
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
    background: var(--border-color-bg);
//border: 3px black solid;
}

.buttons_container {
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
}
.router-button {
    padding: .3rem .5rem;
    width: 9rem;
    border: 2px solid var(--border-color-bg-2);
    border-radius: .5rem;
    transition: .5s;
    text-decoration: none;
    color: var(--text-router-button-dark);
}

.router-button:hover {
    padding: .3rem .5rem;
    transition: .5s;
    border-radius: .5rem;
    border: 2px solid white !important;
    color: white;
}

.router-button:hover {
    border: 2px solid blue;
    transition: .5s;
}
</style>
