<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>
    <van-cell title="最佳匹配" class="title" />
    <!-- <van-cell
      :label="`${
        (item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0].name) ||
        '未知歌手'
      } - ${item.name}`"
      :title="item.name"
      v-for="item in newList"
      :key="item.id"
    > -->
    <SongItem
      v-for="obj in newList"
      :key="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name"
      :id="obj.id"
    ></SongItem>
    <!-- <template>
      <van-icon color="#000" name="play-circle-o" size="28" />
    </template> -->
  </div>
</template>

<script>
import { getRecommendListApi, newSongListApi } from '@/apis';
import SongItem from '@/components/SongItem.vue';
export default {
  data() {
    return {
      list: [],
      newList: [],
    };
  },
  mounted() {
    this.getList();
    this.getNewSongList();
  },
  methods: {
    async getList() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        // console.log(res.data);
        this.list = res.data.result;
      } catch (e) {
        console.log('e', e);
      }
    },
    async getNewSongList() {
      try {
        const res = await newSongListApi({
          limit: 10,
        });
        this.newList = res.data.result;
      } catch (e) {
        console.log('e', e);
      }
    },
  },
  components: {
    SongItem,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  padding-bottom: 50px;
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  .van-grid-item__content {
    padding: 10px 0px;
  }
  .van-cell__value {
    padding-top: 10px;
    flex: 0 0 30px;
  }
}
</style>
