<template>
  <div>
    <MyHeader title="tabber作业"></MyHeader>
    <div style="margin: 45px 0 49px 0">
      <component :is="comName"></component>
    </div>
    <MyTabBer :list="tabList" @change="changeFn"></MyTabBer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTabBer from './components/MyTabBer.vue';

import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';
export default {
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
      comName: 'MyGoodsList',
    };
  },
  components: {
    MyHeader,
    MyTabBer,

    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changeFn(val) {
      this.comName = val;
    },
  },
};
</script>

<style></style>
