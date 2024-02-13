import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Feed()
{
    const [posts,setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIconClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};
    useEffect(() => {
        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
                .then((resp) => {
                    setPosts(resp.data.data.filter(obj => obj.media_type === "IMAGE"));
                })
          } catch (err) {
              console.log('error', err)
          }
        };
        fetchInstagramPost();
    }, [])
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 600,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      };
    return(
        // <div>
        //     {posts.map((feed) => (
        //        feed.media_type == "IMAGE"?<img key={feed.id} src={feed.media_url} width="500px" height="500px"></img> : ""
        //     ))}
        // </div>
       <section id="feed" className='slider variable-width'>

        <Slider {...settings}>
          {posts.map((feed) => (
            <div class={`gallery-item` }
            >
            <img key={feed.id} src={feed.media_url} height="500px"
            ></img>
            <div className="icon" onClick={handleIconClick}>&#x2630;</div>
            {isModalOpen && (
          <div className="modal" onClick={handleCloseModal}>
          {/* Your modal content goes here */}
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>Modal Content</p>
          </div>
        </div>
      )}
            </div>
        ))}
        </Slider>
        
        </section>
          
    )
}