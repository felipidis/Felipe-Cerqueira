import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Felipe" 
          descricao="Oi, eu sou o Felipe. Sou estudante na área de Ciência da Computação e atualmente estou me aventurando no mundo web com Front-End."
        />
        <CardPequeno 
          imagem="https://images.vexels.com/media/users/3/140928/isolated/lists/8d338f5acd60bfbc9b5fb1b208c8814f-delineou-o-icone-redondo-de-e-mail.png"
          nome="Email:"
          descricao="felipekdra@gmail.com"
        />
        <CardPequeno 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHvYP5u59TsHQTF7bhKb2GjVH52htt4eubjg&usqp=CAU"
          nome="Endereço:"
          descricao="Av.José Camelo de Freitas"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Alma" 
          descricao="Representante de atendimento técnico e financeiro" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
