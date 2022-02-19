import axios from 'axios'
import { IPostOptions } from '../models/interfaces'
import { INews } from '../models/interfaces/news.interface';


export const GetCardPostsApi = async (query: IPostOptions["query"]) => {
    try{
        const response = await axios.get<INews>(`https://newsapi.org/v2/top-headlines?country=us&category=${query}&apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = response.data;
        return data;
    }
    catch (error: any){
        console.log(error);
    }
}