

export default function Article({
  icon,
  number = "text",
  title= "text",
  description = "text"
}) {
  return (
    <>
      <article className="feature">
        <span className="feature-icon">
          {icon}
        </span>

        <span className="feature-number">
          {number}
        </span>

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>
      </article>
    </>
  )
}
