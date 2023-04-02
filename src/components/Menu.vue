<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand">Simulador de Tweets</span>

            <button 
                class="btn pl-4 pr-4" 
                @click="openCloseForm"
                :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
            >
                {{ !showForm ? "Nuevo Tweet" : "Cerrar Tweet" }}
            </button>
        </div>
    </nav>
</template>

<script setup>
import { useTweetStore } from '../stores/tweet';
import { storeToRefs } from 'pinia';

const storeTweet = useTweetStore()

const { showForm } = storeToRefs(storeTweet);

const { openCloseForm } = storeTweet;

</script>