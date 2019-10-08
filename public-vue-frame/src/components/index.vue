<template>
  <div>
		 <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
		   title="首页"
		 />
    
    <van-notice-bar
      text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容内容"
      left-icon="volume-o"
    />
    <div class="siw" >
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="swi_img"/>
        </van-swipe-item>
      </van-swipe>
    </div>
	<div class="id_nav">
	    <div class="id_nav_l puff_left">
	        <a href="wentiup.html">
	            <p style="color: #fff;">问题上报</p>				
	            <span><router-link to="./wentiup"><img src="../../static/images/icon_up.png"></router-link></span>
	        </a>
	    </div>
	    <div class="id_nav_r puff_left">
	        <div class="id_nav_rt">
	            <router-link to="./myhedao">
	                <p style="color: #fff;">我的河道</p>
	                <span>一键获取我的河道详情</span>
	                <img src="../../static/images/icon_hz.png">
	            </router-link>
	        </div>
	        <div class="id_nav_rt clear_border">
	            <router-link to="./tousucl">
	                <p style="color: #fff;">投诉处理</p>
	                <span>处理河长所属河道投诉问题</span>
	                <img src="../../static/images/icon_zmkm.png">
	            </router-link>
	        </div>
	    </div>
	</div>
    <div class="mar_top">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(item,index) in content_center"
          :key="index"
          @click="center_to(index,item.name)"
          :icon="item.icon"
          :text="item.title"
        />
      </van-grid>
    </div>
	  <publicTab :class_act="0"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "tabbar",
		components:{publicTab},
        data() {
            return {
                images:[
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                
                content_center: [
                    
                    {
                        name: "zonghezhanshi",
                        title: "综合展示",
                        icon:"graphic"

                    },
                    {
                        name: "hekuguanhu",
                        title: "河库管护",
                        icon:"cluster"
                    },
                    {
                        name: "gongzuoguanli",
                        title: "工作管理",
                        icon:"column"
                    },
                    {
                        name: "kaoheguanli",
                        title: "考核管理",
                        icon:"award"
                    },
                    {
                        name: "tongxunlu",
                        title: "通讯录",
                        icon:"column"
                    },
                    {
                        name: "jiankongxitong",
                        title: "监控系统",
                        icon:"photograph"
                    },
                    {
                        name: "gaojingguanli",
                        title: "告警管理",
                        icon:"bell"
                    },
                    {
                        name: "huiyixitong",
                        title: "会议系统",
                        icon:"friends"
                    },
                    {
                        name: "gonggongxinxi",
                        title: "公共信息",
                        icon:"newspaper-o"
                    },
                ]
            };
        },
        mounted(){
          //console.log('12121',this.content_center)
        },

        methods: {
            //首页九宫格跳转
            center_to(index, val) {
                this.currIndex = index;
                this.$router.push(val);
            },
        }
    };
</script>

<style  scoped>
  @import "../../static/css/style.css";
  .van-nav-bar__title{
	  color: #fff;
  }
</style>
