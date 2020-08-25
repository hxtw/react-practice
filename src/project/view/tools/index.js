/*
 * @Author: huangxin
 * @Date: 2020-08-14 11:09:24
 * @LastEditTime: 2020-08-25 15:22:46
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/view/tools/index.js
 */
import React,{Component} from 'react'
import { Tabs } from 'antd';

import Salary from './component/salary'
import { connect } from 'echarts';
const { TabPane } = Tabs;

@connect(
  (state)=>({
    num:state.num
  })
)
class Tools extends React.Component{
  callback(key) {
    console.log(key);
  }
  render(){
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="工资帽" key="1">
          <Salary/>
        </TabPane>
        <TabPane tab="小房租" key="2">
          <Salary/>
        </TabPane>
        <TabPane tab="身体健康" key="3">
          <Salary/>
        </TabPane>
      </Tabs>
      </div>
    )
  }
}
export default Tools;