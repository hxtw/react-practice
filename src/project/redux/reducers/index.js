/*
 * @Author: huangxin
 * @Date: 2020-08-25 10:17:41
 * @LastEditTime: 2020-08-25 10:20:15
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/redux/reducers/index.js
 */
import { combineReducers } from 'redux'
// import * as todoList from './todoList'  //as别名

//combineReducers 大型的项目我们是需要将reducer拆分的，
//最后通过redux提供的combineReducers方法组合到一起
const rootReducer = combineReducers({
  // ...todoList,
})

export default rootReducer