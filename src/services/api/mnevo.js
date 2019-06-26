import Api from '@/services/api/Api'

export default{
  send (user) {
    return Api().post('user', user)
  },
  login (data) {
    return Api().post('api/login', data)
  },
  register (data) {
    return Api().post('api/register', data)
  }
}
