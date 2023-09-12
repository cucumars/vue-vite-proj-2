<script setup>
import { ref, onMounted, reactive } from 'vue';

const count = ref(10);

console.log(111,count); // { value: 0 }
console.log(count.value); // 10

count.value++
console.log(count.value); // 11

function increment() {
  // .value is needed in JavaScript
  count.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: ['foo','bar']
})

// const state = reactive({ count: 0 });

function mutateDeeply() {
  console.log(9,obj);
  // these will work as expected.
  obj.value.nested.count++;
  obj.value.arr.push('baz');
  console.log(19,obj);
}
// const state = reactive({ count: 0 });
onMounted(() => {
  const target = {
    message1: "hello",
    message2: "everyone",
  };

  const handler1 = {};
  const proxy1 = new Proxy(target,handler1);
  console.log(proxy1);
  console.log(proxy1.message1); // hello
  console.log(proxy1.message2); // world

  const handler2 = {

    get(target,prop,receiver) {
      console.log(222,prop);
      return "world";
    },
  };

  const proxy2 = new Proxy(target,handler2);
  console.log(220,proxy2);
  console.log(proxy2.message1); // world
  console.log(proxy2.message2); // world

  const handler3 = {
    get(target,prop,receiver) {
      if (prop === "message2") {
        return "world";
      }
      return Reflect.get(...arguments);
    },
  };

  const proxy3 = new Proxy(target,handler3);
  console.log(proxy3);
  console.log(proxy3.message1); // hello
  console.log(proxy3.message2); // world

  mutateDeeply();
});
const state = reactive({ count: 0 });
// --------------------------------------------
const raw = {}
const proxyRaw1 = reactive(raw)
const proxyRaw2 = reactive(raw)

// proxy is NOT equal to the original.
console.log(555, proxyRaw1 === raw) // false
console.log(555, proxyRaw1 === proxyRaw2) // false
// --------------------------------------------

const proxy3 = reactive({})

const raw3 = {}
proxy3.nested = raw3

console.log(proxy3.nested === raw3) // false
console.log(666, proxy3.nested === reactive(raw3)) // true
</script>
<template>
  <div>
    <p>This count is:</p>
    <span @click="count++">{{ count }}</span>
    <button @click="increment"> {{ count }} </button>
    <!-- <div>{{ mutateDeeply() }}</div> -->
    <p>This state count is:</p>
    <button @click="state.count++"> {{ state.count }} </button>
  </div>
</template>