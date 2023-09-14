<script setup>
import { ref, onMounted, reactive, nextTick, computed } from 'vue';
const countTick = ref(0)

async function incrementX() {
  countTick.value++

  // DOM not yet updated
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick();
  // DOM is now updated
  console.log(document.getElementById('counter').textContent) // 1
}

const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)

const map = reactive(new Map([['count', ref(10)]]))
// need .value here
console.log(map.get('count').value)


const countX2 = ref(0)
const object = { id: ref(1) }
const { id } = object;


const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    console.log(999,newValue);
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
});

onMounted(() => {
  fullName.value = 'John Doe2'
  // fullName.value = '一鹿 狂飆';
});

</script>

<template>
  <div class="about">
    <h1>This is an about pagefffffdfgfdgf</h1>
  </div>
  <div>sdsdsdfgsdfds</div>
  <button id="counter" @click="incrementX">{{ countTick }}</button>
  <div>AAA-{{ countX2 + 1 }}</div>
  <p>BB-{{ id + 1 }}</p>
  {{ object.id}}
  {{ object.id + 1}}
  {{ object.id.value + 1 }}.
  {{ fullName }}
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>