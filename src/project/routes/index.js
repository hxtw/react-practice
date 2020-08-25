/*
 * @Author: huangxin
 * @Date: 2020-08-13 10:39:24
 * @LastEditTime: 2020-08-14 10:56:39
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/routes/index.js
 */
import React,{Component} from 'react'

import Banner from "../home/index";


class Category extends React.Component{
  render(){
  return <h1>Category</h1>
  }
}
class Music extends React.Component{
  render(){
  return <h1>Music</h1>
  }
}
let routes = [
  {
    path:'/index',
    component:Banner,
  },
  {
    path:'/tool',
    component:Category,
  },
  {
    path:'/music',
    component:Music,
  },
]
export default routes;