<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
	  left-text="会议系统"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="content_bor">
		<div class="group_text">
			<label>会议主题：</label>
			<span>{{topic}}</span>
		</div>
		<div class="group_text">
			<label>会议时间：</label>
			<span>{{time}}</span>
		</div>
		<div class="group_text">
			<label>发起人：</label>
			<span>{{faqiren}}</span>
		</div>
		<div class="group_text">
			<label>记录人：</label>
			<span>{{jiluren}}</span>
		</div>
		<div class="group_text">
			<label>参会人员：</label>
			<span>{{canhuirenyuan}}</span>
		</div>
		<div class="group_text">
			<label>来宾：</label>
			<span>{{laibin}}</span>
		</div>
		<div class="group_text">
			<label>会议室：</label>
			<span>{{huiyishi}}</span>
		</div>
	</div>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "huiyilishi_ck",
		components:{publicTab},
        data() {
            return {
                
				topic:'开会开会开会',
				time:'2019/9/21 16:46:00',
				faqiren:'admin',
				jiluren:'admin',
				canhuirenyuan:'admin',
				laibin:'admin',
				huiyishi:'三楼会议室',
                
            };
        },
        mounted(){
          //console.log('12121',this.$route.query)
		  
		  
        },

        methods: {
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

