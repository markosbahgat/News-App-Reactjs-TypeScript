import {useState, useEffect} from 'react';
import { IPostOptions } from '../models/interfaces/postOptions.interface';
import { GetMainPostsApi } from '../api/mainPosts.api';
import { INews } from '../models/interfaces/news.interface';


export const usePosts = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();
    const [principle, setPrinciple] = useState<INews | null>()

    const GetPosts =  async (PostsOption?: IPostOptions) => {
        setLoading(true);
        setError(null);
        try{
            const response: INews | undefined = await GetMainPostsApi(PostsOption);
            setPrinciple(response);
        }
        catch (error: any){
            setError(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        GetPosts();
    }, [])
    return { 
        loading,
        error,
        principle,
        GetPosts
    }
}