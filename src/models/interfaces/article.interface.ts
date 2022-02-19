import { INews } from './news.interface';

//IArticle child interface is inhritance from INews super interface
export interface IArticle extends INews {
    description:string,
}