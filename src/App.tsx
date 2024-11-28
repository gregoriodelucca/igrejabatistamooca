// src/App.tsx
import React from 'react';
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Social from "./components/Social";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Mapa from "./components/Mapa"; // Importando o componente Mapa

const App: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* Cabeçalho */}
      <Header />

      {/* Seção Sobre */}
      <main>
        <Sobre />

        {/* Seção Social */}
        <Social />

        {/* Seção de Contato */}
        <Contato />
      </main>

      {/* Seção de Mapa */}
      <Mapa /> {/* Adicionando a seção de mapa aqui */}

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default App;
