<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
	  title="一河一档"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="content_bor">
		<div class="group_text">
			<label>河道名称：</label>
			<span>{{hdmc}}</span>
		</div>
		<div class="group_text">
			<label>河道别称：</label>
			<span>{{hdbc}}</span>
		</div>
		<div class="group_text">
			<label>河道编号：</label>
			<span>{{hdbh}}</span>
		</div>
		<div class="group_text">
			<label>河道长度：</label>
			<span>{{hdcd}}</span>
		</div>
		<div class="group_text">
			<label>途径区域：</label>
			<span>{{tjqy}}</span>
		</div>
		<div class="group_text">
			<label>河流流域：</label>
			<span>{{hlly}}</span>
		</div>
		<div class="group_text">
			<label>河流等级：</label>
			<span>{{hldj}}</span>
		</div>
		<div class="group_text">
			<label>水质等级：</label>
			<span>{{szdj}}</span>
		</div>
		<div class="group_text">
			<label>水质等级详细情况：</label>
			<span>{{szdjxxqk}}</span>
		</div>
		<div class="group_text">
			<label>河流类型标注：</label>
			<span>{{hllxbz}}</span>
		</div>
		<div class="group_text">
			<label>河长：</label>
			<span>{{hz}}</span>
		</div>
		<div class="group_text">
			<label>河长职务：</label>
			<span>{{hzzw}}</span>
		</div>
		<div class="group_text">
			<label>河流流向：</label>
			<span>{{hllx}}</span>
		</div>
		<div class="group_text">
			<label>坡降：</label>
			<span>{{pj}}</span>
		</div>
		<div class="group_text">
			<label>水流流浪：</label>
			<span>{{slll}}</span>
		</div>
		<div class="group_text">
			<label>落差：</label>
			<span>{{lc}}</span>
		</div>
		<div class="group_text">
			<label>起点：</label>
			<span>{{qd}}</span>
		</div>
		<div class="group_text">
			<label>终点：</label>
			<span>{{zd}}</span>
		</div>
		<div class="group_text">
			<label>含沙量：</label>
			<span>{{hsl}}</span>
		</div>
		<div class="group_text">
			<label>结冰期：</label>
			<span>{{jbq}}</span>
		</div>
		<div class="group_text">
			<label>支流数量：</label>
			<span>{{zlsl}}</span>
		</div>
		<div class="group_text">
			<label>河网形态：</label>
			<span>{{hwxt}}</span>
		</div>
		<div class="group_text">
			<label>密度：</label>
			<span>{{md}}</span>
		</div>
		<div class="group_text">
			<label>最宽：</label>
			<span>{{zk}}</span>
		</div>
		<div class="group_text">
			<label>最窄：</label>
			<span>{{zz}}</span>
		</div>
		<div class="group_text">
			<label>弯曲：</label>
			<span>{{wq}}</span>
		</div>
		<div class="group_text">
			<label>图层颜色：</label>
			<span>{{tcys}}</span>
		</div>
		<div class="group_text">
			<label>GIS图层坐标：</label>
			<span>{{gis}}</span>
		</div>
		<div class="group_text">
			<label>建档日期：</label>
			<span>{{jdrq}}</span>
		</div>
		
	</div>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "yiheyidang_ck",
		components:{publicTab},
        data() {
            return {
				hdmc:"海城河",
				hdbc:"杨柳河",
				hdbh:'1231213',
				hdcd:'1231m',
				tjqy:'海城，海城，海城',
				hlly:'辽河',
				hldj:'II级',
				szdj:'II级',
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
				jdrq:'2019/9/19',
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
                
            };
        },
        mounted(){
          //console.log('12121',this.$route.query)
		  //console.log(this.$route.params.id)
		  for(var i = 0; i< this.yhyd_info.length; i++){
			  if(this.$route.params.id == this.yhyd_info[i].id){
				  
				  this.hdmc = this.yhyd_info[i].hdmc
				  this.hdbc = this.yhyd_info[i].hdbc
				  this.hdbh = this.yhyd_info[i].hdbh
				  this.hdcd = this.yhyd_info[i].hdcd
				  this.tjqy = this.yhyd_info[i].tjqy
				  this.hlly = this.yhyd_info[i].hlly
				  this.hldj = this.yhyd_info[i].hldj
				  this.szdj = this.yhyd_info[i].szdj
				  this.szdjxxqk = this.yhyd_info[i].szdjxxqk
				  this.hllxbz = this.yhyd_info[i].hllxbz
				  this.hz = this.yhyd_info[i].hz
				  this.hzzw = this.yhyd_info[i].hzzw
				  this.hllx = this.yhyd_info[i].hllx
				  this.pj = this.yhyd_info[i].pj
				  this.slll = this.yhyd_info[i].slll
				  this.lc = this.yhyd_info[i].lc
				  this.zd = this.yhyd_info[i].zd
				  this.qd = this.yhyd_info[i].qd
				  this.hsl = this.yhyd_info[i].hsl
				  this.jbq = this.yhyd_info[i].jbq
				  this.zlsl = this.yhyd_info[i].zlsl
				  
				  this.hwxt = this.yhyd_info[i].hwxt
				  this.md = this.yhyd_info[i].md
				  this.zk = this.yhyd_info[i].zk
				  this.zz = this.yhyd_info[i].zz
				  this.wq = this.yhyd_info[i].wq
				  this.tcys = this.yhyd_info[i].tcys
				  this.gis = this.yhyd_info[i].gis
				  this.jdrq = this.yhyd_info[i].jdrq
			  }
		  }
		  //console.log('12121',this.$route.params.id)
		  
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

