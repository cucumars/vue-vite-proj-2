<script>
export default {
  methods: {
    checkForm() {
      // 表單自動檢查沒錯才會顯示 確認存儲的訊息框
      const { $refs } = this;
      console.log($refs['input'].value);
      alert();
    },
  },
  mounted() {
    this.$refs.input.focus();
  }
}
</script>

<template>
  <div @click="checkForm()">按一下</div>
  <div class="about text-[32px]">
    <h1>This is an about pagefffff scascscscsac</h1>
  </div>
  <input ref="input" />
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
