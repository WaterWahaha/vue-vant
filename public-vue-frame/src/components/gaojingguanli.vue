<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="告警管理"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<van-tabs v-model="active_t">
	  <van-tab title="实时告警">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in shishi_info">
					<div class="person_info_1">
						<router-link :to="'./shishi_xq?id='+ item.id + '&type='+ item.title + '&time=' +item.time + '&lishi=' + item.lishi + '&con='+item.content">
							<p><span>{{item.title}}</span></p>
							<p>{{item.content}}</p>
							<div class="control_right">
								<p>{{item.time}}</p>
							</div>
						</router-link>
					</div>
		  		</li>
		  	</ul>
		  </div>
	  </van-tab>
	  <van-tab title="历史告警">
		  <div class="mess">
		  	<ul>
		  		<li v-for="(item,index) in lishi_info">
					<div class="person_info_1">
						<router-link :to="'./lishi_xq?id='+ item.id + '&type='+ item.title + '&time=' +item.time + '&xj_time=' + item.xj_time+ '&con='+item.content">
							<p><span>{{item.title}}</span></p>
							<p>{{item.content}}</p>
							<div class="control_right">
								<p>{{item.time}}</p>
							</div>
						</router-link>
						
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
        name: "gaojingguanli",
		components:{publicTab},
        data() {
            return {
				active_t: 0,
				shishi_info:[
					{
						id:'1',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/19 09:55:00",
					    lishi:'1小时30分'
						
					},
					{
						id:'2',
						title:'河水污染严重2',
						content:"河水污染严重请尽快治理巡查2",
						time:"2019/9/19 09:55:00",
						lishi:'1小时30分'
					},
				],
				lishi_info:[
					{
						id:'1',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/19 09:55:00",
						xj_time:"2019/9/19 10:00:00",
					},
					{
						id:'2',
						title:'河水污染严重',
						content:"河水污染严重请尽快治理巡查",
						time:"2019/9/19 09:55:00",
						xj_time:"2019/9/19 10:00:00",
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
