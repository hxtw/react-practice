/*
 * @Author: huangxin
 * @Date: 2020-08-13 10:39:24
 * @LastEditTime: 2020-08-14 10:37:30
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/routes/routes.js
 */
import React,{Component} from 'react';
// import Home from './home/index'
import {BrowserRouter as Router, Route,  Link} from 'react-router-dom'
// import Category from '../other/category'
import Banner from '../other/banner'
//exact 精确匹配路由
class Music extends React.Component{
  render(){
  return <h1>music {this.props.location.query}</h1>
  }
}
class Category extends React.Component{
  render(){
  return <h1>Category{this.props.match.params.id}</h1>
  }
}
//Link 是跳转 Route 是渲染的出口
class Routes extends Component{
  constructor(){
    super();
    this.state = {
      n:33
    }
  }
  render(){
    return(
      <Router>
        {/* Link 是跳转 */}
        <ul>
          <li>
            <Link to='/index/12'>首页</Link>
          </li>
          <li>
            <Link to={'/tool/'+this.state.n}>工具模块</Link>
          </li>
          <li>
            <Link to={{pathname:'/music',query:'090'}}>音乐模块</Link>
          </li>
        </ul>
        <div>
        {/* Route 是渲染的出口 */}
          <Route path='/index/:id' component={Banner}></Route>
          <Route path='/tool/:id/:size' component={Category}></Route>
          <Route path='/music' component={Music}></Route>
        </div>
      </Router>
    )
  }
};
export default Routes;