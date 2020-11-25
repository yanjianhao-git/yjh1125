<template>
  <div id="app">
    <Myheader />
    <ul class="options">
      <li>
        <router-link to="/">商品</router-link>
      </li>
      <li>
        <router-link to="/rating">评论</router-link>
      </li>
      <li>
        <router-link to="/seller">商家</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
// import scroll from "./components/common/scroll";
import Myheader from "./views/header/header";
export default {
  name: "App",
  components: {
    Myheader
  }
  /*  data() {
    return {
      rightHeight: [],
      scrollY: 0
    };
  },
  
  mounted() {
    // console.log(this.scroll)
    setTimeout(() => {
      // 获取滚动的容器
      this.scroll = this.$refs.scroll;
      // 获取滚动的每个元素
      this.right = this.$refs.right;
      this.init();
    }, 1000);
  },
  methods: {
    init() {
      if (this.right) {
        let startHeight = 0;
        this.right.forEach(item => {
          startHeight += item.clientHeight;
          this.rightHeight.push(startHeight);
        });
      }
    },
    log(cur) {
      console.log(cur);
    },
    listScroll(pos) {
      console.log(Math.abs(pos.y));
      this.scrollY = Math.abs(pos.y);
    }
  } */
};
</script>>
<style lang="stylus">
html
  #app
    height: 100vh
    overflow: hidden

    .router-link-exact-active
      color: red

    .options
      height: 40px
      line-height: 40px
      display: flex
      justify-content: space-around
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)

    .main
      width: 100vw

      // white-space: nowrap;
      .swiper
        display: inline-block
        width: 300vw

        &>div
          width: 100vw
          float: left
</style>
