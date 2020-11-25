<template>
  <i class="icon" :class='iconClass'></i>
</template>

<script>
  export default {
    name:'icon',
    props:{
      // 图片名
      name:{
        type: String,
        default: ''
      },
      type:{
        tyoe: Number,
        default: 0
      },
      // 图片尺寸
      size:{
        type: String,
        default:'md'
      }
    },
    computed:{
      iconClass(){
        return 'icon-' + (this.name ? this.name : this.type);
      }
    }
  }
</script>

<style lang='stylus'>
  /* 品牌 公告 减 折 特 票 保 */
  .icon
    display inline-block
    background-size contain
    /* 品牌 */
    &.icon-brand
      background-image url(brand@2x.png)
      width: 30px
      height: 18px
    /* 公告 */
    &.icon-bulletin
      background-image url(bulletin@2x.png)
      width: 22px
      height: 12px
    /* 减 */
    &.icon-decrease,&.icon-0
      background-image url(decrease_2@2x.png)
      width: 12px
      height: 12px
    /* 折 */
    &.icon-discount,&.icon-1
      background-image url(discount_4@2x.png)
      width: 12px
      height: 12px
    /* 特 */
    &.icon-special,&.icon-2
      background-image url(special_4@2x.png)
      width: 12px
      height: 12px
    /* 票 */
    &.icon-invoice,&.icon-3
      background-image url(invoice_2@2x.png)
      width: 12px
      height: 12px
    /* 保 */
    &.icon-guarantee,&.icon-4
      background-image url(guarantee_4@2x.png)
      width: 12px
      height: 12px
</style>
