import styles from "./Botao.module.scss"

interface BotaoProps {
  children?: React.ReactNode
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

export default function Botao({
  children,
  type = "button",
  onClick,
}: BotaoProps) {
  return <button className={styles.botao}>{children}</button>
}
