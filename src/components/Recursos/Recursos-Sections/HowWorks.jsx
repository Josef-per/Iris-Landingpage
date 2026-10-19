
import { Heart, ArrowUpRight } from "lucide-react"

import ArticleHow from "./Articles/ArticleHow"

export default function HowWorks() {
  return (
    <>
      <section className="how-it-works wrap section-space">

        <div className="how-heading">
          <div>
            <span className="eyebrow">
              SIMPLES, DO SEU JEITO
            </span>

            <h2>
              Como o Íris
              <br />
              <span>funciona.</span>
            </h2>

            <p>
              Uma experiência pensada para tornar o
              acompanhamento parte da sua rotina, sem
              pressa e sem complicação.
            </p>
          </div>

          <div className="heart-decoration">
            <div className="heart-circle heart-circle-outer">
              <div className="heart-circle heart-circle-middle">
                <div className="heart-circle heart-circle-inner">
                  <Heart size={34} strokeWidth={1.4} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-steps">

          <ArticleHow
            Icon={ArrowUpRight}
            number="/01"
            title="Registre"
            description="Registre informações importantes sobre seu dia."
          />

          <ArticleHow
            Icon={ArrowUpRight}
            number="/02"
            title="Acompanhe"
            description="Visualize seus registros e acompanhe sua rotina."
          />

          <ArticleHow
            Icon={ArrowUpRight}
            number="/03"
            title="Compartilhe"
            description="Compartilhe informações relevantes com o
            profissional responsável."
          />

        </div>

      </section>
    </>
  )
}
