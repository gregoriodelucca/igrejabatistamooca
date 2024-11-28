// src/components/Sobre.tsx
import React from "react";

const Sobre: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">Sobre nós</h2>
        <p className="text-lg text-gray-700">
        Bem-vindo à Igreja Batista da Mooca! Estamos aqui para ajudar as pessoas a descobrir como servir a Deus e seguir os seus caminhos.


        </p>
      </div>

      {/* Seção do Vídeo */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h3 className="text-xl font-semibold mb-4">Confira nosso vídeo</h3>
        
        {/* Incorporação do vídeo do Instagram */}
        <div className="relative pb-9/16">
          <iframe
            src="https://www.instagram.com/reel/DBXacM5pny4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            width="100%"
            height="100%"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Instagram Reel"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
