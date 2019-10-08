<template>
  <div>
    <van-nav-bar style="background-color: #2c80fa;" :color="'#fff'"
      title="通讯录"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
    />
	<van-index-bar :index-list="indexList" v-for="(item,index) in memberArr" >
	  <van-index-anchor :index="item[0].py" />
	  <div v-for="i in item"><router-link :to="'./tongxunlu_xq?tel='+ i.tel +'&name='+i.name"><van-cell :title="i.name" /></router-link></div>
	  
	 </van-index-bar>
		
    <!--底部导航-->
    <publicTab :class_act="8"></publicTab>
  </div>

</template>

<script>
	import vPinyin from '../utils/vue-py'
	import publicTab from '@/components/publicTab'
    export default {
        name: "tongxunlu",
		components:{publicTab},
        data() {
            return {
                
				//需要 手机号+姓名
				members1:[
					{'name':'张学友','tel':1111111111},
					{'name':'古天乐','tel':333333333},
					{'name':'孙一','tel':12345612312},
					{'name':'李四','tel':12345612312},
					{'name':'李','tel':12345612312},
					{'name':'刘','tel':12345612312},
				],
				members:[
					'赵四',
					'钱五',
					'孙一',
					'李四',
					'李',
					'刘',
				],
				indexList:[],
				memberArr:[],
				pyArr:[],

            };
        },
        mounted(){
		  var aa = [];
		  for(var i=0; i<this.members1.length; i++){
			  aa.push(this.members1[i].name)
		  }

		  this.members = aa
		  var pyArr = [];
		  var mem = []
		  var resultArray = this.members.sort(
		      function compareFunction(param1, param2) {
		          return param1.localeCompare(param2,"zh");
		      }
		  );
		  //console.log(resultArray);
		  for(var i = 0; i< this.members.length;i++){
			  var namePy = vPinyin.chineseToPinYin(this.members[i]).slice(0,1)
			  pyArr.push(namePy);
			  var tel = '';

			  for(var j = 0; j< this.members1.length;j++){
				  //根据名字查找手机号
				  if(this.members1[j].name == this.members[i]){
					  tel = this.members1[j].tel
				  }
			  }

			  var a = {
				  py:namePy,
				  name:this.members[i],
				  tel:tel
			  }
			  mem.push(a)
		  }
		   
		   //console.log('this.memberArr',this.memberArr)
		   
		   //去除重复的名字首字母
		    for(var i = 0; i < pyArr.length-1; i++){
		           for(var j = i+1; j < pyArr.length; j++){
		               if(pyArr[i]==pyArr[j]){
		   
		                 pyArr.splice(j,1);
		                  j--;
		              }
		          }
		    }
			var map = new Map();
			var newArr = [];
			mem.forEach(item => {
			     map.has(item.py) ? map.get(item.py).push(item) : map.set(item.py, [item]);
			})
			newArr = [...map.values()];
			//console.log('000',newArr);
			//console.log('dddd',newArr.sort(function(x,y){return x[1]-y[1]}))
			//console.log('arr',arr.sort(compare('name')))

			this.memberArr = newArr
			//console.log(this.memberArr)
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

