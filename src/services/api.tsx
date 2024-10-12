import { address } from "./config";
import axios from 'axios';

const base_url = `${address}/api/v1`
const bearer_token = "iuyhksjbkjdsdsk"
// const isLoggin = false;

const getHeaders  = {
    'Authorization': `Bearer ${bearer_token}`,
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
}

export const fetchData = async(endpoint: string)=> {
    try{
        const response = await axios.get(
            `${base_url}${endpoint}`,
            { headers: getHeaders }
        )
        return response.data;
    }catch(err){
        throw err;
    }
}

export const postData = async(endpoint: string, data: any, isLoggin?: boolean) => {

    try{
        if(isLoggin){
            const response = await axios.post(
                `${base_url}${endpoint}`,
                data,
            )
            return response.data;
        }else{
            const response = await axios.post(
                `${base_url}${endpoint}`,
                data,
                { headers: getHeaders }
            )
            return response.data;
        }
    }catch(err){
        throw err;
    }
}