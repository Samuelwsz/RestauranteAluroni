import styles from "./Footer.module.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg"

export default function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <Logo />
      </section>
    </>
  )
}
