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
      <li>arr:{{ arr }}</li>
    </ul>
    <div>
      <div>
        <button @click="decrement">-</button>
        <span>{{ count }}</span>
        <button @click="increment">+</button>
      </div>
      <div style="margin-top: 20px">
        <button @click="add(1)">+1</button>
        <button @click="add(2)">+2</button>
      </div>
      <button style="margin-top: 20px" @click="changeName('my ', 'name is ')">
        {{ name }}
      </button>
      <br />
      <label for="ad">新地址：</label>
      <input id="ad" v-model="newAdd" type="text" @blur="addressChange" />
      <br />
      <label for="ad1">新爱好：</label>
      <input id="ad1" v-model="newHobby" type="text" @blur="hobbyChange(newHobby)" />
      <br />
      <button style="margin-top: 20px" @click="changeArr">
        {{ 'changeArr' }}
      </button>
    </div>
  </div>
</template>

<script>
// 在页面引入state
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      newAdd: '',
      newHobby: '',
    };
  },
  components: {},

  computed: {
    count() {
      return this.$store.state.count;
    },
    // 这样写可以保留原来computed中的属性
    ...mapState({
      name: (state) => state.name,
      sex: 'sex',
      age: 'age',
      from: 'from',
      address: 'address',
      arr: (state) => state.arr,
    }),
  },
  methods: {
    decrement() {
      this.$store.commit('decrement');
    },
    increment() {
      this.$store.commit('increment');
    },
    add(n) {
      // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
      this.$store.commit('add', n);
    },
    changeName(first, second) {
      // this.$store.commit('fn', {
      //   'first': first,
      //   'second': second
      // })
      // 上面的写法等同于下面，对象风格的提交方式，个人觉得上面的写法更清晰
      this.$store.commit({
        type: 'fn',
        first: first,
        second: second,
      });
    },
    changeArr() {
      this.$store.commit('arrChange', [1, 2, 3]);
    },
    addressChange() {
      this.$store.commit('addressChange', this.newAdd);
    },
    ...mapMutations(['hobbyChange']),
    // 或者这样写
    // ...mapMutations({
    //   hobbyChange1:"hobbyChange"
    // }),
    // hobbyChange(){
    //   this.hobbyChange1(this.newHobby)
    // }
  },
};
</script>
