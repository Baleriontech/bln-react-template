import axios from 'axios'
import config from '@/configs/bffAPI'

const axiosInstance = axios.create({
  baseURL: config.BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
