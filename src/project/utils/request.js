/*
 * @Author: huangxin
 * @Date: 2020-08-19 15:43:23
 * @LastEditTime: 2020-08-20 17:53:21
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /金渡教育/练习/react/event+axios+脚手架搭建+antd引入/react-demo/src/project/utils/request.js
 */
import axios from 'axios'
axios.defaults.withCredentials = true;

const GLOBAL_URL = 'http://47.96.117.121:8088/api/'
function http(method,url,data,header){
  method = method.toUpperCase();
  if(method == 'GET'){
    data = undefined
  }
  return axios({
    method:method,
    url:GLOBAL_URL+url,
    data:data || '',
    headers:header || {'Accept':'application/json'}
  }).then(res=>{
    return res;
  }).catch(error=>{
    return error
  })
}

export let get = url=>http('GET',url)
export let post = (url,data) => http('POST',url,data);
export let del = (url,data) => http('DELETE',url,data);