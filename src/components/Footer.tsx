import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col md:flex-row items-center justify-between px-8">
        <p className="text-sm"> Igreja batista mooca. Todos os direitos reservados.      &copy; </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-blue-400 hover:text-blue-600"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-blue-400 hover:text-blue-600"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
