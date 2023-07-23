import styles from "./Item.module.scss"
import classNames from "classnames"
import { Prato } from "../../../../types/Prato"
import { useNavigate } from "react-router-dom"

export default function Item(props: Prato) {
  const { id, title, description, category, size, serving, price, photo } =
    props

  const navigate = useNavigate()
  return (
    <>
      <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
        <div className={styles.item__imagem}>
          <img src={photo} alt={title} />
        </div>
        <div className={styles.item__descricao}>
          <div className={styles.item__titulo}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.item__tags}>
            <div
              className={classNames({
                [styles.item__tipo]: true,
                [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
              })}
            >
              {category.label}
            </div>
            <div className={styles.item__porcao}>{size}g</div>
            <div className={styles.item__qtdpessoas}>
              Serve {serving} pessoa{serving === 1 ? "" : "s"}
            </div>
            <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  )
}
