/*
 * @Author: huangxin
 * @Date: 2020-08-14 11:04:39
 * @LastEditTime: 2020-08-21 10:51:27
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/home/main.js
 */
import React,{Component} from 'react';
import {Route} from 'react-router-dom'
import { Layout } from 'antd';


import HomePage from '../view/home/index'
import Music from '../view/music/index'
import Tool from '../view/tools/index'
import Lists from '../view/lists/index'


const { Content } = Layout;

class Main extends Component {
    render(){
      return (
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route path='/index' component={HomePage}></Route>
            <Route path='/tools' component={Tool}></Route>
            <Route path='/music' component={Music}></Route>
            <Route path='/lists' component={Lists}></Route>
          </Content>
      )
    }
  }
  export default Main;