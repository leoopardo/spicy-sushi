import peixe from "../assets/foods/peixe.jpg";
import pao from "../assets/foods/pão-molhos.jpg";
import salada from "../assets/foods/salada.jpg";
import sashimiAtum from "../assets/foods/sashimi-atum.jpg";
import tofu from "../assets/foods/tofu.jpg";

export const Section3 = () => {
  return (
    <section id="cardapio" className="h-screen w-screen bg-amber-50 ">
      <header>
        <h1 className="ml-8 mt-8 text-3xl">Cardápio</h1>
      </header>
      <body className="w-full" style={{ height: "100%" }}>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl mr-8">Entradas</h1>
            <p className="text-lg mr-8 font-sans max-w-52">
              Nossos pratos para entrada são refrescantes e suculentos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={pao}
              alt="pao"
              className="w-96 h-72"
              style={{ borderTopLeftRadius: 36 }}
            />
            <p className="text-center">Pão com molhos</p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <img src={salada} alt="salada" className="w-96 h-72" />
            <p className="text-center">Salada</p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <img
              src={sashimiAtum}
              alt="sashimi de atum"
              className="w-96 h-72"
              style={{ borderBottomRightRadius: 36 }}
            />
            <p className="text-center">Sashimi de atum</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={peixe} alt="peixe" className="w-96 h-72" />
            <p className="text-center">Peixe</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={tofu} alt="tofu" className="w-96 h-72" />
            <p className="text-center">Tofu</p>
          </div>
        </div>
      </body>
    </section>
  );
};
