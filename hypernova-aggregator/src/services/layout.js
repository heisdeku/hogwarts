
const axios = require('axios')
/*
module.exports.getLayout = () => {
  return axios.get('http://0.0.0.0:3031/')
    .then(({ data }) => {
      return data.results
    })
}
*/

module.exports.getLayout = () => {
  return axios.post('http://0.0.0.0:3031/main', {
    header: {
      name: 'App',
      data: {
        title: 'Chekcart',      
      }
    }
  })
    .then(({ data }) => {
      return data.results
    })
}
