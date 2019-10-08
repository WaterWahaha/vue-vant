<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="会议系统"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<van-tabs v-model="active_t">
	  <van-tab title="我的会议">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in hylb_info">
					<div class="person_info_1" @click="hylb_xq(item.id)">
						<p><span>{{item.title}}</span></p>
						<div class="control_right">
							<p>{{item.time}}</p>
						</div>
					</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="会议历史">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in hyls_info">
					<div class="person_info_1" @click="hyls_xq(item.id)">
						<p><span>{{item.title}}</span></p>
						<div class="control_right">
							<p>{{item.time}}</p>
						</div>
					</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	</van-tabs>
	<!--底部导航-->
	<publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "tabbar",
		components:{publicTab},
        data() {
            return {
                active_t: 0,
				hylb_info:[
					{
						id:'1',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:'2019/9/21 14:45:00'
					},
					{
						id:'2',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:'2019/9/21 14:45:00'
					},
				],
				hyls_info:[
					{
						id:'1',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:'2019/9/21 14:45:00'
					},
					{
						id:'2',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:'2019/9/21 14:45:00'
					},
				],
               
            };
        },
        mounted(){
          //console.log('12121',this.content_center)
        },

        methods: {
          
			onClickLeft() {
			    this.$router.go(-1);//返回上一层
			},
			hyls_xq(val){
				this.$router.push({name:"huiyilishi_ck",params:{id:val}});
			},
			hylb_xq(val){
				this.$router.push({name:"huiyiliebiao_ck",params:{id:val}});
			}
           
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
