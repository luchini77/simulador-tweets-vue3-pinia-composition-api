<template>
    <div class="container">
        <h1 class="text-center mb-4">Lista de Tweets</h1>
        <p v-if="allTweets.length === 0">No hay ningun tweets...</p>
        <div class="tweet" v-for="tweet in allTweets" :key="tweet.id">
            <p class="tweet_titulo">{{ tweet.nombre }}</p>
            <p class="tweet_text">{{ tweet.tweet }}</p>
            <span>{{ formatDate(tweet.fechaCreacion) }}</span>
            <p><i class="fa-solid fa-circle-xmark" @click="eliminarTweet(tweet.id)"></i></p>
        </div>
    </div>
</template>

<script setup>
// import moment from "moment"
// import "moment/locale/es"
import { useTweetStore } from '../stores/tweet';
import { storeToRefs } from 'pinia';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs'
import { es } from "dayjs/locale/es";
import { computed } from 'vue';

const storeTweet = useTweetStore()

const { allTweets } = storeToRefs(storeTweet);




const formatDate = (fecha) => {
    dayjs.extend(relativeTime);
    return dayjs(fecha).locale('es').fromNow();
}

const eliminarTweet = (id) => {
    storeTweet.eliminar(id)
}

</script>

<style scoped>
.tweet {
    position: relative;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p{
    margin: 0;
}

.tweet_titulo{
    position: absolute;
    top: -12px;
    left: 10px;
    background-color: #fff;
    padding: 0 10px;
    font-weight: bold;
}

.tweet_text{
    color: grey;
}

span{
    position: absolute;
    right: 10px;
    bottom: -9px;
    font-size: 12px;
    color: grey;
    background-color: #fff;
    padding: 0 20px;
    border: 1px solid #ccc;
}

i{
    width: 20px;
    height: 20px;
}

i:hover {
    cursor: pointer;
    color: #f00;
}
</style>