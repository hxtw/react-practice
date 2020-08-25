/*
 * @Author: huangxin
 * @Date: 2020-08-14 11:09:24
 * @LastEditTime: 2020-08-21 10:28:53
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/view/music/index.js
 */

import React, { Component } from 'react';
import { Table, Select } from 'antd';
import { get, del } from '../../utils/request';
import fetchJsonp from 'fetch-jsonp'
const { Option } = Select;
class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      loading:true
    }
  }
  componentDidMount() {
    this.getData(2);
  }
  getData(i) {
    fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${i}&size=100&offset=0&callback=jsonp_1578470847634_65767`, {
      method: 'get'
    }).then(res => {
      return res.json();
    }).then(data => {
      if (data.error_code == 22000) {
        var arr = [];
        for (var i = 0; i < data.song_list.length; i++) {
          arr.push({
            title: data.song_list[i].title,
            author: data.song_list[i].author
          })
        }
        this.setState({
          listData: arr,
          loading:false
        })
      }
    }).catch(error => {

    })
  }
  handleChange = value => {
    this.getData(value)
  }
  render() {

    const columns = [
      {
        title: 'ID',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: '歌曲名',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '歌手',
        dataIndex: 'author',
        key: 'author',
      },
    ];
    var selectData = [{ name: '新歌榜', id: 1 }, { name: '热歌榜', id: 2 }, { name: '摇滚榜', id: 11 }]
    return (
      <div>
        <Select defaultValue={selectData[0].name} style={{ width: 120 }} onChange={this.handleChange}>
          {
            selectData.map((item, index) => {
              return <Option key={item.id} value={item.id}>{item.name}</Option>
            })
          }
        </Select>
        <Table dataSource={this.state.listData.map((item, i) => ({ ...item, index: i + 1 }))} 
        columns={columns} 
        loading={this.state.loading}/>;
      </div>
    )
  }
}
export default Music;