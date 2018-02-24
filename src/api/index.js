import axios from 'axios'

const host = 'http://192.168.40.25:3000'

const API = {
  _core (url, data = {}, headers = { 'Content-Type': 'application/json' }) {
    let options = {
      url,
      method: 'POST',
      headers
    }
    if (data) {
      options.data = data
    }
    return axios(options)
  },
  uploadImg (file) {
    var formdata = new FormData()
    formdata.append('file', file)
    const url = host
    return this._core(url, formdata, { 'Content-Type': 'multipart/form-data' }).then(reslut => {
      return Promise.resolve(reslut.data)
    })
  },
  downloadImg (fileName) {
    let headers = { 'Content-Type': 'application/json' }
    let data = { fileName }
    let url = host + '/download'
    let options = {
      url,
      headers,
      responseType: 'blob',
      method: 'POST',
      data
    }
    console.log(options)
    return axios(options).then(result => {
      return Promise.resolve(result.data)
    })
  }
}

export default API
