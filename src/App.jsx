import Cabecalho from './componentes/Estrutura/Cabecalho';
import Rodape from './componentes/Estrutura/Rodape';
import Secao from './componentes/Estrutura/Secao';
import estilos from './App.module.css';

const LINKS_MENU = [
  { id: 'progresso', rotulo: 'Progresso' },
  { id: 'abas', rotulo: 'Abas' },
  { id: 'acordeao', rotulo: 'Acordeão' },
  { id: 'paginacao', rotulo: 'Paginação' },
  { id: 'menu', rotulo: 'Menu' },
  { id: 'toast', rotulo: 'Toast' },
];

function App() {
  return (
    <>
      <Cabecalho titulo="Atividade React" links={LINKS_MENU} />

      <main id="conteudo" className={estilos.principal}>
        <Secao id="progresso" titulo="Barra de Progresso">
          <p>Em construção.</p>
        </Secao>

        <Secao id="abas" titulo="Abas">
          <p>Em construção.</p>
        </Secao>

        <Secao id="acordeao" titulo="Acordeão">
          <p>Em construção.</p>
        </Secao>

        <Secao id="paginacao" titulo="Paginação">
          <p>Em construção.</p>
        </Secao>

        <Secao id="menu" titulo="Menu Suspenso">
          <p>Em construção.</p>
        </Secao>

        <Secao id="toast" titulo="Notificação Toast">
          <p>Em construção.</p>
        </Secao>
      </main>

      <Rodape texto="josé Jorge - Engenharia de Software, UCSAL" />
    </>
  );
}

export default App;