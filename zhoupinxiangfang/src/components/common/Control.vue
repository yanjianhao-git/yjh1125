<template>
  <div class="cart">
    <div class="cut" @click="cut(food)" v-show="food.count">-</div>
    <div class="num" v-show="food.count">{{food.count}}</div>
    <div class="add" @click="add(food)">+</div>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: {
    food: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // console.log(this.food);
  },
  methods: {
    // cart方法
    add(food) {
      if (food.count) {
        food.count++;
      } else {
        this.$set(food, "count", 1);
      }
    },
    cut(food) {
      food.count--;
      if (food.count === 0) {
        this.$delete(food, "count");
      }
    }
  }
};
</script>

<style lang="stylus">
.cart {
  display: flex;

  .num {
    margin: 0 5px;
  }
}
</style>