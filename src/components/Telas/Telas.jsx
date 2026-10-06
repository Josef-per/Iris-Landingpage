//import area

import hojeImage from '../../assets/images/hoje.png'
import checkInImage from '../../assets/images/check-in.png'
import diarioImage from '../../assets/images/diario.png'

export default function Telas() {
  return (
    <>
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
    </>
  )
}
