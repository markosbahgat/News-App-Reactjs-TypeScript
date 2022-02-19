import {useState, useEffect} from 'react';
import { IPostOptions } from '../models/interfaces/postOptions.interface';
import { GetCardPostsApi } from '../api/cardPosts.api';
import { INews } from '../models/interfaces/news.interface';


export const useCardPosts = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();
    const [principle, setPrinciple] = useState<INews | null>()

    const GetCardPosts =  async (searchQuery: IPostOptions["query"]) => {
        setLoading(true);
        setError(null);
        try{
            const response: INews | undefined = await GetCardPostsApi(searchQuery);
            setPrinciple(response);
        }
        catch (error: any){
            setError(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        GetCardPosts("technology");
    }, [])
    return { 
        loading,
        error,
        principle,
        GetCardPosts
    }
}