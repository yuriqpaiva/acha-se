import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import * as C from './styles';

import logo from '../../images/Achese3.png';
import icone from '../../images/icone.png';
import fotoadmin from '../../images/fotoadmin.PNG';
import iconsair from '../../images/iconsair.png';
import icone2 from '../../images/icone2.png';
import icone3 from '../../images/icone3.png';
import item1 from '../../images/item1.PNG';
import item2 from '../../images/item2.PNG';
import item3 from '../../images/item3.PNG';
import item4 from '../../images/item4.PNG';
import item5 from '../../images/item5.PNG';
import item6 from '../../images/item6.PNG';
import item7 from '../../images/item7.PNG';
import item8 from '../../images/item8.PNG';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <C.Retangulo1 />
      <C.Retangulo2 />
      <div>
        <C.Retangulo3 />
        <C.Retangulo4 />
      </div>
      <C.Nav>
        <C.BotObjetos>
          <C.DivImagemLogo src={logo} alt="Logo" />
          <C.Icone src={icone} alt="Ícone" /> Objetos
        </C.BotObjetos>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="retangulo5"></div>
        <br />
        <C.Fotoadmin src={fotoadmin} alt="Admin" />
        <C.Iconsair
          src={iconsair}
          alt="Sair"
          onClick={() => [signout(), navigate('/')]}
        />
        <br />
        <br />
        <C.Administrador>Administrador</C.Administrador>
      </C.Nav>

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
        <button onClick={() => navigate('/smartphones')}>
          <C.Itens src={item1} alt="Item 1" />
        </button>
        <button onClick={() => navigate('/Materiais')}>
          <C.Itens src={item2} alt="Item 2" />
        </button>
        <button onClick={() => navigate('/Copos')}>
          <C.Itens src={item3} alt="Item 3" />
        </button>
        <button onClick={() => navigate('/Acessorios')}>
          <C.Itens src={item4} alt="Item 4" />
        </button>
        <button onClick={() => navigate('/Roupas')}>
          <C.Itens src={item5} alt="Item 5" />
        </button>
        <button onClick={() => navigate('/Outros')}>
          <C.Itens src={item8} alt="Item 8" />
        </button>
        <button onClick={() => navigate('/Documentos')}>
          <C.Itens src={item7} alt="Item 7" />
        </button>
        <button onClick={() => navigate('/Carregadores')}>
          <C.Itens src={item6} alt="Item 6" />
        </button>
      </C.Galeria>
    </div>
  );
};

export default Home;
