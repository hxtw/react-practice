/*
 * @Author: huangxin
 * @Date: 2020-08-13 10:24:58
 * @LastEditTime: 2020-08-19 15:30:13
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/home/index.js
 */
import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { Layout, Menu,Button } from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   MailOutlined,
// } from '@ant-design/icons';

import './index.scss';
import Main from './main'
import HeaderPage from './header'
import SiderPage from './sider'
// import {MenuData} from '../utils/menu'

const { Content } = Layout;
// const { SubMenu } = Menu;

class Home extends Component {
    constructor(){
      super();
      this.state = {
        collapsed: false,
      };
    }
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
    goBack(){  //返回
      sessionStorage.removeItem('username')
      //跳转到登录
      this.props.history.push('/login')
    }
    componentDidMount(){
      this.isLogin();
    }
    isLogin(){
      if(sessionStorage.username){
        this.props.history.push('/index')
      }else{
        this.props.history.push('/login')
      }
    }
    render(){
      return (
        <Router>
        <Layout>
          <SiderPage collapsed={this.state.collapsed} />
          <Layout className="site-layout">
            <HeaderPage toggle={this.toggle} collapsed={this.state.collapsed} history={this.props.history}/>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {/* 主体内容 */}
              <Main />
            </Content>
          </Layout>
        </Layout>
        </Router>
      )
    }
  }
  export default Home;