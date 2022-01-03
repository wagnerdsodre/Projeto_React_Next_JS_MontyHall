import Cartao from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"
import { useState } from "react"


export default function Formulario() {
  const [Qtde, setQtde] = useState(3)
  const [ComPresent, setComPresent] = useState(1)

  return (
    <div className={styles.formulario}>
        <div>
        <Cartao bgcolor="#0fc8a0">
          <h1>Montly Hall</h1>
        </Cartao>
        <Cartao >
          <EntradaNumerica text="Quantas portas?" 
          value={Qtde} onChange={novaQtde => setQtde(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao >
        <EntradaNumerica text="Porta com presnete?" 
          value={ComPresent} 
          onChange={novaPortaComPresente => setComPresent(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#0fc8a0">
          <Link href={`/jogo/${Qtde}/${ComPresent}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>


    </div>
  )
}
