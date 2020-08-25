/*
 * @Author: huangxin
 * @Date: 2020-08-14 10:57:41
 * @LastEditTime: 2020-08-20 17:27:41
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/routes/routes.js
 */
import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//导入组件
import Home from '../home/index'
import Login from '../login/index'


//exact 精确匹配

class Routes extends Component {
    render(){
      return (
        <Router>
            <div>
                <Route path='/login' component={Login} ></Route>
                <Route path='/index' component={Home} ></Route>
                {/* <Route path='/lists' component={Lists} ></Route> */}
                {/* 重定向 */}
                {/* <Redirect from='/' to='/login' ></Redirect> */}
                <Route exact path='/' component={Login} ></Route>
            </div>
        </Router>
      )
    }
  }
  export default Routes;