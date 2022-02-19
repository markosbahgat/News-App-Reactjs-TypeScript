import React from 'react'
import './popularPost.scss';

interface Props extends React.HTMLProps<HTMLAllCollection>{
  imgUrl: string | undefined,
  title: string | undefined,
  date: string | undefined,
  postUrl: string | undefined
}

const PopularPost: React.FC<Props> = ({title, date, postUrl, imgUrl}) => {
  return (
      <div className="popular_post_container">
        <div className="main_image_container">
          <div className='Post_img_container'><img src={imgUrl} alt="Post Image" className='PostImg'/></div>
          <div className="PopularPost_essientials_contianer">
                <span><i className="fa-solid fa-calendar-days"></i> {date}</span>
                <span>5 Comments</span>
          </div>
        </div>
        <a className='title' href={postUrl} target="_blank">{title}</a>
      </div>
  )
}

export default PopularPost;