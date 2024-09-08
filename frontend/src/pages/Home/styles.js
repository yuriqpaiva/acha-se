import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(243, 244, 249, 1);
  height: 1000px;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
`;

export const Retangulo1 = styled.div`
  width: 70px;
  height: 500px;
  background-color: white;
  transform: rotate(235deg);
  position: absolute;
  border: 1px solid rgb(16, 74, 139);
  top: -150px;
  left: 250px;
`;

export const Retangulo2 = styled.div`
  width: 70px;
  height: 300px;
  background-color: white;
  transform: rotate(235deg);
  position: absolute;
  border: 1px solid rgb(16, 74, 139);
  top: 65px;
  left: 250px;
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
  position: absolute;
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
  position: absolute;
  top: 170px;
  background-color: rgb(16, 74, 139);
  width: 302px;
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
  position: absolute;
  background-color: white;
  right: 250px;
  width: 800px;
  height: 650px;
  top: 250px;
  column-count: 3;
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

export const Retangulo5 = styled.div`
  height: 2px;
  background-color: rgb(20, 83, 137);
  width: 170px;
  left: 39px;
  position: fixed;
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
