<template>
  <div id="wrapper">
    <div class="main">
      <slot name="main">默认内容</slot>
    </div>
    <div class="footer">
      <slot name="footer">默认按钮</slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"common"
};
</script>

<style lang="stylus" scoped>
#wrapper
  width: 100%
  height: 100vh

  .main
    height: 90%
    padding: 0 10px
    background-color: #f4f4f4

  .footer
    line-height: 10vh
    background: orange
    color: #ffffff
    text-align: center
</style>