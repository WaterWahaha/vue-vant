<template>
	<van-tabbar v-model="active" class="active_tab">
	  <van-tabbar-item
	    v-for="(item,index) in tabbars"
	    :key="index"
	    @click="tab(index,item.name)"
	    :to="item.url"
	    is-link
	  >
	    <span :class="currIndex == index ? active:''">{{item.title}}</span>
	    <template slot="icon" slot-scope="props">
	      <van-icon :name="props.active ? item.active : item.normal" />
	
	    </template>
	  </van-tabbar-item>
	</van-tabbar>
</template>

<script>
	export default {
	    name: "tabbar",
		props: {
		          class_act: '',
		        },
	    data() {
	        return {
	            currIndex: 0,
	            active: 0,
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
	                    active:"desktop-o",
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
		  //console.log(this.class_act)
		  this.active = this.class_act
	    },
	
	    methods: {
	      //底部导航跳转
	        tab(index, val) {
	            this.currIndex = index;
	            this.$router.push(val);
	        },
	        
	    }
	};
</script>

<style>
</style>
