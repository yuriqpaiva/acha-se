import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(243, 244, 249, 1);
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Retangulo1 = styled.div`
  z-index: 1;
  width: 70px;
  height: 500px;
  background-color: white;
  transform: rotate(235deg);
  position: absolute;
  border: 1px solid rgb(16, 74, 139);
  top: -150px;
  left: 250px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Retangulo2 = styled.div`
  z-index: 1;
  width: 70px;
  height: 300px;
  background-color: white;
  transform: rotate(235deg);
  position: absolute;
  border: 1px solid rgb(16, 74, 139);
  top: 65px;
  left: 250px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Nav = styled.div`
  z-index: 999999;
  height: 100vh;
  width: 250px;
  background-color: white;
  text-align: center;
  align-items: center;
  padding: 32px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 920px) {
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.225s ease-in-out;
  }
`;

export const OpenNavButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};

  height: 48px;
  width: 48px;
  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ToggleNavWrapper = styled.div`
  display: none;

  @media (max-width: 920px) {
    display: flex;
    position: absolute;
    right: 8px;
    top: 8px;

    button {
      height: 40px;
      width: 40px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TopNavContent = styled.div`
  width: 100%;

  .items {
    padding-top: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    li {
      list-style: none;
    }
  }
`;

export const ItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  padding: 8px 12px;

  &.active {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  text-decoration: none;
  color: ${(props) => props.theme.colors.danger};
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  padding: 8px 12px;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerLight};
  }
`;

export const BottomNavContent = styled.div`
  width: 100%;
`;

export const AdminNavWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  .picture-wrapper {
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 5px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;
`;

export const BotObjetos = styled.button`
  width: 180px;
  border-radius: 5px;
  height: 30px;
  text-align: left;
  background-color: rgba(243, 244, 249, 1);
  color: rgb(20, 83, 137);
  cursor: pointer;
  border: none;
`;

export const Galeria = styled.div`
  position: absolute;
  background-color: white;
  right: 250px;
  width: 800px;
  height: 650px;
  top: 250px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

export const Itens = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  padding-top: 6px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Fotoadmin = styled.img`
  border-radius: 7px;
  height: 40px;
  width: 40px;
  border: 2px solid rgb(20, 83, 137);
  left: 39px;
`;

export const Iconsair = styled.img`
  top: 430px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  left: 177px;

  @media (max-width: 920px) {
    max-height: 32px;
    max-width: 32px;
  }
`;

export const Administrador = styled.p`
  left: 39px;
  color: rgb(20, 83, 137);
`;

export const Retangulo5 = styled.div`
  height: 2px;
  background-color: rgb(20, 83, 137);
  width: 170px;
  left: 39px;
  position: fixed;

  @media (max-width: 920px) {
    display: none;
  }
`;
export const Retangulo3 = styled.div`
  width: 70px;
  height: 300px;
  background-color: white;
  transform: rotate(235deg);
  position: absolute;
  border: 1px;
  border-style: solid;
  border-color: rgb(16, 74, 139);
  top: 355px;
  right: 0;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Retangulo4 = styled.div`
  width: 70px;
  height: 300px;
  background-color: white;
  transform: rotate(235deg);
  position: absolute;
  border: 1px;
  border-style: solid;
  border-color: rgb(16, 74, 139);
  top: 520px;
  right: 65px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const DivImagemLogo = styled.img`
  height: 100px;
  width: auto;
`;

export const Icone = styled.img`
  height: 20px;
  width: 26px;
  vertical-align: middle;
`;

export const Icone2 = styled.img`
  height: 40px;
  vertical-align: middle;
`;

export const Icone3 = styled.img`
  height: 30px;
  vertical-align: middle;
`;

export const Content = styled.div`
  z-index: 1;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 64px;
  margin: 0 auto;
  max-width: 1200px;

  transition: all 0.225s ease;
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    display: ${({ isNavbarOpen }) => (isNavbarOpen ? 'block' : 'none')};
  }

  @media (max-width: 920px) {
    flex-direction: column;
    padding-left: 20px;
  }
`;

export const Header = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 64px;

  @media (max-width: 920px) {
    display: flex;

    & > img {
      height: 50px;
      width: 50px;
      margin: 10;
      object-fit: cover;
    }
  }
`;
