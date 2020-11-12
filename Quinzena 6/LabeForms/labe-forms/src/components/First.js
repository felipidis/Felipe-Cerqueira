import React from 'react'
import styled from 'styled-components'
export function First (){

   const  ComponentStyle = styled.div`
    text-align: center;
    line-height: 2vh;
    `

    return <ComponentStyle>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            
            <p> 1. Qual o seu nome?</p>
            <input/>
                
            <p>2. Qual sua idade?</p>
            <input/>
                
            <p>3. Qual seu email?</p>
            <input/>
                
            <p>4. Qual a sua escolaridade?</p>
                <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
                </select>
            
    </ComponentStyle>
}
export default First