import Axios from 'axios'
export const axios = Axios.create({
    baseURL : 'http://localhost:5555/'
})

export default axios
