<template>
    <div class="container">
        <div class="double_logo_container">
            <img src="@/assets/svg/balls_logo.svg" alt="official_logo" class="balloon_svg_second">
            <img src="@/assets/svg/balls_logo.svg" alt="official_logo" class="balloon_svg_first">
        </div>
    </div>
</template>

<script>
export default {
    name: 'DoubleBalloonLogo',
    data() {},
    methods: {}
}
</script>

<style>
    .double_logo_container {
        display: flex;
        align-items: flex-end;
        margin: 0 -2.1rem 0 0;
        height: 20rem;
    }

    .double_logo_container:hover .balloon_svg_first {
        margin-bottom: 3rem;
        transition: 1.5s;
    }

    .double_logo_container:hover .balloon_svg_second {
        margin-right: 2rem;
        transition: 1s;
    }

    .balloon_svg_first {
        height: 20rem;
        margin: 0 0 1rem -4.2rem;
        z-index: 100;
        transition: 1.5s;
    }

    .balloon_svg_second {
        height: 10rem;
        z-index: 101;
        margin: 0;
        transition: 1s;
    }
</style>
