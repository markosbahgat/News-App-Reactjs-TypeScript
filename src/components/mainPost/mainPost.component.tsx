import React, {HTMLProps} from 'react';
import './mainPost.scss';

interface Props extends HTMLProps<HTMLDivElement>{
    imgUrl: string | undefined,
    title: string | undefined,
    description: string | undefined,
    date: string | undefined,
    postUrl: string | undefined
}

const MainPost: React.FC<Props> = ({imgUrl, title, description, date, postUrl}) => {
  return (
    <div>
        <div className="main_container">
            <div className="main_img_container">
                <div className='img_container'>
                    <img src={imgUrl} alt="Post Image" className="postImg" />
                </div>
                <div className="essientials_contianer">
                    <span><i className="fa-solid fa-user-large"></i> Admin</span>
                    <span><i className="fa-solid fa-calendar-days"></i> {date}</span>
                    <span>5 Comments</span>
                </div>
            </div>
            <div className="post_content">
                <h2 className="post_title">{title}</h2>
                <span className="post_description">{description?.slice(0, 200)}</span>
                <a href={postUrl} target="_blank">Read More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <hr className="line_break" />
        </div>
    </div>
  )
}

export default MainPost;