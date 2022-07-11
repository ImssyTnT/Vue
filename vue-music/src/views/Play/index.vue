<template>
  <div>
    <h1>歌曲名称:{{ this.list.name }}</h1>
    <p>歌手:{{ this.singer }}</p>
    <p>时长:{{ time }}</p>
    <div class="audi">
      <audio :src="this.musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
import { getInfo, playMusic } from '@/apis/index';
import moment from 'moment';
export default {
  data() {
    return {
      list: [],
      singer: '',
      time: 0,
      musicUrl: '',
    };
  },
  created() {
    this.getMusic();
    this.playFn();
  },
  methods: {
    async getMusic() {
      console.log(this.$route.query);
      const res = await getInfo({
        ids: this.$route.query.id,
      });
      console.log(res);
      this.list = res.data.songs[0];
      this.singer = this.list.ar[0].name;
      this.time = moment(this.list.dt).format('mm:ss');
    },
    async playFn() {
      const res = await playMusic({
        id: this.$route.query.id,
      });
      console.log(res);
      this.musicUrl = res.data.data[0].url;
    },
  },
};
</script>

<style></style>
