/*
 * @Author: huangxin
 * @Date: 2020-08-19 15:15:18
 * @LastEditTime: 2020-08-19 15:20:45
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/home/sider.js
 */
import React,{Component} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  MailOutlined,
} from '@ant-design/icons';

import './index.scss';
import {MenuData} from '../utils/menu'

const {Sider} = Layout;
const { SubMenu } = Menu;

class SiderPage extends Component {
    constructor(){
      super();
      this.state = {
        collapsed: false,
      };
    }
    render(){
      return (
          <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
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
          
      )
    }
  }
  export default SiderPage;