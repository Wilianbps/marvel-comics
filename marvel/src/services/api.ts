import axios from 'axios'
import md5 from 'md5'

const ts = Number(new Date())

const apikey = 'f959aa00263daef3f9ff20056e090dbb'
const privateKey = '81cdedc55b04c21bfdfa764c75b8bc7c6a0671e6'
const hash = md5(ts + privateKey + apikey)

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    apikey,
    ts,
    hash,
    limit: 100
  }
})

export default api
