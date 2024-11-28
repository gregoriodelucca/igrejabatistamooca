import React from "react";

const Contato: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contato</h2>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Formulário de Contato */}
          <form className="bg-white shadow-lg rounded-lg p-8 md:w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Seu Nome"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Seu Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mensagem</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Sua Mensagem"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-400 text-white rounded-lg px-4 py-2 hover:bg-blue-500"
            >
              Enviar
            </button>
          </form>

          {/* Informações de Contato */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700">
              <strong>Endereço:</strong> Rua Javari, n 79 - Mooca, São Paulo - SP
            </p>
            <p className="text-gray-700">
              <strong>Telefone:</strong> (11) 1234-5678
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> igrejabatistamooca@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
