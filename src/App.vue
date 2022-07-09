<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/sort">分类</router-link>
    <router-link to="/price">订单</router-link>
    <router-link to="/user">我的</router-link>
    <h3>显示路由切换的页面↓</h3>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
};
</script>

<style scoped>
a {
  margin-right: 5px;
}
</style>
