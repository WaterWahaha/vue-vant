<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="河库管护"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<van-tabs v-model="active_t">
	  <van-tab title="分级职责">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in fjzz_info">
		  				<div class="person_info_1" @click="xiangqing(item.id)">
		  					<p><span>{{item.title}}</span></p>
		  						<div class="control_right">
		  							<p>2018-9-2</p>
		  						</div>
		  				</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="政策文件">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in fjzz_info">
		  				<div class="person_info_1" @click="xiangqing(item.id)">
		  					<p><span>{{item.title}}</span></p>
		  						<div class="control_right">
		  							<p>2018-9-2</p>
		  						</div>
		  				</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="治理措施">
	  		<div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in fjzz_info" @click="xiangqing(item.id)">
	  		  				<div class="person_info_1">
	  		  					<p><span>{{item.title}}</span></p>
	  		  						<div class="control_right">
	  		  							<p>2018-9-2</p>
	  		  						</div>
	  		  				</div>
	  		  		</li>
	  		  	</ul>
	  		</div>
	  </van-tab>
	  <van-tab title="应急预案">
	  		<div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in fjzz_info" @click="xiangqing(item.id)">
	  		  				<div class="person_info_1">
	  		  					<p><span>{{item.title}}</span></p>
	  		  						<div class="control_right">
	  		  							<p>2018-9-2</p>
	  		  						</div>
	  		  				</div>
	  		  		</li>
	  		  	</ul>
	  		</div>
	  </van-tab>
	  <van-tab title="工作计划">
	  		<div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in fjzz_info" @click="xiangqing(item.id)">
	  		  				<div class="person_info_1">
	  		  					<p><span>{{item.title}}</span></p>
	  		  						<div class="control_right">
	  		  							<p>2018-9-2</p>
	  		  						</div>
	  		  				</div>
	  		  		</li>
	  		  	</ul>
	  		</div>
	  </van-tab>
	  <van-tab title="流程办理">
	  		<div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in fjzz_info" @click="xiangqing(item.id)">
	  		  				<div class="person_info_1">
	  		  					<p><span>{{item.title}}</span></p>
	  		  						<div class="control_right">
	  		  							<p>2018-9-2</p>
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
        name: "hekuguanhu",
		components:{publicTab},
        data() {
            return {
				active_t: 0,
				fjzz_info:[
					{
						id:'1',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
					},
					{
						id:'1',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
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
            xiangqing(val){
            	   this.$router.push({name:"mess_xq",params:{id:val}});
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
