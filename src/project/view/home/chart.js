/*
 * @Author: huangxin
 * @Date: 2020-08-19 16:22:38
 * @LastEditTime: 2020-08-20 17:17:54
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/view/home/chart.js
 */
import React,{Component} from 'react';
import echarts from 'echarts';
import ReactEcharts from "echarts-for-react";

class ChartPage extends Component {
  render(){
    var option = {
        xAxis: {
          type: 'category',
          data: this.props.x
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.props.item,
          type: 'line'
        }]
    };
    return (
      <ReactEcharts
              option={option}
              style={{width:'100%',height:'300px'}}
            />
    )
  }
}
export default ChartPage;