import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import logo from '../../images/Achese3.png';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
  HandDeposit,
  House,
  List,
  SignOut,
  User,
  XCircle,
} from '@phosphor-icons/react';
import { useWindowDimensions } from '../../contexts/window';
import { ReportBox } from '../../components/ReportBox';

const navItems = [
  {
    label: 'Início',
    icon: House,
    to: '/',
  },
  {
    label: 'Devolvidos',
    icon: HandDeposit,
    to: '/devolvidos',
  },
  {
    label: 'Perfil',
    icon: User,
    to: '/perfil',
  },
];

export function MainLayout() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleToggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  const navbarRef = useRef(null);

  function handleClickOutside(event) {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbarOpen(false);
    }
  }

  useEffect(() => {
    if (width <= 920) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [width]);

  return (
    <Styled.Container>
      <Styled.Nav open={isNavbarOpen} ref={navbarRef}>
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
          <Styled.DivImagemLogo src={logo} alt="Logo" />

          <div className="left-side">
            <Styled.OpenNavButton onClick={handleToggleNavbar}>
              <List size={28} weight="bold" />
            </Styled.OpenNavButton>
            <ReportBox />
          </div>
        </Styled.Header>
        <Outlet />
      </Styled.Content>
      <ReportBox suspended />
    </Styled.Container>
  );
}
