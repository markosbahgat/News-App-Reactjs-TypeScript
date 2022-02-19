import axios from 'axios'
import { IPostOptions } from '../models/interfaces'
import { INews } from '../models/interfaces/news.interface';


export const GetPopularPostsApi = async (PostOptions?: IPostOptions) => {
    try{
        const response = await axios.get<INews>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = response.data;
        return data;
    }
    catch (error: any){
        console.log(error);
    }
}