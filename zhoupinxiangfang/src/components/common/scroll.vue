<template>
  <div class="scroll" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data(){
    return {
      // scroll:{}
    }
  },
  props:{
    options:{
      type:Object
    },
    scrollY:{
      type:Boolean,
      default:true
    },
    scrollX:{
      type:Boolean,
      default:false
    },
    isListenScroll:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    // 
    // console.log("this=",this)
    // 定义到组件
    this.scroll = new BScroll(this.$refs.scroll,{
      click:true,
      scrollX:this.scrollX,
      scrollY:this.scrollY,
      probeType:this.isListenScroll?3:1
    });
    this.scroll.on("scroll",(position)=>{
      this.$emit("scroll",position);
    })
  },
  methods:{
    scrollToElement(...args){
      this.scroll && this.scroll.scrollToElement(...args)
    }
  }
};
</script>

<style>

</style>