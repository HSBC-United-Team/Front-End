import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[99%] pt-0 pb-[30px] px-6">
      <Slider {...settings}>
        <div>
          <img
            src="public\images\banner.jpeg"
            alt="Credit to Joshua Earle on Unsplash"
            className="max-w-full mx-auto"
          />
        </div>
        <div>
          <img
            src="public\images\banner.jpeg"
            alt="Credit to Joshua Earle on Unsplash"
            className="max-w-full mx-auto"
          />
        </div>
        <div>
          <img
            src="public\images\banner.jpeg"
            alt="Credit to Joshua Earle on Unsplash"
            className="max-w-full mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
