import React from 'react'
import styled from 'styled-components'

export function Second (){
    const  ComponentStyle = styled.div`
    text-align: center;
    line-height: 2vh;
    `

    return <ComponentStyle>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                    <input/>
                <p>6. Qual a unidade de ensino?</p>
                    <input/>
    </ComponentStyle> 
}
export default Second