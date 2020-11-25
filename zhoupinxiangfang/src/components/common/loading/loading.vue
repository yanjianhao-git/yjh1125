<template>
  <div class="loading">
    <img src="./loading.png" alt="">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name:"loading"
}
</script>

<style lang="stylus">
.loading{
  position:absolute;
  top 50%
  left 50%
  transform translate(-50%,-50%)
  img{
    width 150px
    height 150px
  }
}
</style>