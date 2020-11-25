<template>
  <div class="score-wrapper">
    <p class="title"></p>
    <ul class="stars">
      <li class="star-item"></li>
    </ul>
    <p class="orange"></p>
  </div>
</template>

<script>
export default {
  name: "star",
  props:{
    titleText:{
      type:String
    },
    size:{
      type:String,
      default:""
    },
    score:{
      type:Number
    }
  }
};
</script>

<style lang="stylus" scoped>
.score-wrpper {
  display: flex;
  align-items: center;

  .title {
    margin-right: 12px;
    color: rgb(7, 17, 27);
  }

  .stars {
    display flex
    flex 1
    justify-content space-between

  }

  .orange {
    margin-left: 12px;
    color: rgb(255, 153, 0);
  }
}
</style>
