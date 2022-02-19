import React, {HTMLProps} from 'react'
import PopularPost from '../components/popularPost/popularPost.component';
import { usePopularPosts } from '../hooks/GetPopularPosts.hook';

interface Props extends HTMLProps<HTMLAllCollection>{

}

export const PopularPostSection: React.FC = (props: Props) => {
    const {principle} = usePopularPosts();
    return (
        <div style={{marginTop:"100px", textAlign:"left"}}>
            <h1 className='Popular_posts'>Popular Posts</h1>
            {principle?.articles.map(article => {
                const PostProps = {
                    imgUrl:article.urlToImage,
                    title: article.title,
                    date: article.publishedAt.slice(0, 10),
                    postUrl: article.url,
                }
                return article.urlToImage && <PopularPost {...PostProps}/>
            })}
        </div>
  )
}
