<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="allTrue"
    />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="enterFn"
      v-model.trim="val"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      val: '',
    };
  },
  methods: {
    enterFn() {
      if (this.val.length === 0) {
        return alert('请输入信息');
      }
      this.$emit('add', this.val);
      this.val = '';
    },
  },
  computed: {
    allTrue: {
      get() {
        return this.$parent.list.every((item) => item.isDone);
      },
      set(val) {
        this.$emit('allTrue', val);
      },
    },
  },
};
</script>
