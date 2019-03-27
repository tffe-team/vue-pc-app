// const host = process.env.NODE_ENV === 'production' ? '/api' : '/api'
const host =  '/api'
export const loginApi = {
  login: `${host}/user_login`,
  loginOut: `${host}/user_logout`
}
export const listApi = {
  getList: `${host}/list`
}