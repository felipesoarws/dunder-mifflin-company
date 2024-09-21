import Slider from "react-slick";

// team
import michael from "../assets/team/michael.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container ">
      <Slider {...settings}>
        <div className="ml-[.5rem] min-[425px]:ml-[2.2rem] min-[1440px]:mx-[5vw] ">
          <div className="bg-[rgba(66,66,66,0.05)] w-[362px] h-[592px] flex flex-col items-start justify-start rounded-2xl">
            <img src={michael} alt="" />
            <div className="flex flex-col text-center items-center justify-center w-[100%] my-3">
              <h2 className="f-medium text-[30px] text-[#424242]">
                Michael Scott
              </h2>
              <p className="f-roman text-[18px] text-[#828282] leading-4">
                Gerente Regional de Scranton, sempre com uma abordagem criativa
                (e inusitada) para liderança.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-[.5rem] min-[425px]:ml-[2.2rem] min-[1440px]:mx-[5vw]">
          <div className="bg-[rgba(66,66,66,0.05)] w-[362px] h-[592px] flex flex-col items-start justify-start rounded-2xl">
            <img src={michael} alt="" />
            <div className="flex flex-col text-center items-center justify-center w-[100%] my-3">
              <h2 className="f-medium text-[30px] text-[#424242]">
                Michael Scott
              </h2>
              <p className="f-roman text-[18px] text-[#828282] leading-4">
                Gerente Regional de Scranton, sempre com uma abordagem criativa
                (e inusitada) para liderança.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-[.5rem] min-[425px]:ml-[2.2rem] min-[1440px]:mx-[5vw]">
          <div className="bg-[rgba(66,66,66,0.05)] w-[362px] h-[592px] flex flex-col items-start justify-start rounded-2xl">
            <img src={michael} alt="" />
            <div className="flex flex-col text-center items-center justify-center w-[100%] my-3">
              <h2 className="f-medium text-[30px] text-[#424242]">
                Michael Scott
              </h2>
              <p className="f-roman text-[18px] text-[#828282] leading-4">
                Gerente Regional de Scranton, sempre com uma abordagem criativa
                (e inusitada) para liderança.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-[.5rem] min-[425px]:ml-[2.2rem] min-[1440px]:mx-[5vw]">
          <div className="bg-[rgba(66,66,66,0.05)] w-[362px] h-[592px] flex flex-col items-start justify-start rounded-2xl">
            <img src={michael} alt="" />
            <div className="flex flex-col text-center items-center justify-center w-[100%] my-3">
              <h2 className="f-medium text-[30px] text-[#424242]">
                Michael Scott
              </h2>
              <p className="f-roman text-[18px] text-[#828282] leading-4">
                Gerente Regional de Scranton, sempre com uma abordagem criativa
                (e inusitada) para liderança.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-[.5rem] min-[425px]:ml-[2.2rem] min-[1440px]:mx-[5vw]">
          <div className="bg-[rgba(66,66,66,0.05)] w-[362px] h-[592px] flex flex-col items-start justify-start rounded-2xl">
            <img src={michael} alt="" />
            <div className="flex flex-col text-center items-center justify-center w-[100%] my-3">
              <h2 className="f-medium text-[30px] text-[#424242]">
                Michael Scott
              </h2>
              <p className="f-roman text-[18px] text-[#828282] leading-4">
                Gerente Regional de Scranton, sempre com uma abordagem criativa
                (e inusitada) para liderança.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
