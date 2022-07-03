<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: getSelect == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: getSelect == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: getSelect == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="allDel">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      getSelect: 'all',
    };
  },
  props: ['count'],
  methods: {
    change(val) {
      this.getSelect = val;
      this.$emit('filterData', val);
    },
    allDel() {
      this.$emit('allDel');
    },
  },
};
</script>
