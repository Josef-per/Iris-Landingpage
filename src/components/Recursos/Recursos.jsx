//import area


//import de imagens

export default function Recursos() {

  //anotações
  // depois passar esses textos como props do componente, mais por ficar melhor em atualizar diretamente a landing page

  return (
    <>
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
    </>
  )
}
