<script setup>
import { ref } from 'vue'
const count = ref(0);
const greeting = ref('Hello World!');
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
  <p class="greeting">{{ greeting }}</p>
</template>

<style scoped>
button {
  font-weight: bold;
}
.greeting {
  color: red;
  font-weight: bold;
}
</style>