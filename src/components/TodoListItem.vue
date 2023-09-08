<script>
export default {
  props: {
    todo: Object
  },

  data() {
    // 資料集
    return {
      text: '一鹿狂飆',
      data: [],
      temp: {}
      // item: 
    };
  },
  methods: {
    // #1 如何新增資料
    addItem() {
      this.data.push({
        id: this.data.length + 1,
        text: this.text
      });
      this.text = '';
    },
    // #2 如何移除資料
    removeItem(item) {
      // 1 陣列索引
      // 2 id
      const index = this.data.findIndex(obj => obj.id === item.id);
      console.log(index);
      this.data.splice(index, 1);
    },
    // #3 如何編輯資料
    editItem(item) {
      this.temp = { ...item }; // ES6 //解構的形式,copy一份,避免傳參考的問題
    },
    // #4 把資料寫回
    doneEdit() {
      const index = this.data.findIndex(obj => obj.id === this.temp.id);

      // 把資料寫回索引
      this.data[index] = this.temp

      // this.temp 清空
      this.temp = {};
    }
  },
}
</script>

<template>
  <!-- <li>{{ todo.text }}</li> -->
  <!-- <li v-for="item in data" :key="item.id"> -->
    <li>
      {{ todo.text }}
      <!-- <button type="button" @click="editItem(todo)">編輯品項</button>
      <button type="button" @click="removeItem(todo)">移除品項</button> -->
    </li>
  <!-- </li> -->
</template>