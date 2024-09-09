import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as C from './styles';

import item1 from '../../images/item1.PNG';
import item2 from '../../images/item2.PNG';
import item3 from '../../images/item3.PNG';
import item4 from '../../images/item4.PNG';
import item5 from '../../images/item5.PNG';
import item6 from '../../images/item6.PNG';
import item7 from '../../images/item7.PNG';
import item8 from '../../images/item8.PNG';

import icone2 from '../../images/icone2.png';
import icone3 from '../../images/icone3.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.TextoPag>
        <C.BotaoInvisivel>
          <C.Icone2 src={icone2} alt="Ícone" /> Itens encontrados
        </C.BotaoInvisivel>
      </C.TextoPag>
      <C.NovoItem onClick={() => navigate('/cadastro-item')}>
        &nbsp;&nbsp;&nbsp;&nbsp;Cadastrar novo item &nbsp;&nbsp;&nbsp;
        <C.Icone3 src={icone3} alt="Ícone" />
      </C.NovoItem>
      <C.Galeria>
        <Link to="/smartphones">
          <C.Itens src={item1} alt="Item 1" />
        </Link>
        <Link to="/Materiais">
          <C.Itens src={item2} alt="Item 2" />
        </Link>
        <Link to="/Copos">
          <C.Itens src={item3} alt="Item 3" />
        </Link>
        <Link to="/Acessorios">
          <C.Itens src={item4} alt="Item 4" />
        </Link>
        <Link to="/Roupas">
          <C.Itens src={item5} alt="Item 5" />
        </Link>
        <Link to="/Outros">
          <C.Itens src={item8} alt="Item 8" />
        </Link>
        <Link to="/Documentos">
          <C.Itens src={item7} alt="Item 7" />
        </Link>
        <Link to="/Carregadores">
          <C.Itens src={item6} alt="Item 6" />
        </Link>
      </C.Galeria>
    </C.Container>
  );
};

export default Home;
