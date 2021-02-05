//ezaxios.js
import axios from 'axios'
// export default ezaxios(){  //如果只导出单个实例
export function ezaxios(config){ //如果要导出多个实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    method: 'GET',
    timeout: 5000
  })
  //
  return instance(config)
}