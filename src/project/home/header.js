/*
 * @Author: huangxin
 * @Date: 2020-08-19 15:15:13
 * @LastEditTime: 2020-08-19 15:24:52
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/home/header.js
 */
import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { Layout, Menu,Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import './index.scss';

const { Header} = Layout;

class HeaderPage extends Component {
    constructor(){
      super();
    }
    goBack(){  //返回
      sessionStorage.removeItem('username')
      //跳转到登录
      this.props.history.push('/login')
    }
    render(){
      return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.props.toggle,
          })}
          <Button type="primary" onClick={()=>this.goBack()}>返回</Button>
        </Header>
          
      )
    }
  }
  export default HeaderPage;