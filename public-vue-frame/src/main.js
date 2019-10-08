import Vue from 'vue'
import App from './App'
import router from './router'
import host from './utils/request.js'
import axios from 'axios'
import qs from 'qs'
import 'lib-flexible'
import 'vant/lib/index.css'
import VueLazyLoad from 'vue-lazyload'
import BaiduMap from 'vue-baidu-map'
import $ from 'jquery'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

import { Button  ,Cell, CellGroup, NavBar,Toast,Swipe, SwipeItem,NoticeBar,Row, 
Col,Icon,Tabbar, TabbarItem,Grid, GridItem,Tab, Tabs,SwipeCell,Skeleton,Tag ,Field,
 Uploader,IndexBar, IndexAnchor,Progress,DatetimePicker} from 'vant'

Vue.use(VueLazyLoad).use(Button).use(Cell).use(CellGroup).use(NavBar).use(Toast)
  .use(Swipe).use(SwipeItem).use(NoticeBar).use(Row).use(Col).use(Icon)
  .use(Tabbar).use(TabbarItem).use(Grid).use(GridItem).use(Tab).use(Tabs)
  .use(SwipeCell).use(Skeleton).use(Tag).use(Field).use(Uploader).use(IndexBar)
  .use(IndexAnchor).use(Progress).use(DatetimePicker);
  
Vue.use(BaiduMap,{
	ak:"S6TMTHcSsfeFNuItiEjxKMmvxn9SY3qw"
})

global.host= host;
Vue.prototype.$qs = qs;
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})