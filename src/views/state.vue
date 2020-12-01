<template>
  <div class="module">
    <ul>
      <li>count:{{ count }}</li>
      <li>name:{{ name }}</li>
      <li>sex:{{ sex }}</li>
      <li>age:{{ age }}</li>
      <li>from:{{ from }}</li>
      <li>address:{{ address }}</li>
      <li>hobby:{{ $store.state.hobby }}</li>
      <li style="position:fixed;top:0;left:0">
        <span>资料来源：</span>
        <a href="https://blog.csdn.net/dkr380205984/article/details/81945141" target="_blank">vuex</a> |
        <a href="https://blog.csdn.net/dkr380205984/article/details/82185740" target="_blank">state</a> |
        <a href="https://blog.csdn.net/dkr380205984/article/details/82220250" target="_blank">getters</a> |
        <a href="https://blog.csdn.net/dkr380205984/article/details/82257792" target="_blank">mutations</a> |
        <a href="https://blog.csdn.net/dkr380205984/article/details/82347910" target="_blank">actions</a> 
      </li>
    </ul>
  </div>
</template>

<script>
// 在页面引入state
import { mapState } from "vuex";
export default {
  components: {},

  computed: {
    count() {
      return this.$store.state.count;
    },
    // 这样写可以保留原来computed中的属性
    ...mapState({
      name: (state) => state.name,
      sex: "sex",
      age: "age",
      from: "from",
      address: "address",
    }),
  },
};
</script>
