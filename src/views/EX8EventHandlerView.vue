<script setup>
import { ref } from 'vue';
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
    <!-- Method Handlers -->
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

    <!-- Event Modifiers -->
    <!-- the click event's propagation will be stopped -->
    <a @click.stop="doThis">click.stop</a>

    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="onSubmit">submit.prevent</form>

    <!-- modifiers can be chained -->
    <a @click.stop.prevent="doThat">click.stop.prevent</a>

    <!-- just the modifier -->
    <form @submit.prevent>just the modifier-@submit.prevent </form>

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div @click.self="doThat">click.self=...</div>
    <!-- Order matters when using modifiers because the relevant code is generated in the same order.
     Therefore using @click.prevent.self will prevent click's default action on the element itself and its children,
     while @click.self.prevent will only prevent click's default action on the element itself. -->

    <!-- Key Modifiers -->
    <!-- only call `submit` when the `key` is `Enter` -->
    <input @keyup.enter="submit" />
    <!-- 參考 KeyboardEvent.key -->
    Vue provides aliases for the most commonly used keys:
    <!-- .enter
        .tab
        .delete (captures both "Delete" and "Backspace" keys)
        .esc
        .space
        .up
        .down
        .left
        .right 
    -->
    <!-- System Modifier Keys​ -->
    <!-- You can use the following modifiers to trigger mouse or keyboard event listeners 
         only when the corresponding modifier key is pressed:
        .ctrl
        .alt
        .shift
        .meta -->
    <!-- Alt + Enter -->
    <input @keyup.alt.enter="clear" />

    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>
    <!-- Mouse Button Modifiers​
        .left
        .right
        .middle
        These modifiers restrict the handler to events triggered by a specific mouse button. -->
</template>