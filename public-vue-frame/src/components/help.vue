<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
	  title="帮助与反馈"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
	  right-text="提交"
    />
	<div class="wentiup_con">
		<textarea class="textarea_width" rows="6" placeholder="填写帮助与反馈"></textarea>
	</div>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "help",
		components:{publicTab},
        data() {
            return {
                
            };
        },
        mounted(){
          
        },

        methods: {
          //底部导航跳转
            tab(index, val) {
                this.currIndex = index;
                this.$router.push(val);
            },
			onClickLeft() {
			    this.$router.go(-1);//返回上一层   
			},
           
        }
    };
</script>

<style  scoped>
  @import "../../static/css/style.css";
  .van-nav-bar__title{
  	  color: #fff;
  }
  .van-nav-bar__text{
  	   color: #fff;
  }
  .van-nav-bar .van-icon{
  	  color: #fff;
  }
</style>

