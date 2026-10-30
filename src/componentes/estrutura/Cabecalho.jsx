// src/componentes/Estrutura/Cabecalho.jsx
import estilos from './Cabecalho.module.css';

function Cabecalho({ titulo, links }) {
  return (
    <header className={estilos.cabecalho}>
      <a href="#conteudo" className={estilos.pularLink}>
        Pular para o conteúdo
      </a>

      <div className={estilos.conteiner}>
        <h1 className={estilos.titulo}>{titulo}</h1>

        <nav aria-label="Navegação principal">
          <ul role="list" className={estilos.lista}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={estilos.link}>
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;

