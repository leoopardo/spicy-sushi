import logo from "/logo.png";

export const Section2 = () => {
  return (
    <section
      id="about"
      className="h-screen w-screen bg-neutral-800 flex justify-center items-center flex-col"
    >
      <div className="w-7/12 text-center flex flex-col justify-center items-center gap-6">
        <h1 className="text-amber-50 text-5xl">Sobre nós</h1>
        <p className="text-amber-50 text-2xl font-sans">
          O Spicy Sushi Shop é um restaurante japonês inovador localizado em
          Cascavel - PR. Nosso objetivo é trazer os autênticos sabores da
          culinária japonesa sem alterações para o Brasil. Com um conceito
          único, nosso cardápio é uma fusão de tradição e inovação,
          proporcionando uma experiência gastronômica excepcional. Visite-nos e
          saboreie a verdadeira essência do Japão.
        </p>{" "}
        <div
          className="w-40 bg-cover bg-center "
          style={{
            backgroundImage: `url(${logo})`,
            height: "150px",
          }}
        />
      </div>
    </section>
  );
};
