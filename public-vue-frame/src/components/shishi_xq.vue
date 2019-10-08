<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
	  left-text="告警管理"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="content_bor">
		<div class="group_text">
			<label>告警类型：</label>
			<span>{{type}}</span>
		</div>
		<div class="group_text">
			<label>告警时间：</label>
			<span>{{time}}</span>
		</div>
		<div class="group_text">
			<label>历时：</label>
			<span>{{lishi}}</span>
		</div>
		<div class="group_text">
			<label>描述：</label>
			<span>{{con}}</span>
		</div>
		
	</div>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "shishi_xq",
		components:{publicTab},
        data() {
            return {
				type:'',
				time:'',
				lishi:'',
				con:'',
                
            };
        },
        mounted(){
          //console.log('12121',this.$route.query)
		  this.type = this.$route.query.type
		  this.time = this.$route.query.time
		  this.lishi = this.$route.query.lishi
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

