import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-200 text-black shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Nome da Igreja ou Logotipo */}
        <h1 className="text-2xl font-bold">Igreja XYZ</h1>

        {/* Navegação */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#sobre" className="hover:text-blue-500">
                Sobre
              </a>
            </li>
            <li>
              <a href="#social" className="hover:text-blue-500">
                Social
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-blue-500">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
