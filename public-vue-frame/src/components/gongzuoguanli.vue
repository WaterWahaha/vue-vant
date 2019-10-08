<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="工作管理"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<van-tabs v-model="active_t">
	  <van-tab title="一河一策">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in yhyc_info">
		  			<div class="person_info_1">
		  				<p>{{item.hdmc}}</p>
		  					<div class="control_right" @click="yhyc_ck(item.id)">
		  						<p class="tousu_status">查看</p>
		  					</div>
		  			</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="任务管理">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in renwu_info">
		  			<div class="person_info_1" @click="renwu_ck(item.id)">
		  				<p><span>{{item.time}}</span></p>
		  				<p>{{item.content}}</p>
							<div class="control_right">
								<p class="tousu_status" v-if="item.status == '完成'" style="color:#5FB878">{{item.status}}</p>
								<p class="tousu_status" v-if="item.status == '未处理'" style="color:#FF5722">{{item.status}}</p>
								<p class="tousu_status" v-if="item.status == '进行中'" style="color:#FF0000">{{item.status}}</p>
							</div>
		  			</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="群众举报">
	  		<div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in qzjb_info">
	  		  			<div class="person_info_1" @click="qunzhong_ck(item.id)">
	  		  				<p><span>{{item.time}}</span></p>
	  		  				<p>{{item.content}}</p>
	  		  				<div class="control_right">
	  		  					<p class="tousu_status" v-if="item.status == '已处理'" style="color:#5FB878">{{item.status}}</p>
	  		  					<p class="tousu_status" v-if="item.status == '未处理'" style="color:#FF5722">{{item.status}}</p>
	  		  				</div>
	  		  			</div>
	  		  		</li>
	  		  	</ul>
	  		</div>
	  </van-tab>
	  <van-tab title="巡查上报">
	  		<div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in xcsb_info">
	  		  			<div class="person_info_1" @click="xuncha_ck(item.id)">
	  		  				<p><span>{{item.time}}</span></p>
	  		  				<p>{{item.content}}</p>
	  		  				<div class="control_right">
	  		  					<p class="tousu_status" v-if="item.status == '已处理'" style="color:#5FB878">{{item.status}}</p>
	  		  					<p class="tousu_status" v-if="item.status == '待处理'" style="color:#FF5722">{{item.status}}</p>
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
        name: "gongzuoguanli",
		components:{publicTab},
        data() {
            return {
                active_t: 0,
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
						rwbt:"海城河",
						hdmc:"杨柳河",
						gzrw:'1231213',
						rwcy:'1231m',
						fbr:'海城，海城，海城',
						xzdw:'辽河',
						mbjd:'II级',
						xxxx:'II级',
					},
				],
				renwu_info:[
					{
						id:'1',
						status:'完成',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:19:00",
					},
					{
						id:'2',
						status:'未处理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
					{
						id:'3',
						status:'进行中',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
				],
				qzjb_info:[
					{
						id:'1',
						status:'已处理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:19:00",
					},
					{
						id:'2',
						status:'未处理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
					{
						id:'3',
						status:'未处理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
				],
				xcsb_info:[
					{
						id:'1',
						status:'已处理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:19:00",
					},
					{
						id:'2',
						status:'待处理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
					{
						id:'3',
						status:'待处理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
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
            yhyc_ck(val){
            	   this.$router.push({name:"yiheyice_ck",params:{id:val}});
            },
			renwu_ck(val){
				   this.$router.push({name:"renwu_ck",params:{id:val}});
			},
			qunzhong_ck(val){
				   this.$router.push({name:"qunzhongjubao_ck",params:{id:val}});
			},
			xuncha_ck(val){
				   this.$router.push({name:"xunchashangbao_ck",params:{id:val}});
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
