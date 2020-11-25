<template>
  <div class="goods">
    <!-- <div>{{isSelector}}</div> -->
    <div class="content">
      <scroll class="left">
        <ul class="menu-left">
          <li
            v-for="(good,index) in goods"
            :key="index"
            :class="{active:index==currentIndex}"
            @click="selectMenu(index)"
          >
            <div>
              <p>
                <!-- <icon v-if="good.type !==-1" :type="good.type" /> -->
                {{good.name}}
              </p>
            </div>
          </li>
        </ul>
      </scroll>
      <scroll class="right" @scroll="scrollList" :is-listen-scroll="true" ref="food-list">
        <ul class="menu-right">
          <li v-for="(good,index) in goods" :key="index" ref="food-item">
            <p class="title">{{good.name}}</p>
            <ul class="foods">
              <li class="food-item" v-for="(food,index) in good.foods" :key="index">
                <img v-lazy="food.image" :key="'img'+index" alt />
                <div class="food-info">
                  <p class="name">{{food.name}}</p>
                  <div class="type">
                    <p class="description">{{food.description}}</p>
                    <p class="sellCount">月售1132份 好评率100%</p>
                  </div>
                  <div class="bottom">
                    <div class="price">
                      <span class="newP">￥{{food.price}}</span>
                      <span class="oldP" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                      <span class="icon-add_circle icon"></span>
                    </div>
                    <control :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </scroll>
    </div>
    <div class="footer">
      
      <cart :cartFoods="cartFoods"></cart>
    </div>
  </div>
</template>
<script>
import scroll from "@/components/common/scroll";
import Control from "@/components/common/Control";
import cart from "@/views/cart/cart";
// import dataJson from "/public/json/data.json";
/* 
  ***************
    图片优化
    上传优化:透明背景.png格式
            图片质量无要求.jpg
            动态图.gif
    加载优化:图片懒加载

*/
export default {
  name: "goods",
  components: {
    scroll,
    Control,
    cart
  },
  data() {
    return {
      goods: [],
      scrollY: 0,
      foodsListHeight: [],
      curIndex: 0,
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.foodsListHeight.length; i++) {
        let height1 = this.foodsListHeight[i];
        let height2 = this.foodsListHeight[i + 1];
        if (this.scrollY >= height1 && this.scrollY < height2) {
          return i;
        }
      }
      return 0;
    },
    // 计算商品是否选中
    cartFoods() {
      // console.log(this.carts)
      var carts = [];
      this.goods.forEach(item => {
        item.foods.forEach(food=>{
          if(food.count){
            carts.push(food)
          }
        })
      });
      console.log("购物车数据",...carts)
      return carts
    }
  },
  created() {
    this.foodsListHeight = [0];
    this.$axios({
      url:"/json/data.json"
    }).then((res)=>{
      console.log(res)
      this.goods = res.data.goods;
    }).catch((err)=>{
      console.log(err)
    })
  },
  mounted() {
    setTimeout(() => {
      this.scroll = this.$refs["food-list"];
      this.foodItem = this.$refs["food-item"];
      this._calcFoodsListHeight();
    }, 2000);
  },
  methods: {
    selectMenu(index) {
      console.log(index);
      // this.scroll && this.scroll.scrollToElement(this.foodItem[index], 500);
      this.scroll.scrollToElement(this.foodItem[index], 300);
    },
    scrollList(position) {
      this.scrollY = Math.abs(position.y);
    },
    _calcFoodsListHeight() {
      if (this.foodItem) {
        let lastFoodItem = 0;
        this.foodItem.forEach(item => {
          lastFoodItem += item.clientHeight;
          this.foodsListHeight.push(lastFoodItem);
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.goods {
  width: 100%;
  position: relative;
  .content {
    display: flex;
    height: 636px;
    background: #f3f5f7;
    .left {
      width: 80px;
      .menu-left {
        // padding: 0 12px;
        li {
          height: 54px;
          font-size: 12px;
          color: #666;
          position: relative;
          display: flex;
          // align-items: center;
          flex-direction: column;
          justify-content: center;
          p {
            padding: 0 12px;
          }
          &::after {
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -28px;
            content: "";
            width: 56px;
            height: 1px;
            background: rgba(7, 17, 27, 0.1);
          }
        }
        li.active {
          color: #333;
          background: #fff;
          transition: 0.3s;
        }
      }
    }
    .right {
      flex: 1;
      overflow: hidden;
      .menu-right {
        .title {
          font-size: 12px;
          color: rgb(147, 153, 159);
          line-height: 28px;
          padding-left: 18px;
          border-left: 2px solid #d9dde1;
        }
        .foods {
          background: #fff;
          .food-item {
            border-bottom: 1px solid #ccc;
            padding: 18px;
            display: flex;
            position: relative;
            img {
              width: 64px;
              height: 64px;
              border-radius: 4px;
            }
            .food-info {
              margin-left: 10px;
              .name {
                font-size: 14px;
                color: rgb(7, 17, 27);
                line-height: 14px;
              }
              .type {
                font-size: 10px;
                color: rgb(147, 153, 159);
                .description {
                  margin-top: 8px;
                }
                .sellCount {
                  margin-top: 8px;
                  margin-right: 12px;
                }
              }
              .bottom {
                display: flex;
                justify-content: space-between;
                .price {
                  font-weight: 700;
                  line-height: 24px;
                  .newP {
                    font-size: 14px;
                    color: rgb(240, 20, 20);
                    margin-right: 8px;
                  }
                  .oldP {
                    font-size: 10px;
                    color: rgb(147, 153, 159);
                    text-decoration: line-through;
                  }
                  .icon {
                    position: absolute;
                    right: 18px;
                    bottom: 18px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>