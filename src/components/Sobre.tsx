import React from "react";

const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Texto no lado esquerdo */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-gray-700 leading-relaxed">
            Bem-vindo à Igreja Batista mooca! Nossa missão é promover a fé, o amor ao
            próximo e a união da comunidade. Estamos aqui para inspirar e
            transformar vidas por meio da palavra de Deus e ações solidárias.
          </p>
        </div>

        {/* Imagem no lado direito */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMONb6oMjMSbrcGyFHlhsnEkBDhQ3--RrvntZi5=s680-w680-h510"
            alt="Foto da igreja"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
