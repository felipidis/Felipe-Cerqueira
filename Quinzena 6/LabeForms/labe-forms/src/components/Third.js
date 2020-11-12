import React from 'react'
import styled from 'styled-components'
export function Third (){
    const  ComponentStyle = styled.div`
    text-align: center;
    line-height: 2vh;
    `

    return <ComponentStyle>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>7. Por que você não terminou um curso de graduação?</p>
                    <input/>
                <p>8. Você fez algum curso complementar?</p>
                    <input/>
        
            <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
    </ComponentStyle>
}
export default Third
