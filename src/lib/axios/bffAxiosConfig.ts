import axios from 'axios'
import bffConfig from '@/configs/bffConfig'

const bffAxios = axios.create({
  baseURL: bffConfig.BFF_BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default bffAxios
