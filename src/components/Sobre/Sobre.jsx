//import area
//
//

import irisLogo from '../../assets/images/iris-logo.svg'

export default function Sobre() {
  return (
    <>
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
    </>
  )
}
