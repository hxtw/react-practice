/*
 * @Author: huangxin
 * @Date: 2020-08-14 14:05:17
 * @LastEditTime: 2020-08-21 10:47:15
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/utils/menu.js
 */
export const MenuData = [
  {
    name: '首页',
    url: 'index',
    icon: 'home', 
  },{
    name: '列表',
    url: 'lists',
    icon: 'home', 
  },{
    name: '音乐模块',
    url: 'music', 
    icon: 'bars',
    children: [
      { name: '音乐系列', url: 'music' }, 
    ]
  }, {
    name: '工具模块',
    url: 'tool',
    icon: 'tool',
    children: [
      { name: '小应用', url: 'tools' },
      { name: '富文本编辑器', url: 'editor' },
      { name: '待办事项', url: 'todoList' },
    ],
  }, {
    name: '画廊模块',
    url: 'pic',
    icon: 'edit',
    children: [
      { name: '时光相片', url: 'album' },
    ],
  }, {
    name: '搜索模块',
    url: 'search',
    icon: 'search',
    children: [
      { name: '搜索引擎', url: 'searchEngine' },
    ],
  }]