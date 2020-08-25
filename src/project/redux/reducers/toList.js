/*
 * @Author: huangxin
 * @Date: 2020-08-25 15:20:52
 * @LastEditTime: 2020-08-25 15:26:36
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/redux/reducers/toList.js
 */
import { handleActions } from 'redux-actions'

export const num = handleActions({
  'ADD':(state,action) => state+parseInt(action.payload.n),
  'DEL':(state,action) => state+parseInt(action.payload.n),
},0)