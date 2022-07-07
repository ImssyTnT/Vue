<template>
  <div>
    <MyHeader></MyHeader>
    <MyTable></MyTable>
    <MyTabBer></MyTabBer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTable from './components/MyTable.vue';
import MyTabBer from './components/MyTabBer.vue';
export default {
  components: {
    MyHeader,
    MyTable,
    MyTabBer,
  },
};
</script>

<style></style>
