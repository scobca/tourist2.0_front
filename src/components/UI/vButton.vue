<template>
    <div class="button_container">
        <p class="button_block" @click="$emit('click')"> {{this.placeholder}} </p>
    </div>
</template>

<script>
export default {
    name: 'vButton',
    props: {
        placeholder: {
            type: String,
            default: 'button'
        }
    }
}
</script>

<style>
.button_container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    min-width: 10rem;
    font-size: 1.25rem;

    border: 3px solid initial;
    border-radius: .75rem;
    background: linear-gradient(150deg, #3767e3 13.57%, #3987a4 98.35%);
    color: var(--text-button-color);
}
</style>
