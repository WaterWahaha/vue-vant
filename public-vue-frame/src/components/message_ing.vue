<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="聊天窗口"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
<div class="warpe">
    <div class="">
        <div class="chatsideall">
            <div class="chatside">
                <div class="chat_left">
                    <div class="chat_limg puff_left">
                        <a href="#"><img src="../../static/images/banner.jpg"> </a>
                    </div>
                    <div class="chat_txt puff_left">
                        <p>最近你在忙啥呢？项目跟得怎么样了？</p>
                        <span>2015-12-31 18:00</span>
                        <i class="let_icon"></i>
                    </div>
                </div>
            </div>
            <div class="chatside">
                <div class="chat_left">
                    <div class="chat_limg puff_right">
                        <a href="#"><img src="../../static/images/photo1.jpg"> </a>
                    </div>
                    <div class="puff_right chat_txt2">
                        <p>哈哈哈，我在做网站呢，好厉害啊，你要不要也过来试试啊？！</p>
                        <span>2015-12-31 18:00</span>
                        <i class="right_icon"></i>
                    </div>
                </div>
            </div>

            <div class="chatside">
                <div class="chat_left">
                    <div class="chat_limg puff_left">
                        <a href="#"><img src="../../static/images/banner.jpg"> </a>
                    </div>
                    <div class="chat_txt puff_left">
                        <p>好的，我马上过去。</p>
                        <span>2015-12-31 18:00</span>
                        <i class="let_icon"></i>
                    </div>
                </div>
            </div>

            <div class="chatside">
            <div class="chat_left">
                <div class="chat_limg puff_right">
                    <a href="#"><img src="../../static/images/photo1.jpg"> </a>
                </div>
                <div class="puff_right chat_txt2">
                    <p>哈哈哈，我在做网站呢，好厉害啊，你要不要也过来试试啊？！</p>
                    <span>2015-12-31 18:00</span>
                    <i class="right_icon"></i>
                </div>
            </div>
        </div>
            <div class="chatside">
                <div class="chat_left">
                    <div class="chat_limg puff_right">
                        <a href="#"><img src="../../static/images/photo1.jpg"> </a>
                    </div>
                    <div class="puff_right chat_txt2">
                        <p>哈哈哈，我在做网站呢，好厉害啊，你要不要也过来试试啊？！</p>
                        <span>2015-12-31 18:00</span>
                        <i class="right_icon"></i>
                    </div>
                </div>
            </div>
            <div class="chatside">
                <div class="chat_left">
                    <div class="chat_limg puff_right">
                        <a href="#"><img src="../../static/images/photo1.jpg"> </a>
                    </div>
                    <div class="puff_right chat_txt2">
                        <p>哈哈哈，我在做网站呢，好厉害啊，你要不要也过来试试啊？！</p>
                        <span>2015-12-31 18:00</span>
                        <i class="right_icon"></i>
                    </div>
                </div>
            </div>
            <div class="chatside">
                <div class="chat_left">
                    <div class="chat_limg puff_right">
                        <a href="#"><img src="../../static/images/photo1.jpg"> </a>
                    </div>
                    <div class="puff_right chat_txt2">
                        <p>哈哈哈，我在做网站呢，好厉害啊，你要不要也过来试试啊？！</p>
                        <span>2015-12-31 18:00</span>
                        <i class="right_icon"></i>
                    </div>
                </div>
            </div>
            <div class="chatside">
                <div class="chat_left">
                    <div class="chat_limg puff_right">
                        <a href="#"><img src="../../static/images/photo1.jpg"> </a>
                    </div>
                    <div class="puff_right chat_txt2">
                        <p>哈哈哈，我在做网站呢，好厉害啊，你要不要也过来试试啊？！</p>
                        <span>2015-12-31 18:00</span>
                        <i class="right_icon"></i>
                    </div>
                </div>
            </div>
            <div id="page1"></div>
        </div>
    </div>
</div>
<div class="postinput">
    <input type="text" placeholder="说些什么">
    <a href="#">发送</a>
    <a href="#"><i class="icon-share-alt"></i> </a>
</div>
	
	
	
  </div>

</template>

<script>
    export default {
        name: "tabbar",
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



