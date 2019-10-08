<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
	  title="巡查上报"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="content_bor">
		<div class="group_text">
			<label>任务名称：</label>
			<span>{{rwmc}}</span>
		</div>
		<div class="group_text">
			<label>任务类别：</label>
			<span>{{rwlb}}</span>
		</div>
		<div class="group_text">
			<label>任务成员：</label>
			<span>{{rwcy}}</span>
		</div>
		<div class="group_text">
			<label>民众举报信息：</label>
			<span>{{mzjbxx}}</span>
		</div>
		<div class="group_text">
			<label>详细信息：</label>
			<span>{{xxxx}}</span>
		</div>
		<div class="group_text">
			<label>任务发布人：</label>
			<span>{{rwfbr}}</span>
		</div>
		<div class="group_text">
			<label>任务发布日期：</label>
			<span>{{rwfbrq}}</span>
		</div>
		<div class="group_text">
			<label>任务完成度：</label>
			<span>{{rwwcd}}</span>
		</div>
		<div class="group_text">
			<label>任务完成度及详细情况：</label>
			<span>{{rwwcdjxxxx}}</span>
		</div>
	</div>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "xunchashangbao_ck",
		components:{publicTab},
        data() {
            return {
				rwmc:'',
				rwlb:'',
				rwcy:'',
				mzjbxx:'',
				xxxx:'',
				rwfbr:'',
				rwfbrq:'',
				rwwcd:'',
				rwwcdjxxxx:'',
            };
        },
        mounted(){
          //console.log('12121',this.content_center)
		  this.type = this.$route.query.type
		  this.time = this.$route.query.time
		  this.xj_time = this.$route.query.xj_time
		  this.con = this.$route.query.con
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

