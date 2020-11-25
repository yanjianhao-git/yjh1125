<template>
  <header class="header">
    <div class="content">
      <div class="top">
        <div class="avatar">
          <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt />
        </div>
        <div class="info">
          <!-- 名称 -->
          <div class="name">
            <!-- <icon name="brand"></icon> -->
            <span>粥品香坊(回龙观)</span>
          </div>
          <!-- 配送 -->
          <div class="delivery">蜂鸟专送38分钟送达</div>
          <!-- 活动 -->
          <div class="activity">
            <!-- <icon name="decrease"></icon> -->
            <span>在线支付满28减5</span>
          </div>
        </div>
        <div class="counts">
          <span>0个</span>
        </div>
      </div>
      <div class="bottom">
        <!-- <icon name="bulletin"></icon> -->
        <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发</span>
        <i></i>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "myheader",
  created() {
    this.$axios({
      url: "/json/data.json",
    })
      .then(res => {
        console.log("res=",res.data.seller);
      })
      .catch(err => console.log("error=", err));
  }
};
</script>
<style lang="stylus" scoped>
.header
  position: relative
  background: rgba(7, 17, 27, 0.5)

  .top
    display: flex
    padding: 24px 12px 18px 24px
    position: relative

    .avatar
      width: 64px
      height: 64px

      img
        width: 100%
        height: 100%
        border-radius: 4px

    .info
      margin-left: 16px
      color: #fff

      .name
        font-size: 16px
        font-weight: bold
        line-height: 16px

        i
          margin-right: 6px

      .delivery
        margin: 8px 0 10px
        font-size: 12px
        font-weight: 100
        line-height: 12px

      .activity
        font-size: 10px
        font-weight: 100
        line-height: 12px

    .counts
      padding: 0 8px
      height: 24px
      border-radius: 10px
      color: #fff
      background: rgba(0, 0, 0, 0.2)
      font-size: 10px
      font-weight: 100
      line-height: 24px
      position: absolute
      right: 12px
      bottom: 18px

  .bottom
    color: #fff
    height: 28px
    overflow: hidden
    background: rgba(7, 17, 27, 0.2)
    padding: 0 12px

    span
      font-size: 10px
      font-weight: 100
      line-height: 28px
</style>
