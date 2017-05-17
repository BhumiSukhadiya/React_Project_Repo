import axios from 'axios';
export function commonApi({ method = 'GET', url, data = {}, headers = {} }) {
    headers['Authorization'] = 'asaaAS';
    return axios({
        method,
        url,
        data,
        headers
    })
    .then(res => res.data)
    .catch(err => console.log(err))
}
