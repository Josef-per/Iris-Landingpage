import './css/styles.css';

import irisLogo from './assets/images/iris-logo.svg';
import hojeImage from './assets/images/hoje.png';
import checkInImage from './assets/images/check-in.png';
import diarioImage from './assets/images/diario.png';

import {usePwaInstall} from './hooks/usePwaInstall.js'
import {useScrollAnimations} from './hooks/useScrollAnimation.js'

import Header from './components/Header/Header.jsx'

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

      <Header />

      <main id="conteudo">

        {/* Hero */}

        <section
          className="hero wrap"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot"></span>
              TECNOLOGIA COM ACOLHIMENTO
            </span>

            <h1 id="hero-title">
              Um passo de
              <br />
              cada vez.
              <br />
              <em>No seu ritmo.</em>
            </h1>

            <p>
              Registre seu dia e conecte-se ao profissional
              que acompanha você. O Íris apoia pessoas com
              transtornos alimentares.
            </p>

            <div className="hero-actions">
              <a
                className="button button-light"
                href="#instalar"
              >
                Usar o Íris

                <svg className="icon">
                  <use href="#arrow" />
                </svg>
              </a>

              <a
                className="text-link"
                href="#sobre"
              >
                Conheça o projeto{' '}
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <figure className="hero-art">
            <div className="phone-frame">
              <img
                src={hojeImage}
                width="780"
                height="1688"
                alt="Tela Hoje do Íris com resumo de alimentação, humor, check-in e recursos do dia a dia."
                fetchPriority="high"
              />
            </div>

            <figcaption>
              Tela do aplicativo · dados de demonstração
            </figcaption>
          </figure>
        </section>

        {/* Recursos */}

        <section
          id="recursos"
          className="features wrap section-space"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                RECURSOS DO ÍRIS
              </span>

              <h2>
                Registros e acompanhamento
                <br />
                em um só lugar.
              </h2>
            </div>
          </div>

          <div className="feature-grid">

            <article className="feature">
              <span className="feature-icon">
                <svg className="icon">
                  <use href="#book" />
                </svg>
              </span>

              <span className="feature-number">
                01
              </span>

              <h3>
                Registre seu dia
              </h3>

              <p>
                Anote emoções e refeições e consulte seu histórico.
              </p>
            </article>

            <article className="feature">
              <span className="feature-icon">
                <svg className="icon">
                  <use href="#people" />
                </svg>
              </span>

              <span className="feature-number">
                02
              </span>

              <h3>
                Compartilhe o cuidado
              </h3>

              <p>
                Use um convite QR para se vincular ao profissional
                e consultar seu plano de cuidado.
              </p>
            </article>

            <article className="feature">
              <span className="feature-icon">
                <svg className="icon">
                  <use href="#heart" />
                </svg>
              </span>

              <span className="feature-number">
                03
              </span>

              <h3>
                Acompanhe pacientes
              </h3>

              <p>
                Organize consultas, registros, anotações e planos
                na área profissional.
              </p>
            </article>

          </div>
        </section>

        {/* Telas */}

        <section
          id="telas"
          className="screens-section"
        >
          <div className="wrap section-space">

            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  POR DENTRO DO ÍRIS
                </span>

                <h2>
                  Conheça as telas do app.
                </h2>
              </div>
            </div>

            <p
              className="screens-swipe-hint"
              id="screens-help"
            >
              Deslize para explorar as telas{' '}
              <span aria-hidden="true">
                →
              </span>
            </p>

            <div
              className="screens-grid"
              tabIndex="0"
              role="region"
              aria-label="Telas do aplicativo"
              aria-describedby="screens-help"
            >

              <figure className="screen-card">
                <div className="screen-heading">
                  <span>01</span>
                  <h3>Hoje</h3>
                </div>

                <p>
                  Resumo e acesso aos registros.
                </p>

                <div className="screen-image">
                  <img
                    src={hojeImage}
                    width="780"
                    height="1688"
                    loading="lazy"
                    alt="Tela Hoje do aplicativo Íris."
                  />
                </div>
              </figure>

              <figure className="screen-card">
                <div className="screen-heading">
                  <span>02</span>
                  <h3>Check-in diário</h3>
                </div>

                <p>
                  Registre como foi seu dia.
                </p>

                <div className="screen-image">
                  <img
                    src={checkInImage}
                    width="780"
                    height="1688"
                    loading="lazy"
                    alt="Tela Check-in diário do aplicativo Íris."
                  />
                </div>
              </figure>

              <figure className="screen-card">
                <div className="screen-heading">
                  <span>03</span>
                  <h3>Diário emocional</h3>
                </div>

                <p>
                  Escreva sobre o que sentiu.
                </p>

                <div className="screen-image">
                  <img
                    src={diarioImage}
                    width="780"
                    height="1688"
                    loading="lazy"
                    alt="Tela Diário emocional do aplicativo Íris."
                  />
                </div>
              </figure>

            </div>

            <p className="screens-caption">
              Telas do aplicativo com dados de demonstração.
            </p>
          </div>
        </section>

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
