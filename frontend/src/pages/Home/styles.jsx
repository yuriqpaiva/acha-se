import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: white;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  align-items: center;
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

export const TextoPag = styled.div`
  top: 40px;
  left: 430px;
`;

export const TextoObjetos = styled.p`
  font-size: 25px;
  color: rgb(20, 83, 137);
  font-weight: 600;
`;

export const BotaoInvisivel = styled.button`
  border-radius: 5px;
  height: 30px;
  text-align: left;
  background-color: rgba(243, 244, 249, 1);
  color: rgb(20, 83, 137);
  border: none;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0);
`;

export const NovoItem = styled.a`
  right: 250px;
  height: 40px;
  top: 170px;
  background-color: rgb(16, 74, 139);
  max-width: 302px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: none;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #82a5c5;
  }
  &:active {
    background-color: #00060c;
  }
`;

export const Galeria = styled.div`
  border-radius: 10px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemGaleria = styled(Link)`
  text-decoration: none;
  height: 220px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border};

  font-size: 1.125rem;
  text-align: center;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transition: all 0.2s ease;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 620px) {
    height: 160px;
  }
`;

export const Itens = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 10px;
  padding-top: 6px;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border};

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const Fotoadmin = styled.img`
  border-radius: 7px;
  height: 40px;
  width: 40px;
  border: 2px solid rgb(20, 83, 137);
  position: fixed;
  left: 39px;
`;

export const Iconsair = styled.img`
  position: fixed;
  top: 430px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  left: 177px;
`;

export const Administrador = styled.p`
  position: fixed;
  left: 39px;
  color: rgb(20, 83, 137);
`;

export const DivImagemLogo = styled.img`
  height: 150px;
  width: 250px;
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

export const AddItemButtonWrapper = styled.div`
  max-width: 300px;

  @media (max-width: 920px) {
    max-width: 100%;
  }
`;
