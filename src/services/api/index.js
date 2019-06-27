import axios from 'axios'
import Env from '@/config/Env'

import mnevo from "./mnevo.js"
import regLog from "./regLog.js"

const api = axios.create({
    baseURL: Env().remote + ':' + Env().port,
    headers: {
    }
  })

export default {
	mnevo : mnevo(api),
	regLog: regLog(api)
}
