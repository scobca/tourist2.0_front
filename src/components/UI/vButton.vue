<template>
    <div class="button_container">
        <p class="button_block" v-if="!this.push"> {{this.placeholder}} </p>
        <router-link :to="this.route" class="v-router_button button_block" v-if="this.push"> {{this.placeholder}} </router-link>
    </div>
</template>

<script>
export default {
    name: 'vButton',
    props: {
        placeholder: {
            type: String,
            default: 'button'
        },
        push: {
            type: Boolean,
            default: false
        },
        route: {
            type: String,
            default: '/'
        }
    }
}
</script>

<style>
.button_container, .button_container .button_block {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 1rem;
    min-width: 10rem;
    font-size: 1.25rem;

    color: var(--text-button-color);
}

.button_container:hover {
    cursor: pointer;
}

.v-router_button {
    background: linear-gradient(150deg, #3767e3 13.57%, #3987a4 98.35%);
    color: var(--text-button-color);
    text-decoration: none;
}

.button_block {
    height: inherit;
    width: inherit;

    border: 3px solid initial;
    border-radius: .75rem;
    background: linear-gradient(150deg, #3767e3 13.57%, #3987a4 98.35%);
}
</style>
