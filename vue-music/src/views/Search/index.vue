<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="val"
      @input="inputFn"
    />
    <template v-if="searchList.length == 0">
      <!-- 热门搜索 -->
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="red"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tags"
          :key="index"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell
          v-for="(item, index) in searchList"
          :key="index"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
          @click="playFn"
        /> -->
        <SongItem
          v-for="(obj, index) in searchList"
          :key="index"
          :name="obj.name"
          :author="obj.ar[0].name"
          :id="obj.id"
        ></SongItem>
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchTag, getSearchList } from '@/apis/index';
import SongItem from '@/components/SongItem.vue';
export default {
  data() {
    return {
      tags: [],
      val: '',
      searchList: [],
      finished: false,
      loading: false,
      page: 1,
      timer: null,
    };
  },
  mounted() {
    this.getSearchList();
  },
  components: {
    SongItem,
  },
  methods: {
    async getSearchList() {
      try {
        const res = await getSearchTag();
        this.tags = res.data.result.hots;
      } catch (e) {
        console.log('e', e);
      }
    },
    async clickFn(val) {
      this.page = 1;
      this.finished = false;
      this.val = val;
      try {
        const res = await getSearchList({
          keywords: this.val,
        });
        this.searchList = res.data.result.songs;
        this.loading = false;
        this.$toast.success('搜索成功');
      } catch (e) {
        console.log('e', e);
        this.$toast.fail('查询失败');
      }
    },
    async inputFn() {
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(async () => {
        this.page = 1;
        this.finished = false;
        if (this.val.length === 0) {
          this.searchList = [];
          return;
        }
        const res = await getSearchList({
          keywords: this.val,
          limit: 20,
        });
        if (res.data.result.songs.length === undefined) {
          this.searchList = [];
          return;
        }
        this.searchList = res.data.result.songs;
        this.loading = false;
      }, 500);
    },
    async onLoad() {
      this.page++;
      const res = await getSearchList({
        keywords: this.val,
        limit: 20,
        offset: (this.page - 1) * 20,
      });
      if (res.data.result.songs === undefined) {
        this.finished = true;
        this.loading = false;
        return;
      }
      this.searchList = [...this.searchList, ...res.data.result.songs];
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.van-tag--primary {
  margin-right: 6px !important;
}
</style>
