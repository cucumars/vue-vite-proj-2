<script setup>
import { ref } from 'vue';
const text = ref('');
const checked = ref(false);
const checkedNames = ref([]);
const picked = ref('');
const selected = ref('');
const selectedArr = ref([]);

const selectedX = ref('A')
const options = ref([
    { text: 'One',value: 'A' },
    { text: 'Two',value: 'B' },
    { text: 'Three',value: 'C' }
])
const selectedXY = ref('A');
const pickedXYZ = ref('')
// -------------------------
const selectedW = ref('');
const msg = ref('');
</script>
<template>
    <!-- When dealing with forms on the frontend, 
        we often need to sync the state of form input elements with corresponding state in JavaScript.
        It can be cumbersome to manually wire up value bindings and change event listeners: 
    -->
    <input :value="text" @input="event => text = event.target.value">
    <!-- The v-model directive helps us simplify the above to: -->
    <input v-model="text">
    <!-- <input> with text types and <textarea> elements use value property and input event;
    <input type="checkbox"> and <input type="radio"> use checked property and change event;
    <select> use value as a prop and change as an event. -->
    <!-- **** Note ****
        v-model will ignore the initial value, 
        checked or selected attributes found on any form elements.
        It will always treat the current bound JavaScript state as the source of truth.
        You should declare the initial value on the JavaScript side, using reactivity APIs. 
    -->
    <!-- checkbox 單一個勾選 -->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
    <!-- checkbox 多個勾選 -->
    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <!-- rediobox -->
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <!-- select -->
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option value="1">A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <!-- Multiple select (bound to array): -->
    <div>Selected: {{ selectedArr }}</div>
    <select v-model="selectedArr" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <!--  -->
    <div>
        <select v-model="selectedXY">
            <option v-for="option in options" :key="option.value" :value="option.value"> {{ option.text }} </option>
        </select>
        <div>Selected: {{ selectedXY }}</div>
    </div>
    <div> {{ pickedXYZ }} <!-- `picked` is a string "a" when checked -->
        <input type="radio" v-model="pickedXYZ" value="a" /> {{ toggle }} <!-- `toggle` is either true or false -->
        <input type="checkbox" v-model="toggle" />
        <!-- `selected` is a string "abc" when the first option is selected -->
        <select v-model="selected">
            <option value="abc">ABC</option>
        </select>
        <!--  -->
        <!-- Checkbox​ -->
        <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
        <!-- true-value and false-value are Vue-specific attributes that only work with v-model.
             Here the toggle property's value
             will be set to 'yes' when the box is checked, and set to 'no' when unchecked. You can also bind them to dynamic
             values using v-bind: -->
        <input type="checkbox" v-model="toggle" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue" />
        <!-- The true-value and false-value attributes don't affect the input's value attribute,
            because browsers don't include unchecked boxes in form submissions.
            To guarantee that one of two values is submitted in a form (e.g. "yes" or "no"),
            use radio inputs instead. -->
        <input type="radio" v-model="pick" :value="first" />
        <input type="radio" v-model="pick" :value="second" />
    </div>
    <!--  -->
    <div> selectedW : {{ selectedW }} <select v-model="selectedW">
            <!-- inline object literal -->
            <option :value="{ number: 123 }">123</option>
        </select>
    </div>
    <div>
        {{ msg }}
        <!-- synced after "change" instead of "input" -->
        <input v-model.focus="msg" />
        <input v-model.focus.lazy="msg" />
        <input v-model.trim="msg" />
    </div>
</template>