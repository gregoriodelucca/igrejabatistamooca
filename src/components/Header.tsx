// Exemplo de Header com Navbar à direita
const Header = () => {
    return (
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Alinha logo à esquerda e navbar à direita
          alignItems: 'center',
          backgroundColor: 'black',  // Fundo preto
          color: 'white',            // Texto branco
          padding: '10px 20px',      // Espaçamento
        }}
      >
        {/* Logo da Igreja */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://ugc.production.linktr.ee/Mb7mrVZRIaQWfSPz8jEn_hu34oaud2K6K9TdH?io=true&size=avatar-v3_0" 
            alt="Logo da Igreja" 
            style={{ width: '100px', height: 'auto' }} 
          />
        </div>
  
        {/* Barra de Navegação à direita */}
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            padding: '0',
            margin: '0',
          }}>
            <li style={{ margin: '0 15px' }}>
              <a href="#sobre" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Sobre</a>
            </li>
            <li style={{ margin: '0 15px' }}>
              <a href="#contato" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contato</a>
            </li>
            <li style={{ margin: '0 15px' }}>
              <a href="#social" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Social</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  