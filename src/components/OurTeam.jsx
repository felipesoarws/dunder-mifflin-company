import Slider from "react-slick";
import Coworker from "./Coworker";
import { useRef } from "react";

// icons
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

// team
import michael from "../assets/team/michael.png";
import jim from "../assets/team/jim.png";
import pam from "../assets/team/pam.png";
import dwight from "../assets/team/dwight.png";
import ryan from "../assets/team/ryan.png";
import stanley from "../assets/team/stanley.png";
import angela from "../assets/team/angela.png";
import kevin from "../assets/team/kevin.png";
import meredith from "../assets/team/meredith.png";
import andy from "../assets/team/andy.png";
import toby from "../assets/team/toby.png";
import creed from "../assets/team/creed.png";
import kelly from "../assets/team/kelly.png";
import phyllis from "../assets/team/phyllis.png";

const Carousel = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        <Coworker
          image={michael}
          name={"Michael Scott"}
          desc={
            "Gerente Regional de Scranton, sempre com uma abordagem criativa (e inusitada) para liderança."
          }
        />

        <Coworker
          image={jim}
          name={"Jim Halpert"}
          desc={
            "Vendedor experiente, conhecido por seu carisma e seu talento em encontrar as melhores soluções para os clientes."
          }
        />

        <Coworker
          image={pam}
          name={"Pam Beesly"}
          desc={
            "Recepcionista e artista talentosa, conhecida por seu profissionalismo e atenção aos detalhes."
          }
        />

        <Coworker
          image={dwight}
          name={"Dwight Schrute"}
          desc={
            "Assistente do Gerente Regional (não oficial), um dos vendedores mais competitivos e comprometidos da empresa."
          }
        />

        <Coworker
          image={ryan}
          name={"Ryan Howard"}
          desc={
            "Ex-estagiário ambicioso que subiu rapidamente, mas é mais conhecido por suas grandes ideias, nem sempre práticas."
          }
        />

        <Coworker
          image={stanley}
          name={"Stanley Hudson"}
          desc={
            "Vendedor veterano, sempre tranquilo e focado em aproveitar sua futura aposentadoria."
          }
        />

        <Coworker
          image={angela}
          name={"Angela Martin"}
          desc={
            "Rigorosa chefe da contabilidade, obcecada por organização e por seus gatos."
          }
        />

        <Coworker
          image={kevin}
          name={"Kevin Malone"}
          desc={
            "Contador descontraído, conhecido por seu bom humor e sua famosa receita de chili."
          }
        />

        <Coworker
          image={meredith}
          name={"Meredith Palmer"}
          desc={
            "Representante de suprimentos com comportamento excêntrico, sempre destacada nas festas do escritório."
          }
        />

        <Coworker
          image={andy}
          name={"Andy Bernard"}
          desc={
            "Vendedor simpático, ex-Cornell, apaixonado por música a cappella e com um temperamento imprevisível."
          }
        />

        <Coworker
          image={toby}
          name={"Toby Flenderson"}
          desc={
            "Representante de RH tranquilo e introvertido, muitas vezes ignorado e desprezado por Michael Scott."
          }
        />

        <Coworker
          image={creed}
          name={"Creed Bratton"}
          desc={
            "Enigmático e excêntrico oficial de controle de qualidade, com um passado misterioso."
          }
        />

        <Coworker
          image={kelly}
          name={"Kelly Kapoor"}
          desc={
            "Chefe de atendimento ao cliente, dramática e cheia de energia, sempre pronta para fofocas."
          }
        />

        <Coworker
          image={phyllis}
          name={"Phyllis Vance"}
          desc={
            "Vendedora calorosa que constrói fortes laços com seus clientes e é casada com Bob Vance, da Vance Refrigeration."
          }
        />
      </Slider>
      <div className="text-center my-8 flex gap-8 items-center justify-center">
        <button className="button" onClick={previous}>
          <CaretLeft size={40} color="#424242" weight="bold" />
        </button>
        <button className="button" onClick={next}>
          <CaretRight size={40} color="#424242" weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
