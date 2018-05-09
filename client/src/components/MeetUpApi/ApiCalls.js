import axios from 'axios'


const baseUrl = '/homecoming/meetups'

export let getAtlantaData = () => {
  return axios.get(baseUrl + '/atlanta')
} 