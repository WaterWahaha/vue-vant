<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
	  left-text="通讯录"
	  left-arrow
	  @click-left="onClickLeft"
    />
	
	<div class="txl_xq">
		<div class="touxiang">{{touxiang}}</div>
		<div class="name">{{name}}</div>
		<div class="tel">电话</div>
		<div class="tel_num"><a :href="'tel:' + tel">{{tel}}</a></div>
	</div>	
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "tongxunlu_xq",
		components:{publicTab},
        data() {
            return {
				touxiang:'',
				name:'',
				tel:'',
            };
        },
        mounted(){
		 // console.log('routeer',this.$route.params);//获取动态路由传值
		 //console.log(this.$route.query.name);
		 this.name = this.$route.query.name
		 this.tel = this.$route.query.tel
		 var tou = this.$route.query.name
		 this.touxiang = tou.slice(0,1)
		 //console.log(this.touxiang)
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


