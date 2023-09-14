<script setup>
import { ref,watch,reactive,computed } from 'vue'

const isActive = ref(true)
const hasError = ref(true)
const classObject = reactive({
  active: true,
  'text-danger': false
})
//----------------------------------
const isActive2 = ref(true)
const error = ref(null)


const classObject2 = computed(() => ({
  active: isActive2.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
// -------------------------------------------------
const items = ref([{ message: 'Foo' },{ message: 'Bar' }])

</script>

<template>
  <div :class="{ active: isActive }">aaaa</div>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError, red: hasError }">bbbbb </div>
  <div :class="classObject">classObject</div>
  <div :class="classObject2">classObject2</div>
  <li v-for="item in items"> {{ item.message }} </li>
  <li v-for="{ message } in items">
     {{ message }}
  </li>
  <li v-for="({ message }, index) in items">
   {{ message }} {{ index }}
  </li>
</template>

<style scoped>
.active {
  color: blue;
}

.red {
  color: red;
}
</style>