import { BookOpen, UserGroup, Heart} from "lucide-react"

import Article from "./Articles/Article"

export default function Cards() {
  return (
    <>
      <section
        id="recursos"
        className="features wrap section-space"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              O QUE O ÍRIS OFERECE
            </span>

            <h2>
              Registros e acompanhamento
              <br />
              <span>em um só lugar.</span>
            </h2>
          </div>

          <div>
            <span> Pequenos momentos de atenção podem fazer parte de uma jornada de cuidado mais conectada. </span>
          </div>
        </div>

        <div className="feature-grid">

          <Article
            icon={<BookOpen />}
            number="/01"
            title="Registre seu dia"
            description="Anote emoções e refeições e consulte seu histórico."
          />

          <Article
            icon={<UserGroup />}
            number="/02"
            title="Compartilhe o cuidado seu dia"
            description="Use um convite QR para se vincular ao profissional e consultar seu
              plano de cuidado. emoções e refeições e consulte seu histórico."
          />

          <Article
            icon={<Heart />}
            number="/03"
            title="Acompanhe pacientes seu dia"
            description="Anote Organize consultas, registros, anotações e planos
              na área profissional. e refeições e consulte seu histórico."
          />

        </div>



      </section>
    </>
  )
}
