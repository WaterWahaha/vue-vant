import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import test from '@/components/test'
import person from '@/components/person'
import person_info from '@/components/person_info'
import message from '@/components/message'
import control from '@/components/control'
import map from '@/components/map'
import xg_password from '@/components/xg_password'
import wentiup from '@/components/wentiup'
import myhedao from '@/components/myhedao'
import tousucl from '@/components/tousucl'
import gonggongxinxi from '@/components/gonggongxinxi'
import tongxunlu from '@/components/tongxunlu'
import tongxunlu_xq from '@/components/tongxunlu_xq'
import kaoheguanli from '@/components/kaoheguanli'
import mess_xq from '@/components/mess_xq'
import jiankongxitong from '@/components/jiankongxitong'
import gaojingguanli from '@/components/gaojingguanli'
import shishi_xq from '@/components/shishi_xq'
import lishi_xq from '@/components/lishi_xq'
import zonghezhanshi from '@/components/zonghezhanshi'
import hekuguanhu from '@/components/hekuguanhu'
import gongzuoguanli from '@/components/gongzuoguanli'
import huiyixitong from '@/components/huiyixitong'
import yiheyidang_ck from '@/components/yiheyidang_ck'
import yiheyice_ck from '@/components/yiheyice_ck'
import huiyiliebiao_ck from '@/components/huiyiliebiao_ck'
import huiyilishi_ck from '@/components/huiyilishi_ck'
import help from '@/components/help'
import myjianyi from '@/components/myjianyi'
import mapup from '@/components/mapup'
import myrenwu from '@/components/myrenwu'
import renwu_ck from '@/components/renwu_ck'
import qunzhongjubao_ck from '@/components/qunzhongjubao_ck'
import xunchashangbao_ck from '@/components/xunchashangbao_ck'
import message_ing from '@/components/message_ing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
	{
	  path: '/person',
	  name: 'person',
	  component: person
	},
	{
	  path: '/person_info',
	  name: 'person_info',
	  component: person_info
	},
	{
	  path: '/message',
	  name: 'message',
	  component: message
	},
	{
	  path: '/control',
	  name: 'control',
	  component: control
	},
	{
	  path: '/map',
	  name: 'map',
	  component: map
	},
	{
	  path: '/xg_password',
	  name: 'xg_password',
	  component: xg_password
	},
	{
	  path: '/wentiup',
	  name: 'wentiup',
	  component: wentiup
	},
	{
	  path: '/myhedao',
	  name: 'myhedao',
	  component: myhedao
	},
	{
	  path: '/tousucl',
	  name: 'tousucl',
	  component: tousucl
	},
	{
	  path: '/gonggongxinxi',
	  name: 'gonggongxinxi',
	  component: gonggongxinxi
	},
	{
	  path: '/tongxunlu',
	  name: 'tongxunlu',
	  component: tongxunlu
	},
	{
	  path: '/tongxunlu_xq',
	  name: 'tongxunlu_xq',
	  component: tongxunlu_xq
	},
	{
	  path: '/kaoheguanli',
	  name: 'kaoheguanli',
	  component: kaoheguanli
	},
	{
	  path: '/mess_xq',
	  name: 'mess_xq',
	  component: mess_xq
	},
	{
	  path: '/jiankongxitong',
	  name: 'jiankongxitong',
	  component: jiankongxitong
	},
	{
	  path: '/gaojingguanli',
	  name: 'gaojingguanli',
	  component: gaojingguanli
	},
	{
	  path: '/shishi_xq',
	  name: 'shishi_xq',
	  component: shishi_xq
	},
	{
	  path: '/lishi_xq',
	  name: 'lishi_xq',
	  component: lishi_xq
	},
	{
	  path: '/zonghezhanshi',
	  name: 'zonghezhanshi',
	  component: zonghezhanshi
	},
	{
	  path: '/hekuguanhu',
	  name: 'hekuguanhu',
	  component: hekuguanhu
	},
	{
	  path: '/gongzuoguanli',
	  name: 'gongzuoguanli',
	  component: gongzuoguanli
	},
	{
	  path: '/huiyixitong',
	  name: 'huiyixitong',
	  component: huiyixitong
	},
	{
	  path: '/yiheyidang_ck',
	  name: 'yiheyidang_ck',
	  component: yiheyidang_ck
	},
	{
	  path: '/yiheyice_ck',
	  name: 'yiheyice_ck',
	  component: yiheyice_ck
	},
	{
	  path: '/huiyiliebiao_ck',
	  name: 'huiyiliebiao_ck',
	  component: huiyiliebiao_ck
	},
	{
	  path: '/huiyilishi_ck',
	  name: 'huiyilishi_ck',
	  component: huiyilishi_ck
	},
	{
	  path: '/help',
	  name: 'help',
	  component: help
	},
	{
	  path: '/myjianyi',
	  name: 'myjianyi',
	  component: myjianyi
	},
	{
	  path: '/mapup',
	  name: 'mapup',
	  component: mapup
	},
	{
	  path: '/myrenwu',
	  name: 'myrenwu',
	  component: myrenwu
	},
	{
	  path: '/renwu_ck',
	  name: 'renwu_ck',
	  component: renwu_ck
	},
	{
	  path: '/qunzhongjubao_ck',
	  name: 'qunzhongjubao_ck',
	  component: qunzhongjubao_ck
	},
	{
	  path: '/xunchashangbao_ck',
	  name: 'xunchashangbao_ck',
	  component: xunchashangbao_ck
	},
	{
	  path: '/message_ing',
	  name: 'message_ing',
	  component: message_ing
	},
  ]
})
