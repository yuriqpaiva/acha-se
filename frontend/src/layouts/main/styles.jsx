import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(243, 244, 249, 1);
  font-family: 'Montserrat', sans-serif;
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
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: white;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  align-items: center;

  @media (max-width: 920px) {
    display: none;
  }
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

export const Content = styled.div`
  z-index: 1;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 920px) {
    flex-direction: column;
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
