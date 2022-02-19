import axios from 'axios'
import { IPostOptions } from '../models/interfaces'
import { INews } from '../models/interfaces/news.interface';


export const GetPostsApi = async (PostOptions?: IPostOptions) => {
    try{
        const response = await axios.get<INews>("https://newsapi.org/v2/everything?q=tesla&from=2022-02-16&to=2022-02-16&sortBy=popularity&apiKey=0a4f6e369bea4943a0fa39dae1b68af7")
        const data = response.data;
        return data;
    }
    catch (error: any){
        console.log(error);
    }
}