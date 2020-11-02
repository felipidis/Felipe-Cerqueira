import React from "react";
import styled from 'styled-components'
export function Final(){
  const  ComponentStyle = styled.div`
    text-align: center;
    line-height: 2vh;
    margin-top: 20px;
    `

    return <ComponentStyle>
      <div>
        <h3>O FORMULÁRIO ACABOU</h3>
        <p>Muito Obrigado</p>
      </div>
    </ComponentStyle>

}
export default Final;