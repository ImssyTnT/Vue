<template>
  <div class="login">
    <div class="title">
      <button
        :class="{ active: comName == 'LoginPhone' }"
        @click="comName = 'LoginPhone'"
      >
        手机注册
      </button>
      <button
        :class="{ active: comName == 'LoginEmail' }"
        @click="comName = 'LoginEmail'"
      >
        邮箱注册
      </button>
    </div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import LoginPhone from '../components/LoginPhone.vue';
import LoginEmail from '../components/LoginEmail.vue';
export default {
  data() {
    return {
      comName: 'LoginPhone',
    };
  },
  components: {
    LoginPhone,
    LoginEmail,
  },
};
</script>

<style>
.login {
  margin: 100px auto;
  padding: 0 50px;
  width: 400px;
  height: 600px;
  background-color: #fff;
}
.title {
  display: flex;
  justify-content: space-evenly;
}
.active {
  color: #5a9cf8;
  border-bottom: 3px solid #5a9cf8;
}
button {
  padding: 10px;
  border: 0;
  background-color: #fff;
  font-size: 24px;
  font-weight: 700;
}
</style>
