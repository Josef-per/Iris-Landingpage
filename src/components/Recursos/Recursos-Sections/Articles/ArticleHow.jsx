

export default function ArticleHow({
  Icon,
  number = "text",
  title = "text",
  description = "text"
}) {
  return (
    <>
      <article className="how-step">
        <span className="step-number">{number}</span>

        <div className="step-content">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
        </div>

        <Icon className="step-arrow" size={20} />
      </article>
    </>
  )
}
