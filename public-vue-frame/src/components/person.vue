<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="个人中心"

    />
	<div class="person_info">
		<ul>
			<li>
				<img src="../../static/images/photo1.jpg"/>
				<div class="person_info_1">
					<p><span>河长</span></p>
					<p>海城河</p>
					<router-link to="./person_info">
						<div class="user_admin">
							<p>用户管理<van-icon name="arrow" /></p>
							
						</div>
					</router-link>
					
				</div>
			</li>
		</ul>
	</div>
	<div class="person_info_next">
		<ul>
			<li>
				<div class="person_info_1">
					<p>我的河道</p>
					<div class="turn_right">
						<router-link to="./myhedao">
							<p><van-icon name="arrow" /></p>
						</router-link>
					</div>
				</div>
			</li>
		</ul>
	</div>
	<div class="person_info_next_next">
		<ul>
			<li>
				<div class="person_info_2">
					<p>我上报的问题</p>
					<div class="turn_right">
						<p><van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>我参与的任务</p>
					<div class="turn_right">
						<router-link to="./myrenwu">
							<p><van-icon name="arrow" /></p>
						</router-link>
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>我的建议</p>
					<div class="turn_right">
						<router-link to="./myjianyi">
							<p><van-icon name="arrow" /></p>
						</router-link>
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>帮助与反馈</p>
					<div class="turn_right">
						<router-link to="./help">
							<p><van-icon name="arrow" /></p>
						</router-link>
					</div>
				</div>
			</li>
		</ul>
	</div>
    <!--底部导航-->
    <publicTab :class_act="4"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "tabbar",
		components:{publicTab},
        data() {
            return {
                
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
			user_admin() {
			    $router.push("person_info");
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
