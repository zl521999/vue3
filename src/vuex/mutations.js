
/*
包含n个用于直接修改状态数据的方法对象
*/
import { RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_ADDRESSSHOP } from "./mutation-types";

export default {
  [RECEIVE_ADDRESS](state,address){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,categorys){
    state.categorys=categorys
  },
  [RECEIVE_ADDRESSSHOP](state,shops){
    state.shops=shops
  }

}
