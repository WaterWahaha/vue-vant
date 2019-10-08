<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="投诉处理"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="mess">
		<ul>
			<li v-for="(item,index) in tousu_info">
				<div class="person_info_1">
					<p><span>{{item.time}}</span></p>
					<p>{{item.content}}</p>
						<div class="control_right">
							<p class="tousu_status" v-if="item.status == '完成'" style="color:#5FB878">{{item.status}}</p>
							<p class="tousu_status" v-if="item.status == '受理'" style="color:#FF5722">{{item.status}}</p>
							<p class="tousu_status" v-if="item.status == '处理中'" style="color:#FF0000">{{item.status}}</p>
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
        name: "tousucl",
		components:{publicTab},
        data() {
            return {
                active_t: 0,
				tousu_info:[
					{
						id:'1',
						status:'完成',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:19:00",
					},
					{
						id:'2',
						status:'受理',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
					{
						id:'3',
						status:'处理中',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/15 16:20:00",
					},
				],
                
            };
        },
        mounted(){
          //console.log('12121',this.content_center)
		  /* for( var i = 0 ; i < this.tousu_info.length; i++){
			  if(this.tousu_info[i].status == '完成'){
				 $('.tousu_status').css('color','blue')
			   }
			  //console.log(this.tousu_info)
		  } */
        },

        methods: {
			onClickLeft() {
			    this.$router.go(-1);//返回上一层
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
  .van-nav-bar__text{
  	   color: #fff;
  }
  .van-nav-bar .van-icon{
  	  color: #fff;
  }
</style>
