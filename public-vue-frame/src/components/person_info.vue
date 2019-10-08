<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="个人信息"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="person_info_next">
		<ul>
			<li>
				<div class="person_info_1">
					<p>头像</p>
					<div class="turn_right_tx">
						
						<p><img src="../../static/images/photo1.jpg"/><van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
		</ul>
	</div>
	<div class="person_info_next_next">
		<ul>
			<li>
				<div class="person_info_2">
					<p>姓名</p>
					<div class="turn_right">
						<p>张三<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>性别</p>
					<div class="turn_right">
						<p>男<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>部门</p>
					<div class="turn_right">
						<p>河<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>职位</p>
					<div class="turn_right">
						<p>河长<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>所属区域</p>
					<div class="turn_right">
						<p>海城<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>所属河道</p>
					<div class="turn_right">
						<p>海城河<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>电话</p>
					<div class="turn_right">
						<p>15632123222<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>邮箱</p>
					<div class="turn_right">
						<p>132623123sina@.com<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>微信</p>
					<div class="turn_right">
						<p>132623123<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_2">
					<p>QQ</p>
					<div class="turn_right">
						<p>132623123@qq.com<van-icon name="arrow" /></p>
						
					</div>
				</div>
			</li>
			<li>
				<div class="person_info_1">
					<p>修改密码</p>
					<div class="turn_right" @click="xg_pwd()">
						<p><van-icon name="arrow" /></p>
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
        name: "person_info",
		components:{publicTab},
        data() {
            return {
               
            };
        },
        mounted(){
          //console.log('12121',this.content_center)
        },

        methods: {
			onClickLeft() {
			     this.$router.go(-1);//返回上一层
			},
			xg_pwd(){
				this.$router.push("./xg_password");
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
