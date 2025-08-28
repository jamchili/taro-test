import { defineStore } from "pinia";
import { ref } from "vue";


export const useCounterStore = defineStore('counter', () => {
  const counter = ref<number>(0)

  const addEvent = () => {
    counter.value++
  }

  return {
    counter, addEvent
  }
})