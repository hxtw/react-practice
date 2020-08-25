/*
 * @Author: huangxin
 * @Date: 2020-08-11 10:38:05
 * @LastEditTime: 2020-08-11 10:59:28
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/index.js
 */
import React,{Component} from 'react';
//import { Button } from 'antd';
//导入组件
import Banner from './banner';
import Category from './category';
//导入字体图标
import '../assets/font/iconfont.css';
import './home.css';

class Home extends Component {
    render(){
      return (
        <div className="index-content">
             <Banner />
             <Category />
        </div>
      )
    }
  }
  export default Home;