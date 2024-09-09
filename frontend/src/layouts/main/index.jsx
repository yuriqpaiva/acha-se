import React from 'react';
import * as C from './styles';
import logo from '../../images/Achese3.png';
import icone from '../../images/icone.png';
import fotoadmin from '../../images/fotoadmin.PNG';
import iconsair from '../../images/iconsair.png';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export function MainLayout() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
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
          onClick={() => [signout(), navigate('/login')]}
        />
        <br />
        <br />
        <C.Administrador>Administrador</C.Administrador>
      </C.Nav>

      <C.Content>
        <C.Header>
          <C.DivImagemLogo src={logo} alt="Logo" />
          <C.Iconsair
            src={iconsair}
            alt="Sair"
            onClick={() => [signout(), navigate('/login')]}
          />
        </C.Header>
        <Outlet />
      </C.Content>
    </C.Container>
  );
}
