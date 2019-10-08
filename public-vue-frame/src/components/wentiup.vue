<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="问题上报"
	  left-text="返回"
	  left-arrow
	  right-text="提交"
	  @click-left="onClickLeft"
    />
	<div class="wentiup_con">
		<textarea class="textarea_width" rows="6" placeholder="填写问题内容"></textarea>
		<van-uploader v-model="fileList" multiple />
		<div class="person_info_next">
			<ul>
				<li>
					<div class="person_info_2">
						<p>上报河长<van-icon name="arrow" /></p>
						<div class="turn_right">
							<p>测试河长</p>
							
						</div>
					</div>
				</li>
				<li>
					<div class="person_info_2">
						<p>上报编号<van-icon name="arrow" /></p>
						<div class="turn_right">
							<p>测试河长</p>
							
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="person_info_next_next">
			<ul>
				<li>
					<div class="person_info_2">
						<p>上报时间<van-icon name="arrow" /></p>
						<div class="turn_right">
							<p>2019/9/15</p>
							
						</div>
					</div>
				</li>
				<li>
					<div class="person_info_2">
						<router-link to="./mapup">
							<p>上报地点<van-icon name="arrow" /></p>
						</router-link>
						<div class="turn_right">
							<p>122.232121,40.36236552</p>
							
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<!--底部导航-->
	<publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "wentiup",
		components:{publicTab},
        data() {
            return {
                
                fileList: [
                        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
                        // Uploader 根据文件后缀来判断是否为图片文件
                        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                       
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
