import styles from '../styles/porta.module.css'
import PortaModel from '../model/porta'
import Present from './Present'


interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const alternarSelecao = e => props.onChange(porta.alternarSelecao())
  const abrir = ev => {
    ev.stopPropagation()
    props.onChange(porta.abrir())
  }
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>

    )
  }



  return (
    <div>
      <div className={styles.area} onClick={alternarSelecao}>
        <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ? renderizarPorta() : 
        porta.temPresente ? <Present/>: false
        }
        </div>
        <div className={styles.chao}></div>
      </div>
    </div>
  )
}
