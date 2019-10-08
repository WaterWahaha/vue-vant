<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="综合展示"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<van-tabs v-model="active_t">
	  <van-tab title="河流地图">
		  <div class="mess">
		  	<baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:800px" :scroll-wheel-zoom='true'></baidu-map>
		  </div>
	  </van-tab>
	  <van-tab title="任务处理">
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
	  <van-tab title="巡河管理">
		  <div class="mess">
	  		  <ul>
	  		  	<li v-for="(item,index) in xunhe_info">
	  		  		<div class="person_info_1">
	  		  			<p><span>{{item.time}}</span></p>
	  		  			<p>{{item.content}}</p>
	  		  				<div class="control_right">
	  		  					<p class="tousu_status">查看</p>
	  		  				</div>
	  		  		</div>
	  		  	</li>
	  		  </ul>
		  </div>
	  </van-tab>
	  <van-tab title="一河一档">
	  		  <div class="mess">
	  		  	<ul>
	  		  		<li v-for="(item,index) in yhyd_info">
	  		  			<div class="person_info_1">
							<p>{{item.hdmc}}</p>
							
								<div class="control_right" @click="yhyd_ck(item.id)">
									<p class="tousu_status">查看</p>
								</div>

	  		  			</div>
	  		  		</li>
	  		  	</ul>
	  		  </div>
	  </van-tab><van-tab title="一河一策">
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
	</van-tabs>
	<!--底部导航-->
	<publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "zonghezhanshi",
		components:{publicTab},
        data() {
            return {
				active_t: 0,
				center: {lng: 109.45744048529967, lat: 36.49771311230842},
				zoom: 13,
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
				xunhe_info:[
					{
						id:'1',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:19:00",
					},
					{
						id:'2',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
					{
						id:'3',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
				],
				yhyd_info:[
					{
						id:'1',
						hdmc:"海城河",
						hdbc:"杨柳河",
						hdbh:'1231213',
						hdcd:'1231m',
						tjqy:'海城，海城，海城',
						hlly:'辽河',
						hldj:'II级',
						szdj:'I级',
						szdjxxqk:[],
						hllxbz:'标注',
						hz:'张三',
						hzzw:'巡河员',
						hllx:'自东向西',
						pj:'5%',
						slll:'5 t/h',
						lc:'5%',
						qd:'海城',
						zd:'海城',
						hsl:'5kg/m³',
						jbq:'一月到三月',
						zlsl:'5',
						hwxt:'网状水系',
						md:'5公里/平方公里',
						zk:'50',
						zz:'5',
						wq:'弯曲河流',
						tcys:'#ff0000',
						gis:'',
						jdrq:'2019/9/19'
					},
					{
						id:'2',
						hdmc:"海城河2",
						hdbc:"杨柳河2",
						hdbh:'1231213',
						hdcd:'1231m',
						tjqy:'海城，海城，海城',
						hlly:'辽河',
						hldj:'II级',
						szdj:'IV级',
						szdjxxqk:[],
						hllxbz:'标注',
						hz:'张三',
						hzzw:'巡河员',
						hllx:'自东向西',
						pj:'5%',
						slll:'5 t/h',
						lc:'5%',
						qd:'海城',
						zd:'海城',
						hsl:'5kg/m³',
						jbq:'一月到三月',
						zlsl:'5',
						hwxt:'网状水系',
						md:'5公里/平方公里',
						zk:'50',
						zz:'5',
						wq:'弯曲河流',
						tcys:'#ff0000',
						gis:'',
						jdrq:'2019/9/19'
					},
				],
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
						rwbt:"海城河2",
						hdmc:"杨柳河2",
						gzrw:'1231213',
						rwcy:'1231m',
						fbr:'海城，海城，海城',
						xzdw:'辽河',
						mbjd:'II级',
						xxxx:'II级',
					},
				],
            };
        },
        mounted(){
          //console.log('12121',this.$route.params.id)
		  
        },

        methods: {
			onClickLeft() {
			    this.$router.go(-1);//返回上一层
			},
			
			handler ({BMap, map}) {
			      var point = new BMap.Point(116.400244,39.92556);
			      	map.centerAndZoom(point, 12);
			      	var marker = new BMap.Marker(point);  // 创建标注
			      	map.addOverlay(marker);              // 将标注添加到地图中
			      
			      	var label = new BMap.Label("我是文字标注哦",{offset:new BMap.Size(20,-10)});
			      	marker.setLabel(label);
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
               },
			   yhyd_ck(val){
				   this.$router.push({name:"yiheyidang_ck",params:{id:val}});
			   },
			   yhyc_ck(val){
			   	   this.$router.push({name:"yiheyice_ck",params:{id:val}});
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
