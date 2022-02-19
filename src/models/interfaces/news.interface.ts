export interface INews{
    articles:[
        {
            author:string,
            content:string,
            description:string,
            publishedAt:string,
            title:string,
            url:string,
            urlToImage:string,
            source:{
                id: null | string,
                name: string,
            }
        }
    ],
    status:string,
    totalResults:number,
}

/*
export interface INews{
    results:[
        {
            category:[string],
            content:string | null,
            country:[string],
            creator:string|null,
            description:string,
            full_description:string,
            keywords:string |null,
            language:string,
            pubDate:string,
            title:string,
            link:string,
            image_url:string,
            source_id:string,
            video_url:string|null,

        }
    ],
    status:string,
    totalResults:number,
}
*/