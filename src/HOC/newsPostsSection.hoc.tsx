import React, {HTMLProps} from 'react'
import MainPost from '../components/mainPost/mainPost.component';
import { usePosts } from '../hooks/GetPosts.hook';

interface Props extends HTMLProps<HTMLDivElement>{}

export const SectionTwo: React.FC = (props: Props) => {
    const {principle, loading} = usePosts();
    return (
        <div>
        {principle?.articles.map(article => {
            const PostProps = {
                imgUrl:article.urlToImage,
                title: article.title,
                description: article.content,
                date:article.publishedAt.slice(0, 10),
                postUrl:article.url,
            }
             return <MainPost {...PostProps} key={article.publishedAt}/>
        })}
    </div>
  )
}
