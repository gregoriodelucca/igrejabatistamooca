import React from "react";

const Social: React.FC = () => {
  const atividades = [
    {
      titulo: "Distribuição de Alimentos",
      descricao: "Ajudamos famílias necessitadas com cestas básicas.",
      imagem: "caminho/imagem1.jpg",
    },
    {
      titulo: "Grupos de Jovens",
      descricao: "Encontros semanais para compartilhar a fé e amizade.",
      imagem: "caminho/imagem2.jpg",
    },
    {
      titulo: "Eventos Comunitários",
      descricao: "Ações solidárias para toda a comunidade.",
      imagem: "https://www.instagram.com/p/DBowxB4R3Ve/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  return (
    <section id="social" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ações Sociais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {atividades.map((atividade, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={atividade.imagem}
                alt={atividade.titulo}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{atividade.titulo}</h3>
                <p className="text-gray-700">{atividade.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
