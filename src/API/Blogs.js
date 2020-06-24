import axios from 'axios'
import {API_URL} from './Url'

//get all blogs
export const getBlogs=async()=>{
    
    try{
        const res=await axios.get(API_URL + '/blogs/getBlogs')
        return res.data
    }catch(error){
        console.log(error)
    }}