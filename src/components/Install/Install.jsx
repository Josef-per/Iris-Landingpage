//import area
//
//

import irisLogo from '../../assets/images/iris-logo.svg'

export default function Install({
  handleInstall,
  installed,
  installStatus
}) {
  return (
    <>
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
    </>
  )
}
