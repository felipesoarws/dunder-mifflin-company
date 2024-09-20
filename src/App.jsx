import logo from "./assets/logo.png";
import f_wallpaper from "./assets/f-wallpaper.png";
import icon_michael from "./assets/icon-michael.png";

function App() {
  return (
    <>
      <header className="m-8 z-50 sticky lg:m-[2.5vw]">
        <img className="block w-[5rem] md:w-[8vw]" src={logo} alt="logo" />
      </header>
      <div className="background absolute top-0 left-0 right-0 z-0">
        <div className="absolute bottom-[-5rem] left-0 right-0 min-[430px]:bottom-[9.5rem] min-[430px]:right-[2rem] lg:bottom-[4vw] lg:right-[2.5vw]">
          <h1 className="f-medium text-[#232323] text-[1.3rem] leading-[23px] text-center min-[430px]:text-right md:text-[1.8rem] lg:text-[3.5vw] lg:leading-[3vw]">
            Fornecendo papel
            <span className="block">de alta qualidade para</span>
            <span className="block">empresas de todos os portes.</span>
          </h1>
          <h2 className="f-roman text-[#9A9A9A] text-[1rem] text-center min-[430px]:text-right md:text-[1.2rem] lg:text-[2vw]">
            Papel ilimitado em um mundo sem papel.
          </h2>
        </div>
      </div>
      <main className="mt-[115vh] md:mt-[80vh] min-[1024px]:mt-[95vh]">
        <section className="min-[1024px]:flex gap-5">
          <div className="mx-8 lg:m-[2.5vw] min-[1024px]:w-[150vw] min-[1024px]:mx-[3vw]">
            <h2 className="f-medium text-[#232323] text-[1.2rem] mb-4 min-[1024px]:text-[2vw]">
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
              <img src={icon_michael} className="min-[1024px]:w-[5vw]" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[black] text-[.9rem] leading-[15px] min-[1024px]:text-[1.1vw] min-[1024px]:leading-[1.2vw]">
                  Dunder Mifflin é a melhor empresa de papel que já trabalhei.
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
      </main>
    </>
  );
}

export default App;
