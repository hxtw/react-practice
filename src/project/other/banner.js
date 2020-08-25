/*
 * @Author: huangxin
 * @Date: 2020-08-11 10:38:05
 * @LastEditTime: 2020-08-14 10:24:38
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/other/banner.js
 */
import React,{Component} from 'react'
import { Button } from 'antd'

class Banner extends Component{
    constructor() {
      super();
      this.timer = null; 
      this.state = {
          n:0, //初始化
          img:[
            require('../../assets/img/1.jpg'),
            require('../../assets/img/2.jpg'),
            require('../../assets/img/3.jpg'),
            require('../../assets/img/4.jpg'),
            require('../../assets/img/5.jpg')],
      };
  };
  componentDidMount () {   //挂载完成
      this.autoPlay();
  };
  autoPlay(){
      this.timer = setInterval(()=>{
          this.play();
      },2000)
  };
  play(){
      let {n,img} = this.state;
      n++;
      if(n==img.length){
          n = 0;
      };
      this.setState({
          n    //n:n
      })
  };
  componentWillUnmount(){ //销毁
      console.log('销毁');
      clearInterval(this.timer);
  }
  render () {
      let {n,img} = this.state;
      var imgList = img.map((item,i)=>{
              return <img key={i} src={item} style={{display:(i==n)?'block':'none'}}/> 
          });
      var liList = img.map((item,i)=>{
          return <li key={i} className={i==n?"selected":""}></li> 
      });
      return (
          <div className="banner">
              {imgList}
              <div className="banner-circle">
                  <ul>
                      {liList}  
                  </ul> 
              </div>
          </div>
      );
  }
}
export default Banner; 