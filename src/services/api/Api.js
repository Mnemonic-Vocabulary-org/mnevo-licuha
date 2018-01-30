import axios from 'axios'
import Env from '@/config/Env'

export default () => {
  console.log("API: ", Env());
  return axios.create({
    baseURL: Env().remote+":"+Env().port,
    headers: {
    }
  })
}
