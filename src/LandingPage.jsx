import './css/styles.css';

import irisLogo from './assets/images/iris-logo.svg';

import {usePwaInstall} from './hooks/usePwaInstall.js'
import {useScrollAnimations} from './hooks/useScrollAnimation.js'

import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Recursos from './components/Recursos/Recursos.jsx';
import Telas from './components/Telas/Telas.jsx';

export default function LandingPage() {

  const {
    dialogRef,
    installed,
    installStatus,
    handleInstall,
    closeDialog,
    handleDialogClick,
  } = usePwaInstall()

 useScrollAnimations();

  return (
    <>
      {/* Skip link */}

      <a
        className="skip-link"
        href="#conteudo"
      >
        Pular para o conteúdo
      </a>

      {/* Biblioteca de SVGs trocar isso futuramente para os icones do react-lucid */}

      <svg
        className="svg-library"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <symbol id="arrow" viewBox="0 0 24 24">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </symbol>

          <symbol id="heart" viewBox="0 0 24 24">
            <path d="M20.5 4.8a5.5 5.5 0 0 0-8.5 1 5.5 5.5 0 0 0-8.5 7L12 21l8.5-8.2a5.5 5.5 0 0 0 0-8Z" />
          </symbol>

          <symbol id="book" viewBox="0 0 24 24">
            <path d="M12 5v16M3 3h4a5 5 0 0 1 5 3 5 5 0 0 1 5-3h4v16h-4a5 5 0 0 0-5 2 5 5 0 0 0-5-2H3Z" />
          </symbol>

          <symbol id="people" viewBox="0 0 24 24">
            <circle
              cx="9"
              cy="7"
              r="3"
            />

            <path d="M3 21v-3a6 6 0 0 1 12 0v3m1-17a3 3 0 0 1 0 6m3 11v-3a6 6 0 0 0-3-5" />
          </symbol>
        </defs>
      </svg>

      {/* components */}
      {/* Header */}

      <Header />


      <main id="conteudo">

        {/* Hero */}

        <Hero />

        {/* Recursos */}

        <Recursos />

        {/* Telas */}

        <Telas />

        {/* Sobre */}

        <section
          id="sobre"
          className="about wrap section-space"
        >
          <div className="about-art">
            <img
              src={irisLogo}
              width="270"
              height="130"
              alt="Íris"
            />

            <span>
              Um passo de cada vez.
              <br />
              No seu ritmo.
            </span>
          </div>

          <div className="about-copy">
            <span className="eyebrow">
              O PROJETO
            </span>

            <h2>
              Tecnologia para apoiar
              <br />
              o cuidado em conjunto.
            </h2>

            <p>
              O Íris é um Trabalho de Conclusão de Curso de
              Desenvolvimento de Sistemas da ETEC Dr. Julio Cardoso.
              Reúne registros do paciente e ferramentas de
              acompanhamento profissional.
            </p>
          </div>
        </section>

        {/* Instalação */}

        <section
          id="instalar"
          className="install wrap"
        >
          <div className="install-panel">

            <div>
              <span className="eyebrow">
                ACESSO AO APP
              </span>

              <h2>
                Use no navegador
                <br />
                ou na tela inicial.
              </h2>

              <p>
                Abra o Íris pela web ou adicione um atalho ao celular.
              </p>

              <div className="install-actions">

                <button
                  className="button button-light"
                  id="install-button"
                  type="button"
                  onClick={handleInstall}
                  disabled={installed}
                >
                  {installed
                    ? 'Íris adicionado à tela inicial'
                    : 'Adicionar à tela inicial'}

                  <span aria-hidden="true">
                    ↓
                  </span>
                </button>

                <a
                  className="button button-white-outline"
                  href="/app"
                >
                  Abrir o aplicativo

                  <svg className="icon">
                    <use href="#arrow" />
                  </svg>
                </a>

              </div>

              <p
                className="install-note"
                id="install-status"
                role="status"
              >
                {installStatus}
              </p>

            </div>

            <img
              className="install-logo"
              src={irisLogo}
              width="270"
              height="130"
              alt=""
              aria-hidden="true"
            />

          </div>

          <div
            className="install-guide"
            id="install-guide"
          >
            <h3>
              Como adicionar ao celular
            </h3>

            <div className="guide-grid">

              <p>
                <strong>
                  <span>01</span> Android · Chrome
                </strong>

                No navegador, toque em <b>⋮</b> e escolha{' '}
                <b>Adicionar à tela inicial</b> ou{' '}
                <b>Instalar aplicativo</b>.
              </p>

              <p>
                <strong>
                  <span>02</span> iPhone · Safari
                </strong>

                Toque em <b>Compartilhar</b>, depois em{' '}
                <b>Adicionar à Tela de Início</b> e confirme.
              </p>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}

      <footer className="footer wrap">
        <a
          className="brand brand-purple"
          href="/"
          aria-label="Íris, início"
        >
          <img
            src={irisLogo}
            width="270"
            height="130"
            alt="Íris"
          />
        </a>

        <p>
          O Íris é uma ferramenta de apoio e não substitui o
          atendimento profissional.
        </p>

        <a href="#conteudo">
          Voltar ao início ↑
        </a>
      </footer>

      {/* Dialog */}

      <dialog
        ref={dialogRef}
        id="install-dialog"
        aria-labelledby="dialog-title"
        onClick={handleDialogClick}
      >
        <button
          className="dialog-close"
          aria-label="Fechar instruções"
          type="button"
          onClick={closeDialog}
        >
          ×
        </button>

        <span className="eyebrow">
          ÍRIS NO CELULAR
        </span>

        <h2 id="dialog-title">
          Adicionar à tela inicial
        </h2>

        <p id="dialog-instructions"></p>

        <a
          className="button button-primary"
          href="/app"
        >
          Abrir o Íris

          <svg className="icon">
            <use href="#arrow" />
          </svg>
        </a>

        <p className="dialog-footnote">
          Você também pode usar o app pelo navegador.
        </p>
      </dialog>
    </>
  );
}
