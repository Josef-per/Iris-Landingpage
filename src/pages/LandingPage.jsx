import '../css/styles.css';

import {MoveRight} from "lucide-react"

import {usePwaInstall} from '../hooks/usePwaInstall.js'
import {useScrollAnimations} from '../hooks/useScrollAnimation.js'

import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Recursos from '../components/Recursos/Recursos.jsx';
import Telas from '../components/Telas/Telas.jsx';
import Sobre from '../components/Sobre/Sobre.jsx';
import Install from '../components/Install/Install.jsx';
import Footer from '../components/Footer/Footer.jsx';

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

          <MoveRight />
        </a>

        <p className="dialog-footnote">
          Você também pode usar o app pelo navegador.
        </p>
      </dialog>
    </>
  );
}
