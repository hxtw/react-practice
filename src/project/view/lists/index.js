/*
 * @Author: huangxin
 * @Date: 2020-08-20 09:46:31
 * @LastEditTime: 2020-08-21 09:43:45
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/view/lists/index.js
 */
import React,{Component} from 'react';
import { Button, Table, Modal } from 'antd';
import { get,del } from '../../utils/request';
const { confirm } = Modal;
class Lists extends React.Component{
  constructor(){
    super();
    this.state={
      listData:[]
    }
  }
  componentDidMount(){
    this.getData();
  }
  getData(){
    get('user/list').then(res=>{
      this.setState({
        listData:res.data.data
      })
    })
  }
  delete(id){
    del('user/delete/'+id).then(res=>{
      if(res.data.code == 20000){
        this.getData();
      }
    })
  }
  delModal(id){//删除弹框
    confirm({
      title: '删除管理员', 
      content: '确定要删除管理员吗？',
      okText:'确定',
      cancelText:'取消',
      onOk:()=>this.delete(id),
      onCancel:()=>{}
    });
  }
  render(){
    
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'account',
        key: 'account',
      },
      {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <a disabled={record.account=='admin' || record.account == sessionStorage.username} 
            onClick={()=>this.delModal(record.id)}>删除</a>
        ),
      },
    ];
    
    return (
      <div>
          <Button type="primary">创建角色</Button>
          <Table dataSource={this.state.listData} columns={columns} />;
      </div>
    )
  }
}
export default Lists;