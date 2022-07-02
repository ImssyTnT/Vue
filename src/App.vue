<template>
  <div></div>
</template>

<script>
// 3. this 指向
function fn() {
  console.log(this); // this = undefined
}
const obj = {
  name: 'test',
  a() {
    console.log(this.a); // this = obj.a
    setTimeout(function () {
      console.log(this.a); // this = obj
    }, 1000);
  },
  b() {
    console.log(this); // this = window
    fn();
  },
};
obj.a();
obj.b();
export default {};
</script>

<style></style>
