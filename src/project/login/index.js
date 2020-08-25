/*
 * @Author: huangxin
 * @Date: 2020-08-12 11:27:38
 * @LastEditTime: 2020-08-19 16:13:39
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/login/index.js
 */
import React,{Component} from 'react'
import { Form, Input, Button, Checkbox, notification} from 'antd';
import './index.scss'
import {post} from '../utils/request'

class Login extends Component{
  constructor(){
    super();
  }
  //验证通过调用
  onFinish = values => {
    // console.log('Success:', values);
    let {username,password} = values
    post('user/login',{account:username,password:password}).then(res=>{
      if(res.data.code == 20000){
        sessionStorage.setItem('username',username)
        this.props.history.push('/index')
      }else{
        this.openNotification('用户名密码错误')
      }
    }).catch(error=>{
      this.openNotification('用户异常')
    })
  };
  //提示框
  openNotification = (msg) => {
    notification.open({
      // message: msg,
      description:msg
    });
  };
  //验证失败调用
  onFinishFailed = errorInfo => {
    // this.openNotification()
    console.log('Failed:', errorInfo);
  };
  render(){
    const layout = { 
      labelCol: { span: 8 },//label 标签布局 栅格
      wrapperCol: { span: 16 }, ////表单样式
    };
    const tailLayout = { 
      wrapperCol: { 
        offset: 8,  //间隔
        span: 16 },
    };
    return (
         <Form
          {...layout}
          name="basic"
          initialValues={{ //设置默认值
            remember: true,
            username:'admin',
            password:'admin@123' 
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>
    )
  }
}
export default Login; 