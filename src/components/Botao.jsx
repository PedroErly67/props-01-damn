// =====================================================================
// PARTE 4 - A PROP ESPECIAL "children" E FUNÇÕES COMO PROPS
// =====================================================================
//
// 1) children
//    Tudo o que você escreve ENTRE a abertura e o fechamento de um
//    componente chega nele como a prop "children":
//
//        <Botao>Clique aqui</Botao>
//                ^^^^^^^^^^^  isso é o children
//
// 2) Funções como props
//    O pai também pode enviar uma FUNÇÃO para o filho.
//    O filho chama essa função quando algo acontece (ex.: um clique).
//    É assim que o filho "conversa" com o pai!
//
//        <Botao aoClicar={() => alert('Oi!')}>Diga oi</Botao>
//
//    Atenção: passamos a função SEM executar:
//        onClick={aoClicar}      ✅ certo
//        onClick={aoClicar()}    ❌ errado (executa na hora!)
// =====================================================================

import { Children } from "react"

// ✏️ TAREFA 4.1
// Receba as props: children, cor e aoClicar
function Botao({children, cor, aoClicar}) {
  return (
    // ✏️ TAREFA 4.2
    //  a) Troque "azul" pela prop cor  ->  className={'botao ' + cor}
    //  b) Adicione  onClick={aoClicar}  no <button>
    //  c) Troque o texto fixo "Botão" por {children}
    <button className={'botao' + cor } onClick={aoClicar}>{children}</button>
  )
}

export default Botao