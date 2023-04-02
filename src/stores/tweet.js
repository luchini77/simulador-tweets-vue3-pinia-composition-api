import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTweetStore = defineStore('tweet', () => {

  const showForm = ref(false)

  const tweets = ref([])

  if (localStorage.getItem("tweets")) {
    tweets.value = JSON.parse(localStorage.getItem("tweets"));
}

  const allTweets = computed(() => tweets.value.reverse())

  const openCloseForm = () => {
    showForm.value = !showForm.value
  }

  const getTweet = (tweet) => {
    tweets.value.push(tweet)

    localStorage.setItem('tweets', JSON.stringify(tweets.value))
  }

  const eliminar = (id) => {
    tweets.value = tweets.value.filter((item) => item.id !== id);

    localStorage.setItem("tweets", JSON.stringify(tweets.value));
  }



  return {
    showForm,
    allTweets,
    openCloseForm,
    getTweet,
    eliminar
  }
})
