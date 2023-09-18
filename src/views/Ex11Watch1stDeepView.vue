<script setup>
import { ref, watch, reactive } from 'vue'

// Deep Watchers
// When you call watch() directly on a reactive object,
// it will implicitly create a deep watcher
// - the callback will be triggered on all nested mutations:

const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // fires on nested property mutations
  // Note: `newValue` will be equal to `oldValue` here
  // because they both point to the same object!
  console.log(`xxxx count is: ${obj.count}`)
})



// This should be differentiated with a getter 
// that returns a reactive object - in the latter case,
// the callback will only fire if the getter returns a different object:

// watch(
//   () => state.someObject,
//   () => {
//     // fires only when state.someObject is replaced
//   }
// )
// // instead, use a getter:
watch(
  () => obj.count,
  (countx) => {
    console.log(`yyyy count is: ${countx}`)
  }
)

// obj.count++;
// You can, however, 
// force the second case into a deep watcher 
// by explicitly using the deep option:
// watch(
//   () => state.someObject,
//   (newValue, oldValue) => {
//     // Note: `newValue` will be equal to `oldValue` here
//     // *unless* state.someObject has been replaced
//   },
//   { deep: true }
// )
// 謹慎使用

// 深度監視需要遍歷被監視對像中的所有嵌套屬性，
// 並且在大型數據結構上使用時可能會很昂貴。僅在必要時使用它，並註意性能影響
watch(
  () => obj.count,
  (countx) => {
    console.log(`yyyy count is: ${ obj.count}`)
  },
  { deep: true }
)

// obj.count++;

// Eager Watchers​
// watch is lazy by default: the callback won't be called until the watched source has changed. But in some cases we may want the same callback logic to be run eagerly - for example, we may want to fetch some initial data, and then re-fetch the data whenever relevant state changes.
// We can force a watcher's callback to be executed immediately by passing the immediate: true option:

watch(obj, (newValue, oldValue) => {
  // executed immediately, then again when `source` changes
  console.log(`zzz count is: ${obj.count}`)
}, { immediate: true })


obj.count++;

</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="obj.count" />
  </p> 

</template>