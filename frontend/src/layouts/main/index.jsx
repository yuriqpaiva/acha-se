import React, { useState } from 'react';
import * as Styled from './styles';
import logo from '../../images/Achese3.png';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { House, List, SignOut, User, XCircle } from '@phosphor-icons/react';

const navItems = [
  {
    label: 'Início',
    icon: House,
    to: '/',
  },
  {
    label: 'Perfil',
    icon: User,
    to: '/objetos',
  },
];

export function MainLayout() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleToggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <Styled.Container>
      <Styled.Nav open={isNavbarOpen}>
        <Styled.ToggleNavWrapper>
          <button onClick={handleToggleNavbar}>
            <XCircle size={24} weight="bold" />
          </button>
        </Styled.ToggleNavWrapper>
        <Styled.TopNavContent>
          <Styled.DivImagemLogo src={logo} alt="Logo" />
          <ul className="items">
            {navItems.map((item) => (
              <li key={item.label}>
                <Styled.ItemLink to={item.to} activeClassName="active">
                  <item.icon size={24} weight="bold" />
                  {item.label}
                </Styled.ItemLink>
              </li>
            ))}
          </ul>
        </Styled.TopNavContent>
        <Styled.BottomNavContent>
          <Styled.AdminNavWrapper>
            <div className="picture-wrapper">
              <User size={24} weight="bold" />
            </div>
            Admin
          </Styled.AdminNavWrapper>
          <Styled.LogoutButton onClick={() => [signout(), navigate('/login')]}>
            <SignOut size={24} weight="bold" />
            Sair
          </Styled.LogoutButton>
        </Styled.BottomNavContent>
      </Styled.Nav>

      <Styled.Content isNavbarOpen={isNavbarOpen}>
        <Styled.Header>
          <Styled.OpenNavButton onClick={handleToggleNavbar}>
            <List size={28} weight="bold" />
          </Styled.OpenNavButton>
          <Styled.DivImagemLogo src={logo} alt="Logo" />
        </Styled.Header>
        <Outlet />
      </Styled.Content>
    </Styled.Container>
  );
}
