import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#232323] flex flex-col gap-2 items-center justify-center">
      <div className="px-8 py-16 flex flex-col gap-8 items-center justify-center lg:flex-row min-[1440px]:gap-[10vw]">
        <img src={logo} alt="logo" className="min-[1440px]:w-[8vw]" />
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="flex flex-col gap-8  lg:flex-row min-[1440px]:gap-[5vw]">
            <div className="flex flex-col gap-8 items-center justify-center lg:items-start lg:justify-start">
              <h3 className="f-bold text-[#f7f8f9] text-[25px] min-[1440px]:text-[1.3vw] min-[1440px]:mb-[.4vw]">
                Sobre
              </h3>
              <nav>
                <ul className="flex flex-col gap-2 items-center justify-center lg:items-start lg:justify-start">
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    Nossa história
                  </li>
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    Produtos
                  </li>
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    Nosso time
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex flex-col gap-8 items-center justify-center lg:items-start lg:justify-start">
              <h3 className="f-bold text-[#f7f8f9] text-[25px] min-[1440px]:text-[1.3vw] min-[1440px]:mb-[.4vw]">
                Ajuda
              </h3>
              <nav>
                <ul className="flex flex-col gap-2 items-center justify-center lg:items-start lg:justify-start">
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    Suporte
                  </li>
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    Termos de Serviço
                  </li>
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    Politicas de Privacidade
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex flex-col gap-8 items-center justify-center lg:items-start lg:justify-start">
              <h3 className="f-bold text-[#f7f8f9] text-[25px] min-[1440px]:text-[1.3vw] min-[1440px]:mb-[.4vw]">
                Contato
              </h3>
              <nav>
                <ul className="flex flex-col gap-2 items-center justify-center lg:items-start lg:justify-start">
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    scranton@dunfermifflin.com
                  </li>
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    +55 11 9
                    <span className="text-[cyan]">
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=8ALsR-oWKAk"
                      >
                        998-6000
                      </a>
                    </span>
                  </li>
                  <li className="cursor-pointer f-roman text-[#f7f8f9] text-[20px] min-[1440px]:text-[1vw]">
                    Sex até Seg (9h - 17h)
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-10 px-8 text-center">
        <p className="f-roman text-[1.2rem] text-[#9a9a9a]">
          © 2024 Dunder Mifflin, Inc. Todos os direitos reservados.
        </p>
        <p className="f-roman text-[1rem] text-[#9a9a9a]">
          Código e design feito por{" "}
          <a
            href="https://www.linkedin.com/in/felipesoarws/"
            target="_blank"
            className="f-medium text-[#f7f8f9] hover:text-[cyan] transition-all duration-300"
          >
            @felipesoarws
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
