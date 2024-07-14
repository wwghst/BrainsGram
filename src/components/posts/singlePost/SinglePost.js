import React from 'react';
import { Button } from '../../../shared';
import ProfileImg from '../../../assets/img/ProfileImg.jpg'
import PostImg from '../../../assets/img/post2.jpg'
import LikeSvg from '../../../assets/svg/Like.svg';
import DislikeSvg from '../../../assets/svg/Dislike.svg';
import './SinglePost.scss';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost__profile">
        <div className="singlePost__profile-info">
          <img className="singlePost__avatarka" src={ProfileImg} alt="profile avatarka" />
          <div className="singlePost__name-block">
            <h4>Name</h4>
            <span>•</span>
            <span>1h</span>
          </div>
          <p>country</p>
        </div>
        <Button className="singlePost__btn">Subscribe</Button>
      </div>
      <img className="singlePost__post-img" src={PostImg} alt="post" />
      <ul className="singlePost__like-menu">
        <li className="singlePost__icon-block">
          <img className="singlePost__menu-icon" src={LikeSvg} alt="like icon" />
          <p>1.1К</p>
        </li>
        <li className="singlePost__icon-block">
          <img className="singlePost__menu-icon" src={DislikeSvg} alt="dislike icon" />
          <p>10</p>
        </li>
      </ul>
      <p className="singlePost__desc">
        desciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciptiondesciption
      </p>
    </div>
  );
};

export default SinglePost;
