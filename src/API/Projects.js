import axios from 'axios'
import {API_URL} from './Url'

export const getProjects=async()=>{
    try {
        const res=await axios.get(API_URL + '/projects/getProjects')
        return res.data
    } catch (error) {
        console.log(error)
    }
}