<script setup>
import { ref, watch, reactive } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

// ----------------------------------------------
const x = ref(0)
const y = ref(10)

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter
watch(
  () => x.value*1 + y.value*1,
  (sumx) => {
    console.log(`sum of x + y is: ${sumx}`)
  }
)

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})
// --------------------------------------------
const obj = reactive({ count: 10 })

// this won't work because we are passing a number to watch()
// watch(obj.count, (count) => {
//   console.log(`count is: ${count}`)
// })

// instead, use a getter:
watch(
  () => obj.count,
  (countx) => {
    console.log(`count is: ${countx}`)
  }
)
</script>

<template>
  <p>aaa</p>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <p>
    Ask a yes/no question:
    <input v-model="x" />
  </p>
  <p>
    Ask a yes/no question:
    <input v-model="obj.count" />
  </p>

</template>