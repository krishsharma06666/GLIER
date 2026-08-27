
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideshow.css";

const slideImages = [
  "/images/spacious.jpg",
  "/images/jan.jpg",
  "/images/child2.jpg",
  "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/487462440_122119855430773183_7819509556291436555_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X5K5GkmaRbIQ7kNvwF7Q53N&_nc_oc=AdlTiUNe74FRct7Vu-OkaXoYzXw9FkbKQ5xEgZaV8hly2HGcaxkCT3Uyr8vk_8lN8GQxkpFMW-DunNYFm0dTwaB_&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=5XVAMP0klfIHyMZhU8qB0Q&oh=00_AfJ8elkB8hOj_7NdJwP06RFa0XQbV1XNokYlCPLTX0cRhQ&oe=6831B818",
  "https://scontent.fixj1-1.fna.fbcdn.net/v/t39.30808-6/484852186_122117180576773183_3245504444725248304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0mIIDeXrkEoQ7kNvwH__M-b&_nc_oc=Adkh5jWyZWQMbqusbEb6cp9rbxlpB-451w5HZxywzPb0CFjr5aORlOmOPPDCjapO3kZxWS7Q-geWra2RHTZBabSQ&_nc_zt=23&_nc_ht=scontent.fixj1-1.fna&_nc_gid=3iig3JTkJYA4qZwwu4JiXw&oh=00_AfLEKqiONBqW5TtTcv5RN9bSgtAZlyK2EaYi1uLYvKQzoA&oe=6831D39F",
  "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/484876455_122117165564773183_5908142410818605641_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2id2lgcEAkwQ7kNvwEo7O6B&_nc_oc=AdlGRCbXboo-21J84ewwl0XZI2uFmMjXnd7MV_kRDUp8uXDCezEPtl2AH3uq-uElvESUsheRv7TheSpMc8vjUDN-&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=DK240_C6xD0u36_eWmIE-w&oh=00_AfJrGPxb7iM8PeZyOoGcrRA6d9X2ARGljufpCefzxWZQVg&oe=6831C0E4",
];

const Slideshow: React.FC = () => {
  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-container">
        <Fade
          duration={1500}
          transitionDuration={1000}
          infinite
          arrows={false}
          pauseOnHover={false}
        >
          {slideImages.map((image, index) => (
            <div className="each-slide" key={index}>
              <img src={image} alt={`slide-${index}`} className="slide-image" />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Slideshow; 
