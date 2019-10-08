<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="考核管理"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    /> 
	<div class="tab_nav">
		<ul class="select_start">
			<li class="nav-tab-active">个人考核详情</li>
			<li>星级排名</li>
		</ul>
	</div>
	
	<div class="kaohe_grxq">
		<div class="kh_title">工作情况</div>
		<div class="kh_content">
			<div ><label>巡河次数（已巡/应巡）：</label><span>20</span></div>
			<div ><label>河道上报处理率：</label><span>50%</span></div>
		</div>
		<div class="kh_bott">
			<div>分数：80</div>
			<div>星级排名：III级</div>
		</div>
	</div>
	<div class="kaohe_xjpm">
		<div id="myChart" style="width: 400px;height: 300px;"></div>
	</div>
	<!--底部导航-->
	<publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import {drawBar_five} from "../utils/echarts.js"
	import publicTab from '@/components/publicTab'
    export default {
        name: "kaoheguanli",
		components:{publicTab},
        data() {
			
            return {
                active_t: 0,
				currentDate: new Date(),
                
            };
        },
        mounted(){
			
		   this.drawBar_five('myChart',['I星','II星','III星','IV星','V星'],[ '一月', '二月', '三月', '四月', '五月'],[
			{
			  name: 'I星',
			  type: 'bar',
			  data: [1, 15, 9, 18, 10]
			},
			{
			  name: 'II星',
			  type: 'bar',
			  data: [12, 14, 10, 15, 9]
			},
			{
			  name: 'III星',
			  type: 'bar',
			  data: [13, 15, 9, 18, 10]
			},
			{
			  name: 'IV星',
			  type: 'bar',
			  data: [20, 15, 9, 18, 10]
			},
			{
			  name: 'V星',
			  type: 'bar',
			  data: [30, 15, 9, 18, 10]
			}
		]);
		   $(".kaohe_grxq").show();
		   $(".kaohe_xjpm").hide();
		   $(".select_start li").on('click',function(){
			   if($(this).text() == '个人考核详情'){
				   $(".select_start li").removeClass("nav-tab-active")
				   $(this).addClass("nav-tab-active")
				   $(".kaohe_grxq").show();
				   $(".kaohe_xjpm").hide();
			   }
			   if($(this).text() == '星级排名'){
				   $(".select_start li").removeClass("nav-tab-active")
				   $(this).addClass("nav-tab-active")
				   $(".kaohe_grxq").hide();
				   $(".kaohe_xjpm").show();
			   }
			   
		   })
        },
		created () {
		    //this.drawLine()
		},

        methods: {
			drawBar_five,
          
			onClickLeft() {
			    this.$router.go(-1);//返回上一层
			},
		    formatter(type, value) {
				if (type === 'year') {
				   return `${value}年`;
				} else if (type === 'month') {
				   return `${value}月`
				}
				return value;
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
