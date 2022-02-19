import {useState, useEffect} from 'react';
import { IPostOptions } from '../models/interfaces/postOptions.interface';
import { GetPopularPostsApi } from '../api/popularPosts.api';
import { INews } from '../models/interfaces/news.interface';


export const usePopularPosts = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();
    const [principle, setPrinciple] = useState<INews | null>()

    const GetPopularPosts =  async (PostsOption?: IPostOptions) => {
        setLoading(true);
        setError(null);
        try{
            const response: INews | undefined = await GetPopularPostsApi(PostsOption);
            setPrinciple(response);
        }
        catch (error: any){
            setError(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        GetPopularPosts();
    }, [])
    return { 
        loading,
        error,
        principle,
        GetPopularPosts
    }
}