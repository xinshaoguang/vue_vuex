<template>
  <div class="module">
    <ul>
      <li>{{ from }}</li>
      <li>{{ from2 }}</li>
      <li>findArr:{{find(1) }}</li>
    </ul>
  </div>
</template>

<script>
// 在页面引入state getters
import { mapState ,mapGetters  } from "vuex";

export default {
  components: {},

  computed: {
    count() {
      return this.$store.state.count;
    },
    // 这样写可以保留原来computed中的属性
    // ...mapState({
    //   name: (state) => state.name,
    //   sex: 'sex',
    //   age: 'age',
    //   from:'from'
    // }),
    ...mapGetters({
      from:"address",
      from2:"addressMore",
      find:'findArr'
    })
  },
};
</script>