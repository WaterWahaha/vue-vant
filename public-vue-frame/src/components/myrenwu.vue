<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="工作管理"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
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
	<!--底部导航-->
	<publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "myrenwu",
		components:{publicTab},
        data() {
            return {
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

            };
        },
        mounted(){
          //console.log('12121',this.content_center)
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
            renwu_ck(val){
            	   this.$router.push({name:"renwu_ck",params:{id:val}});
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
