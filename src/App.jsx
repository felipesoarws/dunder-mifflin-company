import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";

import logo from "./assets/logo.png";
import f_wallpaper from "./assets/f-wallpaper.png";
import icon_michael from "./assets/icon-michael.png";

import scranton_bg from "./assets/scranton_bg.png";
import stamford_bg from "./assets/stamford_bg.png";
import utica_bg from "./assets/utica_bg.png";

import jan from "./assets/testimonials/jan.png";
import bob from "./assets/testimonials/bob.png";
import karen from "./assets/testimonials/karen.png";
import david from "./assets/testimonials/david.png";

function App() {
  return (
    <>
      <header className="m-8 z-50 sticky lg:m-[2.5vw]">
        <img className="block w-[5rem] md:w-[8vw]" src={logo} alt="logo" />
      </header>
      <div className="background absolute top-0 left-0 right-0 z-0">
        <div className="absolute bottom-[-8rem] left-0 right-0 min-[430px]:bottom-[9.5rem] min-[430px]:right-[2rem] lg:bottom-[4vw] lg:right-[2.5vw]">
          <h1 className="f-medium text-[#232323] text-[1.6rem] leading-[23px] text-center min-[430px]:text-right md:text-[1.8rem] lg:text-[3.5vw] lg:leading-[3vw]">
            Fornecendo papel
            <span className="block">de alta qualidade para</span>
            <span className="block">empresas de todos os portes.</span>
          </h1>
          <h2 className="f-roman text-[#9A9A9A] text-[1rem] text-center min-[430px]:text-right md:text-[1.2rem] lg:text-[2vw]">
            Papel ilimitado em um mundo sem papel.
          </h2>
        </div>
      </div>
      <main className="mt-[120vh] md:mt-[80vh] min-[1024px]:mt-[95vh]">
        <section className="min-[1024px]:flex gap-5">
          <div className="mx-8 lg:m-[2.5vw] min-[1024px]:w-[150vw] min-[1024px]:mx-[3vw]">
            <h2 className="f-medium text-[#232323] text-[1.2rem] mb-4 min-[1024px]:text-[2vw] min-[1024px]:mb-[1.5vw]">
              Por que escolher a Dunder Mifflin?
            </h2>
            <div className="flex gap-5 flex-col f-roman text-[#828282] min-[1024px]:text-[1.2vw] ">
              <p>
                Desde 1949, a Dunder Mifflin tem se destacado como uma fonte
                confiável de soluções em papel para clientes corporativos em
                todo o país. Nossa tradição e compromisso com a qualidade nos
                tornam o parceiro ideal para empresas que buscam não apenas um
                fornecedor, mas um aliado de longa data. Ao longo dos anos,
                conquistamos a confiança de nossos clientes por meio de um
                atendimento próximo e personalizado.
              </p>
              <p>
                Com filiais locais, como a nossa renomada unidade de Scranton,
                oferecemos um atendimento direto, focado nas necessidades
                individuais de cada cliente. A proximidade das filiais permite
                que nossos representantes conheçam a fundo as demandas de suas
                regiões, oferecendo um suporte rápido e eficiente.
              </p>
              <p>
                Além disso, nossa abordagem envolve soluções flexíveis que se
                adaptam a empresas de pequeno, médio e grande porte. Entendemos
                que cada negócio é único, e por isso personalizamos nossos
                serviços e produtos de acordo com as necessidades específicas de
                cada cliente, garantindo que sempre tenhamos uma solução sob
                medida.
              </p>
            </div>
            <div className="my-[2rem] flex gap-4 items-center min-[1024px]:my-[2vw] min-[1024px]:gap-[1vw]">
              <img src={icon_michael} className="w-16 min-[1024px]:w-[5vw]" />
              <div className="flex flex-col gap-1">
                <h3 className="italic text-[black] text-[.9rem] leading-[15px] min-[1024px]:text-[1.1vw] min-[1024px]:leading-[1.2vw]">
                  Dunder Mifflin é a melhor empresa de papel que já
                  trabalhei.&nbsp;
                  <span className="md:block">
                    O atendimento ao cliente é incomparável!
                  </span>
                </h3>
                <h3 className="text-[#949494] text-[.8rem] min-[1024px]:text-[1.1vw]">
                  Michael Scott, Gerente Regional.
                </h3>
              </div>
            </div>
          </div>
          <div>
            <img
              className="hidden min-[1024px]:block min-[1024px]:w-[150vw]"
              src={f_wallpaper}
              alt="logo"
            />
          </div>
        </section>
        <section className="flex items-center justify-center flex-col mt-12 mb-16 md:mt-16 min-[1024px]:my-[5vw]">
          <div>
            <h2 className="f-medium text-[#232323] text-[1.2rem] mb-4 min-[1024px]:text-[2vw]">
              Nossas Filiais
            </h2>
          </div>
          <div className="flex gap-6 flex-col items-center justify-center lg:flex-row min-[1440px]:gap-[2vw] min-[1440px]:my-[2vw] ">
            <div className="bg-[#424242] text-[#F7F8F9] -z-20 p-8 rounded-full w-[227px] h-[227px] flex items-center justify-center relative min-[1440px]:w-[13vw] min-[1440px]:h-[13vw]">
              <img
                src={scranton_bg}
                alt="background filial"
                className="absolute -z-10 min-[1440px]:w-[8vw]"
              />
              <h2 className="f-medium text-center text-[1.8rem] leading-6 min-[1440px]:leading-[1.5vw] min-[1440px]:text-[1.6vw]">
                Scranton,<span className="block">Pensilvânia</span>
              </h2>
            </div>
            <div className="hidden bg-[#424242] w-[5rem] h-[.1rem] lg:block min-[1440px]:w-[8vw]"></div>
            <div className="bg-[#424242] text-[#F7F8F9] -z-20 p-8 rounded-full w-[227px] h-[227px] flex items-center justify-center relative min-[1440px]:w-[13vw] min-[1440px]:h-[13vw]">
              <img
                src={stamford_bg}
                alt="background filial"
                className="absolute -z-10 min-[1440px]:w-[10vw]"
              />
              <h2 className="f-medium text-center text-[1.8rem] leading-6 min-[1440px]:leading-[1.5vw] min-[1440px]:text-[1.6vw]">
                Stamford,<span className="block">Connecticut</span>
              </h2>
            </div>
            <div className="hidden bg-[#424242] w-[5rem] h-[.1rem] lg:block min-[1440px]:w-[8vw]"></div>

            <div className="bg-[#424242] text-[#F7F8F9] -z-20 p-8 rounded-full w-[227px] h-[227px] flex items-center justify-center relative min-[1440px]:w-[13vw] min-[1440px]:h-[13vw]">
              <img
                src={utica_bg}
                alt="background filial"
                className="absolute -z-10 min-[1440px]:w-[12vw]"
              />
              <h2 className="f-medium text-center text-[1.8rem] leading-6 min-[1440px]:leading-[1.5vw] min-[1440px]:text-[1.6vw]">
                Utica,<span className="block">New York</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center flex-col mt-12 mb-16 md:mt-16 min-[1024px]:my-[5vw] ">
          <div>
            <h2 className="f-medium text-[#232323] text-[1.2rem] mb-4 min-[1024px]:text-[2vw] min-[1024px]:mb-[1.5vw]">
              Nosso time
            </h2>
          </div>
          <OurTeam />
        </section>
        <section className="flex items-center justify-center flex-col mt-12 mb-16 md:mt-16 min-[1024px]:my-[5vw]">
          <div>
            <h2 className="f-medium text-[#232323] text-[1.2rem] mb-4 min-[1024px]:text-[2vw] min-[1024px]:mb-[1.5vw]">
              O que dizem sobre nós
            </h2>
          </div>
          <div className="flex flex-wrap min-[1024px]:w-[90vw] mx-8 items-center justify-center gap-10 min-[1024px]:gap-[1.5vw]">
            <Testimonials
              desc="Além de oferecer um papel excelente, a Dunder Mifflin se destaca pelo atendimento próximo e ágil. Sempre que temos uma solicitação especial, eles nos atendem com prontidão."
              image={jan}
              name="Jan Levinson"
              job="ex-Vice-Presidente de Vendas da Dunder Mifflin"
            />

            <Testimonials
              desc="O papel da Dunder Mifflin sempre mantém uma qualidade excepcional, independentemente do volume de pedidos."
              image={bob}
              name="Bob Vance"
              job="Dono da Vance Refrigeration "
            />

            <Testimonials
              desc="Trabalho com a Dunder Mifflin há anos, e nunca tive problemas com a qualidade do papel ou com o suporte ao cliente. Eles são completamente de confiança."
              image={karen}
              name="Karen Filippelli"
              job="Gerente Regional da filial de Utica"
            />

            <Testimonials
              desc="O papel reciclado da Dunder Mifflin combina qualidade com responsabilidade ambiental. Nossa empresa está comprometida com a sustentabilidade."
              image={david}
              name="David Wallace"
              job="CFO da Dunder Mifflin"
            />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default App;
