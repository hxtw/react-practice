/*
 * @Author: huangxin
 * @Date: 2020-08-11 10:38:05
 * @LastEditTime: 2020-08-11 10:58:33
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/category.js
 */
import React,{Component} from 'react'
import { Button } from 'antd'


class Category extends Component{
  constructor() {
    super();
    this.state = {
        lists:[
            {title:'在线咨询1',icon:'icon-shenghuo',color:'#f60'},
            {title:'在线咨询2',icon:'icon-shenghuo',color:'#49dacf'},
            {title:'在线咨询3',icon:'icon-jiaoyu',color:'#fa6900'},
            {title:'在线咨询4',icon:'icon-shenghuo',color:'#49dacf'},
            {title:'在线咨询5',icon:'icon-jiajujiafang',color:'#f60'},
            {title:'在线咨询6',icon:'icon-shenghuo',color:'#49dacf'},
            {title:'在线咨询7',icon:'icon-11',color:'#f00'}
        ]
    };
};
render () {
    let {lists} = this.state;
    var _list = lists.map((item,i)=>{
        return (
            <div className="category" key={i}>
                <i className={[`iconfont ${item.icon}`]} style={{background:item.color}}></i>
                <label>{item.title}</label>
            </div>
        )
    })
    return (
        <div className="index-category">
            {_list}
        </div>
    );
}
}
export default Category; 