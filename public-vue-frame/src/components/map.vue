<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="河道地图"
    />
	<baidu-map :center="center" id="map" :zoom="zoom" @ready="handler" style="height:800px" :scroll-wheel-zoom='true'></baidu-map>
    <!--底部导航-->
    <publicTab :class_act="1"></publicTab>
  </div>

</template>

<script>
	import publicTab from '@/components/publicTab'
    export default {
        name: "hedaomap",
		components:{publicTab},
        data() {
            return {
                center: {lng: 109.45744048529967, lat: 36.49771311230842},
                zoom: 13,
            };
        },
        mounted(){
          
        },

        methods: {
			handler ({BMap, map}) {
				    //new BMap.Map('map')
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
</style>
