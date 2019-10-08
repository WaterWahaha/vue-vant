/**
 *  drawbar方法，画柱形图
 * @param {string} id [div的id]
 * @param {sring} text [请求时携带的参数]
 * @param {sring} xdata [请求时携带的参数]
 * @param {sring} name [请求时携带的参数]
 * @param {sring} type [请求时携带的参数]
 * @param {sring} data [请求时携带的参数]
 */

export function drawBar(id,legend,ydata,series){
     // 基于准备好的dom，初始化echarts实例
     let myChart = this.$echarts.init(document.getElementById(id))

          // 指定图表的配置项和数据
          let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            legend: {
                data: legend,
                textStyle:{//图例文字的样式
                    color:'#fff',
                }

            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel :{
                    color:"#fff", //刻度颜色
                    rotate:-15,//-15度角倾斜显示
                }
            },
            yAxis: {
                type: 'category',
                data: ydata,
                axisLabel :{
                    color:"#fff", //刻度颜色
                }
            },
            series: series,
            color:['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39']
        };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);

 }

 /**
  *  drawPie方法，画环饼状图
  * @param {string} id [div的id]
  * @param {sring} legend [请求时携带的参数]
  * @param {sring} name [请求时携带的参数]
  * @param {sring} data [请求时携带的参数]
  */
 export function drawPie(id,legend,name,data){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(id))
      // 绘制图表
      var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
                orient: 'vertical',
                x: 'left',
                data:legend,
                textStyle:{//图例文字的样式
                    color:'#fff',
                }
            },
        series: [
            {
                name:name,
                type:'pie',
                radius: ['50%', '70%'],
                center: ['65%','45%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                color:['#CCCC00','#333399','#CC6600','#009966','#FF0033',],
                data:data
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
       myChart.setOption(option);
  }

   /**
    *  drawLine方法，线型图
    * @param {string} id [div的id]
    * @param {string} text [div的id]
    * @param {sring} legend [请求时携带的参数]
    * @param {sring} name [请求时携带的参数]
    * @param {sring} data [请求时携带的参数]
    */
   export function drawLine(id,xdata,series){
        // 基于准备好的dom，初始化echarts实例
       let myChart = this.$echarts.init(document.getElementById(id))
        // 绘制图表
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:xdata,
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                axisLabel: {
                    textStyle:{
                     color:"#fff", //刻度颜色
                   }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} ',
                    textStyle:{
                     color:"#fff", //刻度颜色
                   }
                },
            },
            series: series
        };
       myChart.setOption(option);
    }
	
	export function drawBar_five(id,legend,time,series){
	    var chartdata = series;

  var chart = document.getElementById(id);
  var barChart = this.$echarts.init(chart);

  var option = {
    legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: legend,
      },
    xAxis: {

      data: time,
      axisLine: {
        lineStyle: {
          color: 'rgba(227, 237, 252,0.5)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgba(146, 163, 185, 0.9)'
      }
    },
  tooltip: {
    show: true,
    showContent: true,
    alwaysShowContent: true,
    triggerOn: 'mousemove',
    trigger: 'axis',
    axisPointer:
    {
      label: {
        show: false,
      }
    }

  },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(227, 237, 252,0.5)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(227, 237, 252,0.5)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgba(146, 163, 185, 0.9)'
      }
    },
    series: chartdata,
    color:['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39']
  };

	barChart.setOption(option);;
}
	export function color_line(id,color,data,name,series){
	
	  var myChart = this.$echarts.init(document.getElementById(id));
			 // 绘制图表
			var option = {
				xAxis: {
				  type: 'category',
				  data: data,
				  axisLabel :{
					 interval:0,
					 rotate:-70,//-15度角倾斜显示
					 
				   },
				},
				yAxis: [
				  {
					  type: 'value',
					  name: name,
					  nameTextStyle:{//图例文字的样式
					  },
					  min: 0,
					  axisLabel: {
						  formatter: '{value} ',
					  },
				  },
				  
				],
				series: [{
					data: series,
					type: 'line',
					smooth: true
				}],
				color:color
			};
			myChart.setOption(option);
	}

    //获取当前时间，格式YYYY-MM-DD
     export function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
    //获取去年今日时间
    export function getLastFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = parseFloat(date.getFullYear());
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + '-01' + '-01';
        return currentdate;
    }
    //获取本周第一天
    export function showWeekFirstDay()
      {
          var Nowdate=new Date();
          var WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
          var M=Number(WeekFirstDay.getMonth())+1
          var d = WeekFirstDay.getDate()

          return WeekFirstDay.getFullYear()+ "-" + (M < 10 ? ('0' + M) : M) + "-" + (d < 10 ? ('0' + d) : d);
      }
    //获取本周最后一天
    export function showWeekLastDay()
      {
          var Nowdate=new Date();
          var year = parseFloat(Nowdate.getFullYear());
          var WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
          var WeekLastDay=new Date((WeekFirstDay/1000+6*86400)*1000);
          var M=Number(WeekLastDay.getMonth())+1
          var d = WeekLastDay.getDate();
          return WeekLastDay.getFullYear()+ "-" + (M < 10 ? ('0' + M) : M) + "-" + (d < 10 ? ('0' + d) : d);
      }
      //获取本月第一天
      export function showMonthFirstDay()
        {
            var Nowdate=new Date();
            var MonthFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth(),1);
            var M=Number(MonthFirstDay.getMonth())+1
            var d = MonthFirstDay.getDate();
            return MonthFirstDay.getFullYear()+ "-" + (M < 10 ? ('0' + M) : M) + "-" + (d < 10 ? ('0' + d) : d);
        }
      //获取本月最后一天
      export function showMonthLastDay()
        {
            var Nowdate=new Date();
            var MonthNextFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth()+1,1);
            var MonthLastDay=new Date(MonthNextFirstDay-86400000);
            var M=Number(MonthLastDay.getMonth())+1
            return MonthLastDay.getFullYear()+"-"+M+"-"+MonthLastDay.getDate();
        }
        //获取当前时间前7天，格式YYYY-MM-DD
        export function getNowFormatDate_last(n){
           var n = n;
           var d = new Date();
           var year = d.getFullYear();
           var mon = d.getMonth() + 1;
           var day = d.getDate();
           if(day <= n) {
               if(mon > 1) {
                   mon = mon - 1;
               } else {
                   year = year - 1;
                   mon = 12;
               }
           }
           d.setDate(d.getDate() - n);
           year = d.getFullYear();
           mon = d.getMonth() + 1;
           day = d.getDate();
           var s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
           return s;

         }
         //获取上个月的时间
         export function getNowLastMonth(){
            var Nowdate=new Date();
            Nowdate.setMonth(Nowdate.getMonth()-1);
            var y = Nowdate.getFullYear();
            var m = Nowdate.getMonth()+1;
            var d = Nowdate.getDate();
            var formatwdate = y+'-'+(m < 10 ? ('0' + m) : m) + "-" + (d < 10 ? ('0' + d) : d);
            return formatwdate
         }

 export default {

}
