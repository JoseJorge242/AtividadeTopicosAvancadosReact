import estilos from './Rodape.module.css';


function Rodape({ texto }) {
  const ano = new Date().getFullYear();

  return (
    <footer className={estilos.rodape}>
      <p>
        &copy; {ano} {texto}
      </p>
    </footer>
  );
}

export default Rodape;