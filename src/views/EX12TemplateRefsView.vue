<script setup>
import { ref, onMounted, watchEffect } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const inputX = ref(null);
const inputXValue = ref('');

const list = ref([1, 2, 3, 4]);
const itemRefs = ref([]);

onMounted(() => {
    inputX.value.focus()
})


onMounted(() => {
    console.log(itemRefs.value.map(i => i.textContent));
    console.log(itemRefs.value);
})

// Note that you can only access the ref after the component is mounted.
//  If you try to access input in a template expression, 
// it will be null on the first render. 
// This is because the element doesn't exist until after the first render!

// If you are trying to watch the changes of a template ref,
//  make sure to account for the case where the ref has null value:

watchEffect(() => {
    if (inputX.value) {
        inputX.value.focus()
    } else {
        // not mounted yet, or the element was unmounted (e.g. by v-if)
        console.log('not mounted yet, or the element was unmounted');
    }

    // ----------------------------------------------------------


})
</script>

<template>
    {{ inputXValue }}
    <input ref="inputX" v-model="inputXValue" />
    <!--  -->
    {{ list }}
    <ul>
        <li v-for="item in list" ref="itemRefs">
            {{ item }}
        </li>
    </ul>

    <ul>
        <!-- itemRefs 裡面是DOM           -->
        <li v-for="item in itemRefs">
            {{ item.innerHTML }}
        </li>
    </ul>

    <!-- <input :ref="(el) => {
         /* assign el to a property or ref */ 
         console.log('this', el, el.value);
         
         }"> -->
</template>