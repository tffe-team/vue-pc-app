import axiosInstance from '@/interceptors/axios'
import { loginApi, listApi} from '@/constants/api'
import { UserInfo, QueryInfo, Result} from '@/constants/variableType'

// login  module
export const login = (data: UserInfo, callback?: any) => {
  axiosInstance({
    method: 'post',
    url: loginApi.login,
    data: data
  }).then((res: Result) => {
    callback(res)
  })
}
export const loginOut = (callback?: any) => {
  axiosInstance({
    method: 'get',
    url: loginApi.loginOut
  }).then((res: Result) => {
    callback(res)
  })
}
// lIST  module
export const getListData = (data: QueryInfo, callback?: any) => {
  axiosInstance({
    method: 'post',
    data: data,
    url: listApi.getList
  }).then((res: Result) => {
    callback(res)
  })
}