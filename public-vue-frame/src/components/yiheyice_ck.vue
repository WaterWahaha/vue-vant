<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
	  title="一河一策"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="content_bor">
		<div class="group_text">
			<label>任务标题：</label>
			<span>{{rwbt}}</span>
		</div>
		<div class="group_text">
			<label>河道名称：</label>
			<span>{{hdmc}}</span>
		</div>
		<div class="group_text">
			<label>工作任务：</label>
			<span>{{gzrw}}</span>
		</div>
		<div class="group_text">
			<label>任务成员：</label>
			<span>{{rwcy}}</span>
		</div>
		<div class="group_text">
			<label>发布人：</label>
			<span>{{fbr}}</span>
		</div>
		<div class="group_text">
			<label>协助单位：</label>
			<span>{{xzdw}}</span>
		</div>
		<div class="group_text">
			<label>目标进度：</label>
			<span>{{mbjd}}</span>
		</div>
		<div class="group_text">
			<label>详细信息：</label>
			<span>{{xxxx}}</span>
		</div>
	</div>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "yiheyice_ck",
		components:{publicTab},
        data() {
            return {
				rwbt:"海城河",
				hdmc:"杨柳河",
				gzrw:'1231213',
				rwcy:'1231m',
				fbr:'海城，海城，海城',
				xzdw:'辽河',
				mbjd:'II级',
				xxxx:'II级',
				yhyc_info:[
					{
						id:'1',
						rwbt:"海城河",
						hdmc:"杨柳河",
						gzrw:'1231213',
						rwcy:'1231m',
						fbr:'海城，海城，海城',
						xzdw:'辽河',
						mbjd:'II级',
						xxxx:'II级',
					},
					{
						id:'2',
						rwbt:"海城河2",
						hdmc:"杨柳河2",
						gzrw:'1231213',
						rwcy:'1231m',
						fbr:'海城，海城，海城',
						xzdw:'辽河',
						mbjd:'II级',
						xxxx:'II级',
					},
				],
            };
        },
        mounted(){
          //console.log('12121',this.$route.query)
		  //console.log(this.$route.params.id)
		  for(var i = 0; i< this.yhyc_info.length; i++){
			  
			  if(this.$route.params.id == this.yhyc_info[i].id){
				  //console.log(this.yhyd_info)
				  this.rwbt = this.yhyc_info[i].rwbt
				  this.hdmc = this.yhyc_info[i].hdmc
				  this.gzrw = this.yhyc_info[i].gzrw
				  this.rwcy = this.yhyc_info[i].rwcy
				  this.fbr = this.yhyc_info[i].fbr
				  this.xzdw = this.yhyc_info[i].xzdw
				  this.mbjd = this.yhyc_info[i].mbjd
				  this.xxxx = this.yhyc_info[i].xxxx
			  }
		  }
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

