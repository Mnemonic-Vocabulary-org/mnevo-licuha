import axios from 'axios'
import Env from '@/config/Env'

import Mnevo from "./mnevo.js"
import RegLog from "./regLog.js"

const api = axios.create({
    baseURL: Env().remote + ':' + Env().port,
    headers: {}
});

const mnevo = Mnevo(api);
const regLog = RegLog(api);

export
{
	mnevo,
	regLog
}
