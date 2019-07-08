/*
接口请求函数
每个函数返回的都是promise
*/
import ajax from "./ajax"
const BASE="/api"
//根据经纬度获取位置详情---参数的顺序有要求
export const reqAddress = (longitude, latitude) => ajax.get(BASE+`/position/${latitude},${longitude}`)
//获取食品分类列表
export const reqCategorys = () => ajax({
  method: "GET",
  url: BASE+"/index_category"
})
//根据经纬度获取商铺列表
export const reqAddressShop = ({ latitude,
  longitude }) => ajax({
    method: "GET",
    url: BASE+"/shops",
    params: {
      //对象的名字顺序无要求
      latitude,
      longitude
    }
  })
