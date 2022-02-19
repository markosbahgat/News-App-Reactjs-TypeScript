import React from 'react';
import { Navigation, Pagination } from 'swiper';
import './style.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import img1 from './assets/img1.jpg'
import { useCardPosts } from '../../hooks/GetCardPosts.hook';

interface Props {}

const SlidingCard: React.FC= (props: Props) => {
    const {principle} = useCardPosts();
    return ( 
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
          {principle?.articles.map(article => article.urlToImage && (
              <SwiperSlide>
                <div className="swiper-slide card">
                    <div className="card-content">
                    <div className="image">
                        <img src={article.urlToImage}/>
                    </div>

                    <div className="media-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-github"></i>
                    </div>

                        <span className="name">{article.title.slice(0, 60)}</span>


                    <div className="button">
                        <button className="aboutMe"><a href={article.url} target="_blank" rel="noreferrer">See More</a></button>
                        <button className="hireMe"><a href='http://markosbahgat.com' target="_blank" rel="noreferrer">Author</a></button>
                    </div>
                    </div>
                </div>
              </SwiperSlide>
          ))}
      </Swiper>
     );
}
 
export default SlidingCard;