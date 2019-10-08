<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="河道信息"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<div class="content_bor">
		<div class="group_text">
			<p>　　辽河，中国东北地区南部河流。汉代以前称句骊河，汉代称大辽河，五代以后称辽河。辽河发源于河北省平泉县七老图山脉的光头山，流经河北、内蒙古、吉林、辽宁四省（自治区），全长1345公里，注入渤海，流域面积21.9万平方公里。是中国七大河流之一。</p>
			<p>　　由于气候影响，辽河流域内洪水频繁，平均每隔7～8年发生一次较大的洪水，一般的洪水，平均2－3年即发生一次。辽河流域是中国水资源贫乏地区之一，特别是中下游地区，水资源短缺更为严重。由于大量人为因素，辽河已成为中国江河中污染最重的河流之一，辽河水无法存活生物，无法用于灌溉，更无法供人畜饮用。自1993年起开始了整治辽河工程，依法严厉打击未达标准的排污单位，取得了一定成效。辽河流域开发较晚，1949年后建设了一些水利工程，全流域较大蓄水发电工程有：红山水库、二龙山大型水库等。</p>
		</div>
		<div>
			<img src="../../static/images/banner.jpg" />
		</div>
		<div class="group_text">
			<p style="color: #333333;">河道信息</p>
			<p><label>河道等级：</label><span>一级</span></p>
			<p><label>河道长度：</label><span>5000m</span></p>
			<p><label>河道面积：</label><span>60.1m2</span></p>
			<p><label>水质等级：</label><span>一级</span></p>
		</div>
		
	</div>
	<baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:400px" :scroll-wheel-zoom='true'></baidu-map>
   <!--底部导航-->
   <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "myhedao",
		components:{publicTab},
        data() {
            return {
				center: {lng: 109.45744048529967, lat: 36.49771311230842},
				zoom: 13,
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
			handler ({BMap, map}) {
			      var point = new BMap.Point(116.400244,39.92556);
			      	map.centerAndZoom(point, 12);
			      	var marker = new BMap.Marker(point);  // 创建标注
			      	map.addOverlay(marker);              // 将标注添加到地图中
			      
			      	var label = new BMap.Label("我是文字标注哦",{offset:new BMap.Size(20,-10)});
			      	marker.setLabel(label);
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

