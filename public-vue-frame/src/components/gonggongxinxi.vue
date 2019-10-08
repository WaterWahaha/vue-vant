<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="公共信息"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<van-tabs v-model="active_t">
	  <van-tab title="公告">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in mess_info">
					<div class="person_info_1" @click="chakan(item.id,'gonggao')">
						<p><span>{{item.title}}</span></p>
						<p>{{item.content}}</p>
							<div class="control_right">
								<p>2018-9-2</p>
							</div>
					</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="新闻">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in mess_info">
					<div class="person_info_1">
						<p><span>{{item.title}}</span></p>
						<p>{{item.content}}</p>
						<div class="mess_right">
						</div>
					</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="动态">
	  		<div class="mess">
	  		  	<ul>
	  		  		<ul>
	  		  			<li v-for="(item,index) in mess_info">
							<div class="person_info_1">
								<p><span>{{item.title}}</span></p>
								<p>{{item.content}}</p>
								<div class="mess_right">
								</div>
							</div>
	  		  			</li>
	  		  		</ul>
	  		  	</ul>
	  		</div>
	  </van-tab>
	  <van-tab title="河道">
	  		  <div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in bell_info">
	  		  			<van-swipe-cell :on-close="onClose">
	  		  			  <template slot="left">
	  		  			    <van-button square type="primary" text="选择" />
	  		  			  </template>
	  		  				<img :src="item.img_url"/>
	  		  				<div class="person_info_1">
	  		  					<p><span>{{item.title}}</span></p>
	  		  					<p>{{item.content}}</p>
	  		  						<div class="mess_right">
	  		  							<p>{{item.time}}</p>
	  		  							<p class="mess_num"><span >{{item.num}}</span></p>
	  		  						</div>
	  		  				</div>
	  		  			 
	  		  			  <template slot="right">
	  		  			    <van-button square type="danger" text="删除" />
	  		  			  </template>
	  		  			</van-swipe-cell>
	  		  		</li>
	  		  	</ul>
	  		  </div>
	  </van-tab>
	  <van-tab title="本地">
	  		  <div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in bell_info">
	  		  			<van-swipe-cell :on-close="onClose">
	  		  			  <template slot="left">
	  		  			    <van-button square type="primary" text="选择" />
	  		  			  </template>
	  		  				<img :src="item.img_url"/>
	  		  				<div class="person_info_1">
	  		  					<p><span>{{item.title}}</span></p>
	  		  					<p>{{item.content}}</p>
	  		  						<div class="mess_right">
	  		  							<p>{{item.time}}</p>
	  		  							<p class="mess_num"><span >{{item.num}}</span></p>
	  		  						</div>
	  		  				</div>
	  		  			 
	  		  			  <template slot="right">
	  		  			    <van-button square type="danger" text="删除" />
	  		  			  </template>
	  		  			</van-swipe-cell>
	  		  		</li>
	  		  	</ul>
	  		  </div>
	  </van-tab>
	  <van-tab title="其他">
	  		  <div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in mess_info">
	  		  				<div class="person_info_1">
	  		  					<p><span>{{item.title}}</span></p>
	  		  					<p>{{item.content}}</p>
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
        name: "gonggongxinxi",
		components:{publicTab},
        data() {
            return {
				active_t: 0,
				mess_info:[
					{
						id:'1',
						img_url:"https://img.yzcdn.cn/vant/apple-1.jpg",
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:"一分钟前",
						num:"5"
					},
					{
						id:'1',
						img_url:"https://img.yzcdn.cn/vant/apple-1.jpg",
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:"五分钟前",
						num:"10"
					},
				],
				bell_info:[
					{
						id:'1',
						img_url:"https://img.yzcdn.cn/vant/apple-1.jpg",
						title:'报警报警报警报警报警报警',
						content:"河水污染严重请尽快治理巡查",
						time:"一分钟前",
						num:"5"
					},
					{
						id:'1',
						img_url:"https://img.yzcdn.cn/vant/apple-1.jpg",
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:"五分钟前",
						num:"10"
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
		   onClose() {
			   
		   },
		   chakan(){
			   
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
