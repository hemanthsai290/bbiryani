import React from 'react';
import './Header.css';
import images from '../../constants/images';


const aboutImages = [images.about1, images.about2, images.about3, images.about4];


const Header = () => (

  

  <div className="app__header app__wrapper section__padding" id="about">
    <div className="app__wrapper_img">
      <div className="grid-container">
      {aboutImages.map((src, index) => (
        <div className="grid-item" key={index}>
          <img src={src} alt={`about${index + 1}`} />
        </div>
      ))}
      </div>

    </div>
    <div className="app__wrapper_info">
      <h4 className='about-us' style={{ fontSize: '22px', color: "#fff" }}> Our Story </h4>
      <img src={images.bindaz} alt="logo"/> 
      <div className='bg-img'>
        <p className="p__opensans" style={{ fontSize: '18px', color: "#fff" }}> At Bindaz Biryanis, we believe that good food is best enjoyed with great company. Our warm and welcoming ambiance is perfect for family gatherings, friendly get-togethers, or a quiet meal for two. We are committed to providing exceptional service and ensuring that every visit leaves you with a smile.
          <span className="p__opensans wrap" style={{ margin: '1rem 0', display: 'flex', color: '#Da281c', fontWeight: '600', fontSize: '20px' }}> Savor the taste of tradition and let your senses be delighted at Bindaz Biryanis. </span>
        </p>
      </div>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>


  </div>
);

export default Header;