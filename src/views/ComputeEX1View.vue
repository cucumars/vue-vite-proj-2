<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ],
      },
      message: 'Hello!',
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    greeting() {
      // this.message = 'Hello!';
      return this.message + '!';
    },

    // annotating a writable computed property
    greetingUppercased: {
      get() {
        return this.greeting.toUpperCase();
      },
      set(newValue) {
        this.message = newValue.toUpperCase();
      }
    }
  },
  // methods: {
  //   // a computed getter
  //   publishedBooksMessage() {
  //     // `this` points to the component instance
  //     return this.author.books.length > 1 ? 'Yes' : 'No'
  //   }
  // },
  mounted() {
    this.greetingUppercased = '一鹿aaa' 
    // this.greeting // type: string
    // console.log(1111,this.author.books.length );
  }
}
</script>
<template>
  <div>
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>

    <p>Has greeting:</p>
    <!-- {{ greetingUppercased = 'ssss' }} -->
    <span>{{ greetingUppercased }}</span>
    <span>{{ greeting }}</span>
  </div>
</template>