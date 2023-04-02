<template>
    <div class="tweet-form container" :class="{ open: showForm }">
        <form @submit.prevent="guardarTweet">
            <input class="form-control" type="text" placeholder="Tu nombre" v-model="datosFormulario.nombre" />
            <textarea class="form-control" rows="3" placeholder="Escribe tu tweet" v-model="datosFormulario.tweet"></textarea>
            <button type="submit" class="btn btn-primary">
                Enviar Tweet
            </button>
        </form>
    </div>
</template>

<script setup>
import { useTweetStore } from '../stores/tweet';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const storeTweet = useTweetStore()

const { showForm } = storeToRefs(storeTweet);

const datosFormulario = ref({
    id:crypto.randomUUID(),
    nombre: '',
    tweet: '',
    fechaCreacion: new Date()
})

const guardarTweet = () => {
    storeTweet.getTweet(datosFormulario.value)
    datosFormulario.value.nombre = '';
    datosFormulario.value.tweet = '';
    storeTweet.openCloseForm()
}

</script>

<style scoped>
.tweet-form{
    margin-top: 20px;
    height: 0;
    overflow: hidden;
}   

.tweet-form.open{
    height: auto;
}

form{
    margin-bottom: 50px;
}
input{
    margin-bottom: 10px;
}

button{
    width: 100%;
    margin-top: 10px;
}
</style>