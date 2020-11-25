<template lang="pug">
  div
    h1  头部
  
</template>

<script>
/* 
  <scroll class="wrap">
    <div class="seller">
      <div class="seller-top border-bottom-1px">
        <div class="result border-bottom-1px">
          <div class="result-left">
            <div class="name">粥品香坊(回龙观)</div>
            <div class="deliveryPrice star36">
              <div class="star-item on"></div>
              <div class="star-item on"></div>
              <div class="star-item on"></div>
              <div class="star-item on"></div>
              <div class="star-item off"></div>
              <span>(661)</span>
              <p>月售690单</p>
            </div>
          </div>
          <div class="result-right">
            <i class="icon-favorite"></i>
            <div class="collection-status">已收藏</div>
          </div>
        </div>
        <div class="shop-massage">
          <div class="minPrice massage-item">
            <p class="text">起送价</p>
            <p class="price">
              20
              <span>元</span>
            </p>
          </div>
          <div class="deliveryPrice massage-item">
            <p class="text">商家配送</p>
            <p class="price">
              4
              <span>元</span>
            </p>
          </div>
          <div class="deliveryTime massage-item">
            <p class="text">平均配送时间</p>
            <p class="price">
              38
              <span>分钟</span>
            </p>
          </div>
        </div>
      </div>
      <div class="seller-bulletin-supports top-16 border-bottom-1px border-top-1px">
        <div class="text">公告与活动</div>
        <div
          class="seller-bulletin"
        >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</div>
        <div class="seller-supports">
          <ul class="supports-wrapper">
            <li class="supports-item border-top-1px">
              <div class="support-icon icon-4 decrease"></div>
              <span>在线支付满28减5</span>
            </li>
            <li class="supports-item border-top-1px">
              <div class="support-icon icon-4 discount"></div>
              <span>VC无限橙果汁全场8折</span>
            </li>
            <li class="supports-item border-top-1px">
              <div class="support-icon icon-4 special"></div>
              <span>单人精彩套餐</span>
            </li>
            <li class="supports-item border-top-1px">
              <div class="support-icon icon-4 invoice"></div>
              <span>该商家支持发票,请下单写好发票抬头</span>
            </li>
            <li class="supports-item border-top-1px">
              <div class="support-icon icon-4 guarantee"></div>
              <span>已加入“外卖保”计划,食品安全保障</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="pics border-bottom-1px border-top-1px top-16">
        <div class="text text2">商家实景</div>
        <scroll class="swiper" :scrollY="false" :scrollX="true">
          <ul class="pics-wrapper">
            <li class="pics-item">
              <img
                src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180"
              />
            </li>
            <li class="pics-item">
              <img
                src="http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180"
              />
            </li>
            <li class="pics-item">
              <img
                src="http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180"
              />
            </li>
            <li class="pics-item">
              <img
                src="http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
              />
            </li>
            <li class="pics-item">
              <img
                src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180"
              />
            </li>
            <li class="pics-item">
              <img
                src="http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180"
              />
            </li>
          </ul>
        </scroll>
      </div>
      <div class="infos border-top-1px top-16">
        <div class="text text2">商家信息</div>
        <ul class="infos-wrapper">
          <li class="infos-item border-top-1px">该商家支持发票,请下单写好发票抬头</li>
          <li class="infos-item border-top-1px">品类:其他菜系,包子粥店</li>
          <li class="infos-item border-top-1px">地址:北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340</li>
          <li class="infos-item border-top-1px">营业时间:10:00-20:30</li>
        </ul>
      </div>
    </div>
  </scroll>
*/
import scroll from "@/components/common/scroll";
export default {
  name: "seller",
  components: {
    scroll
  }
};
</script>

<style lang="stylus">
.wrap {
  width: 100%;
  height: 636px;
}

.seller {
  background: #f3f5f7;
  overflow: scroll;

  .top-16 {
    margin-top: 16px;
  }

  .text2 {
    margin-bottom: 12px;
  }

  .seller-top {
    box-sizing: border-box;
    padding: 0 18px;
    background: #fff;

    .result {
      width: 100%;
      padding: 18px 0;
      display: flex;
      justify-content: space-between;

      .result-left {
        .name {
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          margin-bottom: 8px;
        }

        .deliveryPrice {
          height: 18px;
          display: flex;
          align-items: center;
          font-size: 10px;
          color: rgb(77, 85, 93);

          .star-item {
            margin: 0;
            margin-right: 8px;

            span {
              margin-right: 12px;
            }
          }
        }
      }

      .result-right {
        text-align: center;

        i {
          font-size: 24px;
          line-height: 24px;
          color: red;
        }

        .collection-status {
          font-size: 10px;
          line-height: 10px;
          color: rgb(77, 85, 93);
          margin-top: 4px;
        }
      }
    }

    .shop-massage {
      width: 100%;
      display: flex;

      .massage-item {
        flex: 1;
        text-align: center;
        margin: 18px 0;

        .text {
          font-size: 10px;
          color: rgb(147, 157, 159);
          line-height: 10px;
          margin-bottom: 10px;
        }

        .price {
          font-size: 24px;
          font-weight: 200;
          line-height: 24px;
          color: rgb(7, 17, 27);

          span {
            font-size: 10px;
          }
        }
      }

      .deliveryPrice, position: relative, &::before {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        border-left: 1px solid rgba(7, 17, 27, 0.2);
        transform: scaleX(0.5);
        position: absolute;
        left: 0;
        top: 0;
      }

      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        border-left: 1px solid rgba(7, 17, 27, 0.2);
        transform: scaleX(0.5);
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  .seller-bulletin-supports {
    background: #fff;
    padding: 18px 18px 0;

    .text {
      font-size: 14px;
      line-height: 14px;
      color: rgb(7, 17, 27);
      margin-bottom: 8px;
    }

    .seller-bulletin {
      margin: 0 12px 16px;
      font-size: 12px;
      line-height: 24px;
      color: rgb(240, 20, 20);
      font-weight: 200;
    }

    .seller-supports {
      .supports-item {
        padding: 16px 12px;
        font-size: 12px;
        display: flex;
        align-items: center;

        .support-icon {
          margin-right: 6px;
        }
      }
    }
  }

  .pics {
    padding: 18px;
    background: #fff;

    .swiper {
      width: 100%;
      white-space: nowrap;

      .pics-wrapper {
        width: 1000px;
        display: inline-block;

        .pics-item {
          width: 120px;
          height: 90px;
          margin-right: 6px;
          float: left;

          img {
            width: 100%;
            height: 100%;
            display: block;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .infos {
    padding: 18px 18px 0;
    background: #fff;

    .infos-wrapper {
      .infos-item {
        padding: 16px 12px;
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}
</style>