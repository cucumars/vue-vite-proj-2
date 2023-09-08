<script>
// import TodoListItem from '../components/TodoListItem.vue';

export default {
  components: {
    // TodoListItem
  },

  data() {
        // 資料集
        return {
          text: '一鹿狂飆',
          data: [],
          temp: {},
          idAll: 0,
        };
      },
      methods: {
        // #1 如何新增資料
        addItem() {
          this.idAll++;
          this.data.push({
            id: this.idAll,
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
  <div>
    <input type="text" v-model="text"> 
    <button type="button" @click="addItem">增加文字</button>
    <ol>
      <li v-for="item in data" :key="item.id">
        {{ item.text }}
        <button type="button" @click="editItem(item)">編輯品項</button>
        <button type="button" @click="removeItem(item)">移除品項</button>
      </li>
      <!-- <TodoListItem v-for="item in data" :key="item.id" :todo="item"></TodoListItem> -->
      <!-- <TodoListItem v-for="item in data" :key="item.id" :todo="item">
        <button type="button" @click="editItem(item)">編輯品項</button>
        <button type="button" @click="removeItem(item)">移除品項</button>
      </TodoListItem> -->
    </ol>

    <hr>
    <input type="text" v-model="temp.text">
    <button type="button"
    @click="doneEdit">編輯完成</button>
  </div>

  <!-- <ol> -->
    <!--
      We are providing each todo-item with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which is explained in the guide section on v-for.
    -->
    <!-- <TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
  </ol> -->
</template>