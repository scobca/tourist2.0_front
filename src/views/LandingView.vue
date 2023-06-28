<template>
    <div class="landing-container">
        <div class="container main_land_container">
            <div class="landing_info">
                <div class="block">
                    <h1 class="question">Турист.ру - <br><span>больше, чем карта</span></h1>
                    <ul class="answers_list">
                        <li class="answer">
                            Приложение о Санкт-Петербурге, делящееся актуальными мероприятиями,
                            событиями дня, гибкими маршрутами, экскурсиями и различным жильем.
                        </li>
                        <li class="answer">
                            Первое приложение, собравшее в себе весь функционал, который так необходим при путешествии
                            без машины.
                        </li>
                        <li class="answer">
                            Собрано командой web-разработчиков из Санкт-Петербурга
                        </li>
                    </ul>
                </div>
            </div>
            <div class="landing_registration">
                <div class="reg_logo">
                    <double-balloon-logo/>
                </div>
                <div class="reg_block">
                    <v-button :placeholder="'Регистрация'"
                              class="reg_button"
                              @click="registration"
                              :push="true"
                              :route="'registration'"
                    />
                    <v-button :placeholder="'Вход'"
                              class="reg_button"
                              @click="login"
                              :push="true"
                    />
                    <v-button :placeholder="'Информация о нас'"
                              class="reg_button"
                              @click="aboutUs"
                              :push="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VButton from "@/components/UI/vButton.vue";
import DoubleBalloonLogo from "@/components/UI/vDBalloonLogo.vue";

export default {
    name: 'LandingView',
    components: {DoubleBalloonLogo, VButton},
    data() {

    },
    methods: {
        registration() {
            console.log('reg start')
        },
        login() {
            console.log('login start')
        },
        aboutUs() {
            console.log('about us start')
        }
    }
}
</script>

<style>
.landing-container {
//border: 3px solid black; margin-top: 3rem;
}

.main_land_container {
    display: grid;
    grid-template-columns: 3fr 5fr;
    gap: 1rem;
    min-height: 35rem;
}

.landing_info, .landing_registration {
//border: 3px solid green; display: flex; flex-direction: column;
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
    margin: 0 0 4rem 0;
//border: 3px solid red; font-size: 3.5rem; color: var(--text-button-color);
    width: 30rem;
}

.question > span {
    font-size: 2.5rem;
}

.answer {
    width: 30rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: .5rem;

    font-size: 1.25rem;
    color: var(--text-color-dark);
    text-align: left;
    list-style: none;

    background: rgba(13, 36, 49, 0.75);

    scale: 100%;
    transition: .5s;
}

.answer:hover {
    scale: 105%;
    transition: .5s;
}

.answers_list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.reg_block {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.reg_logo {
    margin: 1rem 0 2.5rem 0;
    height: 20rem;
}

.reg_button {
    width: 17rem;
    height: 3rem;
    scale: 100%;
    transition: .5s;
}

.reg_button:hover {
    scale: 105%;
    transition: .5s;
}
</style>
