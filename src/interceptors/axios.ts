import axios from 'axios'
import iView from 'iview'

const {Modal} = iView

let axiosInstance: any = {}
axiosInstance = axios.create({
  timeout: 20000,
  maxContentLength: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use((config: any) => {
  if (config.method.toLowerCase() === 'get') {
    config.params = config.data
  }
  const requestConfig = Object.assign({
    responseType: 'json'
  }, config)
  return requestConfig
}, (error: any) => {
  Modal.error({
    title: '错误提示',
    content: error.message || '服务器异常'
  })
  return Promise.reject(error.message)
})

axiosInstance.interceptors.response.use((response: any) => {
  const data = response.data
  if (+data.code === 10010) {
    window.location.href = '/login'
    return
  }
  if (+data.code !== 200) {
    Modal.error({
      title: '错误提示',
      content: data.msg || '服务器异常'
    })
  }
  return data
}, (error: any) => {
  Modal.error({
    content: error.message
  })
  return Promise.reject(error)
})
export default axiosInstance
