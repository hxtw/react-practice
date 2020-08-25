/*
 * @Author: huangxin
 * @Date: 2020-08-11 09:58:20
 * @LastEditTime: 2020-08-25 10:19:14
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routers from './project/routes/routes'
import 'antd/dist/antd.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './project/redux/reducers/index'
import * as serviceWorker from './serviceWorker'; //资源缓存 -—— 如果断网，第二次进入会从缓存中取，不会显示空白页面

const store = createStore(reducer)

//React.StrictMode 严格模式
ReactDOM.render(
  <Provider store={store}>
    <Routers />,
  </Provider>,
  document.getElementById('root')
);
// ReactDOM.render(
//   // <React.StrictMode>
//     <Routers />,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
