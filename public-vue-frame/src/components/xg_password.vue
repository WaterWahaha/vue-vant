<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="修改密码"
	  left-text="返回"
	  left-arrow
	  right-text="提交"
	  @click-left="onClickLeft"
	  @click-right="onClickRight"
    />
	<van-cell-group>
	  <van-field
	    type="password"
	    label="旧密码"
	    placeholder="请输入旧密码"
	  />
	
	  <van-field
	    type="password"
	    label="新密码"
	    placeholder="请输入新密码"
	  />
	  <van-field
	    type="password"
	    label="确认新密码"
	    placeholder="请确认新密码"
	  />
	</van-cell-group>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "xg_password",
		components:{publicTab},
        data() {
            return {
               
            };
        },
        mounted(){
          //console.log('12121',this.content_center)
        },

        methods: {
           onClickLeft(){
			   this.$router.go(-1);//返回上一层
		   },
		   onClickRight(){
		   			   
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
