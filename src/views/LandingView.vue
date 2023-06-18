<template>
    <div class="landing-container">
        <div class="container main_land_container">
            <div class="landing_info">
                <div class="block">
                    <h1 class="question">Что такое Турист.ру?</h1>
                    <ul>
                        <li class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta modi, nihil placeat tempora ut.</li>
                        <br><li class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta modi, nihil placeat tempora ut.</li>
                        <br><li class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta modi, nihil placeat tempora ut.</li>
                    </ul>
                </div>
            </div>
            <div class="landing_registration">
                <div class="logo reg_logo">Tourist.ru logo</div>
                <div class="reg_block">
                    <v-button :placeholder="'Регистрация'"
                              class="reg_button"
                              @click="registration"
                    />
                    <v-button :placeholder="'Вход'"
                              class="reg_button"
                              @click="login"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "@/components/UI/vButton.vue";

export default {
    name: 'HomeView',
    components: {VButton},
    data() {

    },
    methods: {
        registration() {
            console.log('reg start')
        },
        login() {
            console.log('login start')
        }
    }
}
</script>

<style>
    .landing-container {
        border: 3px solid black;
    }

    .main_land_container {
        display: grid;
        grid-template-columns: 3fr 4fr;
        gap: 1rem;
        min-height: 35rem;
    }

    .landing_info, .landing_registration {
        border: 3px solid red;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
    }

    .block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .question {
        text-align: left;
        margin: 0 0 1rem 0;
    }

    .answer {
        width: 30rem;
        font-size: 1.25rem;
        list-style: circle;
        text-align: left;
    }

    .reg_block {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-top: 2rem;
    }

    .reg_logo {
        margin: 0;
    }

    .reg_button {
        width: 17rem;
    }
</style>
