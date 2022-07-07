<template>
  <div>
    <MyTable :list="list">
      <template #title>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputShow"
            v-focus
            @blur="scope.row.inputShow = false"
            @keyup.enter="enterFn(scope.row)"
            @keyup.esc="scope.row.inputValue = ''"
            v-model.trim="scope.row.inputValue"
          />
          <button
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputShow = true"
          >
            +Tag
          </button>
          <span
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            style="margin-left: 8px"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
          <button
            class="btn btn-danger btn-sm btn-green"
            style="margin-left: 8px"
            v-btnShow="scope.row.id"
          >
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';
export default {
  created() {
    this.$axios({
      method: 'GET',
      url: '/api/goods',
    }).then((res) => {
      const { data } = res;
      data.data.forEach((item) => {
        item.inputShow = false;
      });
      this.list = data.data;
    });
  },
  data() {
    return {
      list: [],
      arr: [1, 3, 5],
    };
  },
  components: {
    MyTable,
  },
  methods: {
    delFn(id) {
      this.list.splice(
        this.list.findIndex((item) => item.id == id),
        1
      );
    },
    enterFn(item) {
      if (item.inputValue == '') return alert('请输入内容!');
      item.tags.push(item.inputValue);
      item.inputValue = '';
      item.inputShow = false;
    },
  },
};
</script>

<style scoped>
.btn-green {
  background-color: #65dc79;
  border: 1px solid #65dc79;
}
</style>
