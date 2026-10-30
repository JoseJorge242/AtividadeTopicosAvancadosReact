// src/componentes/Estrutura/Secao.jsx
import estilos from './Secao.module.css';


function Secao({ id, titulo, descricao, children }) {
  const idTitulo = `${id}-titulo`;

  return (
    <section id={id} aria-labelledby={idTitulo} className={estilos.secao}>
      <h2 id={idTitulo} className={estilos.titulo}>
        {titulo}
      </h2>
      {descricao && <p className={estilos.descricao}>{descricao}</p>}
      <div className={estilos.corpo}>{children}</div>
    </section>
  );
}

export default Secao;
