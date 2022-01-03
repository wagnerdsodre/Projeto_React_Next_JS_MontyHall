import styles from '../../../styles/jogo.module.css'
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarportas, criarPortas } from "../../../functions/postas"
import Link from "next/link"
import { useRouter } from 'next/router'

export default function jogo() {
  const router = useRouter()
  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])


  useEffect(() => {
    const portas = +router.query.portas
    const presente = +router.query.temPresente
    const qtdPortasValidas = portas >= 3 && portas <= 100
    const temPresenteValdo = presente >=1 && presente <=portas

     setValido(qtdPortasValidas && temPresenteValdo)
  }, [portas])


  useEffect(() => {
    const portas = router.query.portas
    const presente = router.query.temPresente
    setPortas(criarPortas(+portas, +presente))
  }, [router?.query])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarportas(portas, novaPorta))}></Porta>
    })

  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas():
        <h1>Valores inválidos</h1>
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )


}