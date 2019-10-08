<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="消息通知"
    />
	<van-tabs v-model="active_t">
	  <van-tab title="消息">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in mess_info">
		  			<van-swipe-cell :on-close="onClose">
		  			  <template slot="left">
		  			    <van-button square type="primary" text="选择" />
		  			  </template>
						<img :src="item.img_url"/>
						<div class="person_info_1">
							<router-link :to="'./message_ing?id='+ item.id">
								<p><span>{{item.title}}</span></p>
								<p>{{item.content}}</p>
									<div class="mess_right">
										<p>{{item.time}}</p>
										<p class="mess_num"><span >{{item.num}}</span></p>
									</div>
							</router-link>
						</div>
		  			 
		  			  <template slot="right">
		  			    <van-button square type="danger" text="删除" />
		  			  </template>
		  			</van-swipe-cell>
		  		</li>
				
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="报警">
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
	</van-tabs>
	
	
	
	<!--底部导航-->
    <publicTab :class_act="3"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "tabbar",
		components:{publicTab},
        data() {
            return {
                active_t: 3,
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
                //底部tabnav
                tabbars: [
                    {
                        name: "/",
                        title: "首页",
                        active:"home-o",
                        normal:"home-o",

                    },
                    {
                        name: "map",
                        title: "地图",
                        active:"map-marked",
                        normal:"location",

                    },
                    {
                        name: "control",
                        title: "控制台",
                        active:"live",
                        normal:"desktop-o",
                    },
                    {
                        name: "message",
                        title: "消息通知",
                        active:"volume",
                        normal:"volume-o",
                    },
                    {
                        name: "person",
                        title: "个人中心",
                        active:"manager",
                        normal:"manager-o",
                    }
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
           // clickPosition 表示关闭时点击的位置
               onClose(clickPosition, instance) {
                 switch (clickPosition) {
                   case 'left':
                   case 'cell':
                   case 'outside':
                     instance.close();
                     break;
                   case 'right':
                     Dialog.confirm({
                       message: '确定删除吗？'
                     }).then(() => {
                       instance.close();
                     });
                     break;
                 }
               }
        }
    };
</script>

<style  scoped>
  @import "../../static/css/style.css";
  .van-nav-bar__title{
  	  color: #fff;
  }
</style>
