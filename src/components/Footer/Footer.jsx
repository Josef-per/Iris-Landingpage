//import area
//
// Colocar os ícones do lucid-react depois pois eles fazem muita falta

import irisLogo from '../../assets/images/iris-logo.svg'

export default function Footer() {
  return (
    <>
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
    </>
  )
}
