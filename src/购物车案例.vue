<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="allcheck" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.c" :value="item.name" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="sub(item)">-</span
          ><input type="text" :value="item.count" /><span @click="addFn(item)"
            >+</span
          >
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="trueDel">删除选中商品</button>
    <button @click="allDel">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ goods }}</p>
      <p>总价:{{ allPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '奔驰',
          time: '2020-08-01',
          price: '100',
          count: 0,
          c: false,
        },
        {
          id: 2,
          name: '宝马',
          time: '2020-08-02',
          price: '200',
          count: 0,
          c: false,
        },
        {
          id: 3,
          name: '奥迪',
          time: '2020-08-03',
          price: '300',
          count: 0,
          c: false,
        },
      ],
    };
  },
  computed: {
    allcheck: {
      set(val) {
        this.list.forEach((item) => {
          item.c = val;
        });
      },
      get() {
        return this.list.every((item) => {
          return item.c;
        });
      },
    },
    goods() {
      return this.list.reduce((prev, next) => {
        if (next.c) {
          prev += next.count;
        }
        return prev;
      }, 0);
    },
    allPrice() {
      return this.list.reduce((prev, next) => {
        if (next.c) {
          prev += next.price * next.count;
        }
        return prev;
      }, 0);
    },
  },
  methods: {
    addFn(item) {
      item.count++;
    },
    sub(item) {
      if (item.count === 0) {
        return;
      }
      item.count--;
    },
    del(id) {
      this.list.splice(
        this.list.findIndex((item) => {
          return item.id == id;
        }),
        1
      );
    },
    allDel() {
      this.list = [];
    },
    trueDel() {
      this.list.forEach((item, i) => {
        if (item.c) {
          this.list.splice(i, 1);
        }
      });
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
