<template>
  <div class="cart">
    <div class="cart-left">
      <div class="logo-wrapper" @click="showCartTable">
        <div class="logo">
          <i class="icon-shopping_cart"></i>
        </div>
        <div class="totalNum">{{counts}}</div>
      </div>
      <div class="totalPirce">￥{{prices}}</div>
      <div class="line"></div>
      <div class="desc">{{this.prices>=20?'免配送费':'另需配送费4元'}}</div>
    </div>
    <div class="cart-right">
      <div class="pay" :class="{heightlign:prices>=20}">{{prices>=20?'去结算':'￥20元起送'}}</div>
    </div>
    <ul class="cart-table" ref="cartTable">
      <li class="table-title border-bottom-1px">
        <span class="cart-wrapper">购物车</span>
        <span class="empty">清空</span>
      </li>
      <block v-for="(item,index) in cartFoods" :key="index">
        <li class="table-item border-bottom-1px">
          <div class="item-left">{{item.name}}</div>
          <div class="table-wrapper">
            <div class="table-pirce">{{item.price}}</div>
            <!-- <div class="table-cut icon-remove_circle_outline"></div> -->
            <div>-</div>
            <div class="table-count">{{item.count}}</div>
            <!-- <div class="table-add icon-add_circle"></div> -->
            <div>+</div>
          </div>
        </li>
      </block>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: {
    cartFoods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isTable: false
    };
  },
  computed: {
    // 总数
    counts() {
      let nums = 0;
      this.cartFoods.forEach(item => {
        nums += item.count;
      });
      return nums;
    },
    // 总价
    prices() {
      let nums = 0;
      this.cartFoods.forEach(item => {
        nums += item.count * item.price;
      });
      return nums;
    },
    
  },
  methods: {
    // 显示购物车内容
    showCartTable() {
      this.isTable = !this.isTable;
      if (this.isTable) {
        this.$refs.cartTable.style.transform =
          "translateY(-" + this.$refs.cartTable.clientHeight + "px)";
      } else {
        this.$refs.cartTable.style.transform = "translateY(0)";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.cart {
  width: 100%;
  height: 48px;
  display: flex;
  color: rgba(255, 255, 255, 0.4);
  position: fixed;
  bottom: 0;
  z-index: 100;

  .cart-left {
    flex: 1;
    background: #141d27;
    display: flex;
    align-items: center;

    .logo-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #141d27;
      margin: 0 18px;
      box-sizing: border-box;
      padding: 6px;
      margin-top: -10px;
      position: relative;

      .logo {
        width: 44px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-sizing: border-box;
        border-radius: 50%;
        background: #2b343c;
        font-size: 24px;

        &..heightlign {
          color: #fff;
          background: rgb(0, 160, 220);
        }
      }

      .totalNum {
        width: 24px;
        line-height: 16px;
        font-size: 9px;
        color: #fff;
        font-weight: 700;
        margin: 0 6px;
        background: rgb(240, 20, 20);
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    .totalPirce {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }

    .line {
      width: 1px;
      height: 24px;
      background: rgba(255, 255, 255, 0.1);
      margin: 0 6px;
    }

    .desc {
      font-size: 12px;
      line-height: 24px;
    }
  }

  .cart-right {
    width: 105px;
    background: #2b333b;
    font-size: 12px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;

    .pay.heightlign {
      color: #fff;
      background: #00b63b;
    }
  }

  .cart-table {
    width: 100%;
    max-height: 280px;
    overflow-y: scroll;
    background: #fff;
    position: absolute;
    z-index: -1;
    transition: 200ms;

    .table-title {
      width: 100%;
      height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      box-sizing: border-box;
      color: rgb(7, 17, 27);
      line-height: 40px;
      font-size: 14px;
      font-weight: 200;
      display: flex;
      justify-content: space-between;

      .empty {
        // float: right;
        color: rgb(0, 160, 220);
      }
    }

    .table-item {
      line-height: 48px;
      background: #fff;
      margin: 0 18px;
      color: rgb(7, 17, 27);
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      .table-wrapper {
        display: flex;
        align-items: center;

        .table-pirce {
          font-size: 14px;
          color: rgb(240, 20, 20);
          font-weight: 700;
          margin-right: 12px;
        }
      }
    }
  }
}

/* .table-item, .table-wrapper, .table-wrapper .table-cut, .table-add {
  font-size: 0.24rem;
  color: rgb(0, 160, 220);
}

.table-wrapper .table-count {
  width: 0.24rem;
  text-align: center;
} */
</style>