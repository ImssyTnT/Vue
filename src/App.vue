<template>
  <div>
    <TodoHeader @add="addFn" @allTrue="allTrueFn"></TodoHeader>
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @filterData="filterDataFn"
      @allDel="allDelFn"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')),
      getList: 'all',
    };
  },
  methods: {
    // 添加功能
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({ id, name: val, isDone: false });
    },
    // 删除功能
    delFn(id) {
      this.list.splice(
        this.list.findIndex((item) => item.id == id),
        1
      );
    },
    // 点击切换功能
    filterDataFn(val) {
      this.getList = val;
    },
    // 清空已完成
    allDelFn() {
      this.list = this.list.filter((item) => !item.isDone);
    },
    allTrueFn(val) {
      this.list.forEach((item) => (item.isDone = val));
    },
  },
  computed: {
    count() {
      return this.list.filter((item) => !item.isDone).length;
    },
    showList() {
      if (this.getList == 'no') {
        return this.list.filter((item) => !item.isDone);
      } else if (this.getList == 'yes') {
        return this.list.filter((item) => item.isDone);
      } else {
        return this.list;
      }
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  watch: {
    list: {
      handler(val) {
        localStorage.setItem('list', JSON.stringify(val || []));
      },
      deep: true,
    },
  },
};
</script>

<style></style>
