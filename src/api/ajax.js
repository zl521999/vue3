/*
一个发送ajax请求的函数
统一处理请求异常，
异步请求成功的数据不是response，而是response.data

*/
import axios from "axios"

//const qs=require("qs");
import qs from "qs"
 //请求超时
 axios.defaults.timeout=20000
 //请求------
 axios.interceptors.request.use((config)=>{

  const {method,data}=config
  //拦截器的请求，进行处理json数据
  if(method.toLowerCase()==="post"&&data&&typeof data==="object"){
    config.data=qs.stringify(data)
  }
  return config
 })


 //响应-----
 axios.interceptors.response.use(response=>{

  return response.data

 },error=>{
  //return Promise.reject(error)
  alert("请求异常:"+error.message)
  return new Promise(()=>{})//请求异常时终端promise链
 })

 export default axios
/*  axios.get("/api/test_get",{
   params:{name:"Tom",pwd:"123"}
 })
 axios.post("/api/test_post",{name:"jack",pwd:"456"})
 */


