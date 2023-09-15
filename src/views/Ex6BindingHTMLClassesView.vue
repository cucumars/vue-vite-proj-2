<script setup>
import { ref, watch, reactive, computed } from 'vue'

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
// ------------------------------------------------------------
const items = ref([
  { message: 'Foo' },
  { message: 'Bar' }
])
// ------------------------------------------------------------
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
// ------------------------------------------------------------
const todos = ref([
  { name: '萬鹿狂奔', isComplete: false },
  { name: '舞鹿亂滑', isComplete: true },
  { name: '一鹿狂飆', isComplete: false },
]);
// -----------------------------------------------------------
const tryItem = ref('');
// `items` is a ref with array value
tryItem.value = items.value.filter((item) => item.message.match(/Foo/));
// -----------------------------------------------------------
const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}
// -----------------------------------------------------------
const name = ref('Vue.js')
// event handler
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
// -----------------------------------------------------------
function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>

<template>
  <div :class="{ active: isActive }">aaaa</div>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError, red: hasError }">bbbbb </div>
  <div :class="classObject">classObject</div>
  <div :class="classObject2">classObject2</div>
  <li v-for="item in items">
    {{ item.message }}
  </li>
  <!-- 解構 -->
  <li v-for="{ message } in items">
    {{ message }}
  </li>
  <li v-for="({ message }, index) in items">
    {{ message }} {{ index }}
  </li>
  AAAA
  <!-- 使用 of -->
  <div v-for="item of items">
    of {{ item.message }}
  </div>
  <li v-for="{ message } in items">
    ssss{{ message }}
  </li>

  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
  <span v-for="n in 10">{{ n }}</span>
  <ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <!-- <li class="divider" role="presentation"></li> -->
    </template>
  </ul>
  <!-- When they exist on the same node, v-if has a higher priority than v-for. That means the v-if condition will not have access to variables from the scope of the v-for: -->
  <!--
  This will throw an error because property "todo"
  is not defined on instance.
  -->
  <!-- <li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo.name }}
  </li> -->
  <!-- This can be fixed by moving v-for to a wrapping <template> tag (which is also more explicit): -->
  <template v-for="todo in todos" :key="todo.name">
    <li v-if="!todo.isComplete">
      {{ todo.name }} 尚未完成
    </li>
  </template>
  <!-- above The key binding expects primitive values - i.e. strings and numbers.
  Do not use objects as v-for keys. 
  For detailed usage of the key attribute, please see the key API documentation. -->
  <!--  -->
  <div> AAAA {{ tryItem }} </div>
  <!--  -->
  <ul v-for="numbers in sets">
    <li v-for="n in even(numbers)">{{ n }}</li>
  </ul>
  <!-- Be careful with reverse() and sort() in a computed property!
   These two methods will mutate the original array, 
   which should be avoided in computed getters. 
   Create a copy of the original array before calling these methods:
  -->
  <!-- - return numbers.reverse()
  + return [...numbers].reverse() -->
  <!--  -->
  <!-- `greet` is the name of the method defined above -->
  <button @click="greet">Greet</button>
  <!-- ---------------------------------------------------------- -->
  <!-- Accessing Event Argument in Inline Handlers​
  Sometimes we also need to access the original DOM event in an inline handler.
  You can pass it into a method using the special $event variable, or use an inline arrow function: -->
  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
</template>


<style scoped>
.active {
  color: blue;
}

.red {
  color: red;
}
</style>