//import area


//import de imagens
import { BookOpen, UserGroup, Heart} from "lucide-react"

import Article from "./Articles/Article"

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

          <Article
            icon={<BookOpen />}
            number="01"
            title="Registre seu dia"
            description="Anote emoções e refeições e consulte seu histórico."
          />

          <Article
            icon={<UserGroup />}
            number="01"
            title="Registre seu dia"
            description="Anote emoções e refeições e consulte seu histórico."
          />

          <Article
            icon={<Heart />}
            number="01"
            title="Registre seu dia"
            description="Anote emoções e refeições e consulte seu histórico."
          />



        </div>
      </section>
    </>
  )
}
