/*
 * @Author: huangxin
 * @Date: 2020-08-14 11:09:24
 * @LastEditTime: 2020-08-20 17:16:02
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/view/home/index.js
 */

import React,{Component} from 'react';
import ChartPage from './chart'
import { get } from '../../utils/request';


class HomePage extends React.Component{
  constructor(){
    super();
    this.state ={
      item:[],
      x:['一月','二月','三月','四月','五月','六月']
    }
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    get('user/chart').then(res=>{
      this.setState({
        item:res.data.data
      })
    })
  }
  render(){
    return <ChartPage  {...this.state}/>
  }
}
export default HomePage;