
/*
包含n个用于间接修改状态数据的方法对象
*/
import {reqAddress,reqCategorys,reqAddressShop} from "../api"

import { RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_ADDRESSSHOP } from "./mutation-types";

export default {

  //获取当前地址的异步action
  async getAddress({commit,state}){

    const {longitude, latitude}=state
    //发异步ajax请求
    const result=await reqAddress(longitude, latitude)

    //有了结果后提交mutation
    if(result.code===0){
      const address=result.data;
      commit(RECEIVE_ADDRESS,address)
    }

  },

  async getCategorys({commit},callback){


    //发异步ajax请求
    const result=await reqCategorys()

    //有了结果后提交mutation
    if(result.code===0){
      const categorys=result.data;
      commit(RECEIVE_CATEGORYS,categorys)

      //在更新状态数据后执行回调函数
      typeof callback==="function"&&callback()

    }

  },

  async getShops({commit,state}){

    const {longitude, latitude}=state
    //发异步ajax请求
    const result=await reqAddressShop({longitude, latitude})

    //有了结果后提交mutation
    if(result.code===0){
      const shops=result.data;
      commit(RECEIVE_ADDRESSSHOP,shops)
    }

  }

}
