<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="上报地点"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:400px" :scroll-wheel-zoom='true'></baidu-map>
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "mapup",
		components:{publicTab},
        data() {
            return {
				center: {lng: 109.45744048529967, lat: 36.49771311230842},
				zoom: 13,
                
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
				function showInfo(e){
					//alert(e.point.lng + "," + e.point.lat);
					var addPoint = eval(new BMap.Point(e.point.lng,e.point.lat));
					var marker = new BMap.Marker(addPoint);  // 创建标注
					map.addOverlay(marker);               // 将标注添加到地图中
				}
				map.addEventListener("click", showInfo);
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

