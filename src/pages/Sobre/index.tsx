import styles from "./Sobre.module.scss"
import stylesTema from "../../styles/Tema.module.scss"
import casa from "./assets/casa.png"
import massa1 from "./assets/massa1.png"
import massa2 from "./assets/massa2.png"

const imagens = [massa1, massa2]

export default function Sobre() {
  return (
    <>
      <section className={stylesTema.container}>
        <h3 className={stylesTema.titulo}>Sobre</h3>
        <div className={styles.imagens}>
          <div className={styles.imagens__imagem}>
            <img src={casa} alt="Casa Aluroni" />
          </div>
        </div>
        <div className={styles.sobreNos}>
          <div className={styles.sobreNos__texto}>
            <p>
              Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a
              Massa Italiana Caseira mais saborosa e sofisticada de São Paulo!
              Prezamos pelos ingredientes tradicionais da culinária Italiana,
              frescos e de excelente qualidade para que sua experiência seja
              ainda mais intensa!
            </p>
            <p>
              Também possuímos uma cardápio de carnes com muitas opções de
              acordo com o seu gosto!
            </p>
            <p>
              Para acompanhar as massas italianas, Aluroni possui uma reserva de
              vinhos especiais, que harmonizam perfeitamente com o seu parto,
              seja carne ou massa!
            </p>
          </div>
        </div>
        <div className={styles.imagens}>
          {imagens.map((imagem, index) => (
            <div className={styles.imagens__imagem} key={index}>
              <img src={imagem} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
