import {ezaxios} from './ezaxios'
// 对ezaxios的进一步封装
// 针对home页面的所有数据请求的方法都在这个文件中
// 以后home页面的开发只跟该文件有关，与ezaxios无关
export function getHomeMultiData(){
  return ezaxios({
    url: 'http://192.168.68.201/home/multidata',
  })
}

export function getHomeGoodsData(type, page){
  return ezaxios({
    url: 'http://192.168.68.201/home/goods',
    params:{
      type, 
      page,
    }
  })
}