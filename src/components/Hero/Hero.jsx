//import area


// import de imagens
import hojeImage from '../../assets/images/hoje.png'

export default function Hero() {
  return (
    <>
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
    </>
  )
}
