import React, { useState, useEffect, HTMLProps } from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import NavBar from '../NavBar/navbar.component';
import { EWebsiteDetails } from '../../models/enums/webstieDetails.enum';


interface Props extends HTMLProps<HTMLAllCollection>{
    
}

const ImageSlider: React.FC<Props> = () => {
    let counter = 0;
    const [i, setI] =useState(0);
    const images =[0, img1, img2, img3, img4];
    const Slider = () => {
        if(counter > images.length - 2){
            setI(0);
            counter = 0;
        }
        counter++;
        setI(i => i + 1)
        setTimeout(() => Slider(), 5000)
    };
    useEffect(() => {
        Slider();
    }, []);
    const handleScroll = () => {
        window.scrollTo({
            top:1600,
            behavior:"smooth"
        })
    }
    return ( 
        <div className="banner">
            <div className="slider">
                <img src={images[i]} alt="backgroundImage" id='slideImg'/>
            </div>
            <div className="overlay">
                <div className="navbar">
                    <NavBar LogoName={EWebsiteDetails.webstieName}/>
                </div>
                <div className="slideShow_content">
                    <h1>News Website</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur ullam illo. Aliquid, nam incidunt saepe iure quo ipsum..!!</span>
                    <a onClick={() => handleScroll()}>Explore Latest News</a>
                </div>
            </div>
        </div>
     );
}
 
export default ImageSlider;