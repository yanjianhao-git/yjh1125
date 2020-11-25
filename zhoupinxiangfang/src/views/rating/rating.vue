<template lang="pug">
  div.ratings
    div(class="score-wraper border-bottom-1px")
      div.overall-score
        h1.score  4.2
        p.text  综合评分
        span.sell-count 高于周边商家90%
      div.detailed-score
        div(class="service-score score-item")
          span.text 服务态度
          div(class="detailed-star star36")
            div(class="star-item on")
            div(class="star-item on")
            div(class="star-item on")
            div(class="star-item on")
            div(class="star-item off")
          span.orange 4.1
        div(class="service-score score-item")
          span.text 美味指数
          div(class="detailed-star star36")
            div(class="star-item on")
            div(class="star-item on")
            div(class="star-item on")
            div(class="star-item on")
            div(class="star-item off")
          span.orange 4.3
        div(class="rating-count score-item")
          span.text 送达时间
          span.time 38分钟
    div.discuss
      div(class="discuss-top border-bottom-1px")
        div(class="select-state border-bottom-1px")
          div(class="select-item select-all active") 全选57
          div(class="select-item satisfied") 满意47
          div(class="select-item unsatisfactory") 不满意10
        div.param-content
          i.icon-check_circle  
          span  只看有内容评论
      ul.bottom-warpper
      <star />
</template>

<script>
import star from "@/components/common/star";
export default {
  components:{
    star
  }
};
/* 
  
*/
</script>

<style>
.ratings {
  height: 100%;
  overflow: auto;
  background: #f3f5f7;
}
/* 上 */
.ratings .score-wraper {
  width: 100%;
  background: #fff;
  padding: 18px 0;
  display: flex;
  margin-bottom: 16px;
}
.score-wraper .overall-score {
  width: 138px;
  position: relative;
  text-align: center;
}
.score-wraper .overall-score::after {
  content: "";
  display: block;
  height: 100%;
  border-left: 1px solid rgba(7, 17, 27, 0.2);
  transform: scaleX(0.5);
  position: absolute;
  right: 0;
  top: 0;
}
.overall-score .score {
  font-size: 24px;
  color: rgb(255, 153, 0);
  line-height: 28px;
  margin-bottom: 6px;
}
.overall-score .text {
  font-size: 12px;
  line-height: 12px;
  color: rgb(7, 17, 27);
  margin-bottom: 8px;
}
.overall-score .sell-count {
  font-size: 10px;
  line-height: 10px;
  color: rgb(147, 157, 159);
  margin-bottom: 6px;
}
.score-wraper .detailed-score {
  flex: 1;
  padding: 0 24px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 18px;
}
.detailed-score .score-item {
  display: flex;
  align-items: center;
}
.score-item .text {
  margin-right: 12px;
  color: rgb(7, 17, 27);
}
.score-item .orange {
  margin-left: 12px;
  color: rgb(255, 153, 0);
}
.score-item .detailed-star,
.food-star {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.score-item .detailed-star .star-item {
  margin: 0;
}
.score-item .food-star .star-item {
  margin: 0;
}
.score-item .time {
  color: rgb(147, 153, 159);
}
.detailed-score .food-score {
  margin: 9px 0;
}
/* 下 */
.discuss {
  width: 100%;
  background: #fff;
}
.discuss .discuss-top {
  padding: 0 18px;
}
.discuss-top .select-state {
  width: 100%;
  padding: 18px 0;
  display: flex;
}
.select-state .select-item {
  font-size: 12px;
  padding: 10px 12px;
  margin-right: 8px;
}
.select-state .select-item:last-child {
  margin: 0;
}
.select-state .select-item.active {
  color: #fff;
}
.select-state .select-all {
  background: #00a0dc;
}
.select-state .satisfied {
  background: #ccecf8;
}
.select-state .unsatisfactory {
  background: #e9ebec;
}
.discuss-top .param-content {
  padding: 14px 0;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: rgb(147, 157, 159);
}
.param-content i {
  font-size: 24px;
  margin-right: 5px;
}
.bottom-wrapper {
  padding: 0 18px;
  overflow: hidden;
}
.bottom-wrapper .discuss-item {
  padding: 18px 0;
  display: flex;
}
.discuss-item .discuss-item-left {
  width: 28px;
  height: 28px;
  margin-right: 12px;
}
.discuss-item-left img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.discuss-item .discuss-item-right {
  flex: 1;
}
.discuss-item-right .username {
  font-size: 10px;
  color: rgb(7, 17, 27);
  line-height: 12px;
}
.discuss-item-right .discuss-star {
  margin: 4px 0 6px;
  font-size: 10px;
  color: rgb(147, 157, 159);
  display: flex;
  align-items: center;
}
.discuss-star .star-item {
  margin: 0;
  margin-right: 3px;
}
.discuss-item-right .text {
  font-size: 12px;
  line-height: 18px;
  color: rgb(7, 17, 27);
}
.discuss-item-right .recommend {
  margin-top: 8px;
  display: flex;
  align-items: center;
}
.recommend i {
  font-size: 12px;
  color: #00a0dc;
}
.recommend-wrapper {
  flex: 1;
  display: flex;
}
.recommend-wrapper .recommend-item {
  max-width: 85px;
  box-sizing: border-box;
  margin-left: 8px;
  padding: 0 6px;
  font-size: 12px;
  line-height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(147, 153, 159);
  border: 1px solid rgba(7, 17, 27, 0.1);
}
</style>