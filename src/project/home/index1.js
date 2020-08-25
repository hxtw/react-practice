import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { Layout, Menu,Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './index.scss';
import Main from './main'
import {MenuData} from '../utils/menu'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

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
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              {
                MenuData.map((item,index)=>{
                  if(item.children && item.children.length){
                    return (
                      <SubMenu key={item.url} icon={<MailOutlined />} title={item.name}>
                        {
                          item.children.map((sub,i)=>{
                            return (
                              <Menu.Item key={sub.url} icon={<UserOutlined />}>
                                <Link to={sub.url}>{sub.name}</Link>
                              </Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  }
                  return(
                    <Menu.Item key={item.url} icon={<UserOutlined />}>
                      <Link to={item.url}>{item.name}</Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <Button type="primary" onClick={()=>this.goBack()}>返回</Button>
            </Header>
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