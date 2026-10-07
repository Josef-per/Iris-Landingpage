import './css/styles.css';

import {usePwaInstall} from './hooks/usePwaInstall.js'
import {useScrollAnimations} from './hooks/useScrollAnimation.js'

import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Recursos from './components/Recursos/Recursos.jsx';
import Telas from './components/Telas/Telas.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import Install from './components/Install/Install.jsx';
import Footer from './components/Footer/Footer.jsx';

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

        <Sobre />

        {/* Instalação */}

        <Install
          handleInstall={handleInstall}
          installed={installed}
          installStatus={installStatus}
        />

      </main>

      {/* Footer */}

      <Footer />

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
