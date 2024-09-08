// CadastroItem/index.js
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import {
  Retangulo1,
  Retangulo2,
  Retangulo3,
  Retangulo4,
  Nav,
  BotObjetos,
  Icone,
  Icone2, // Importe Icone2 do styles.js
  ImagemLogo, // Importe ImagemLogo do styles.js
  Fotoadmin, // Importe Fotoadmin do styles.js
  Iconsair, // Importe Iconsair do styles.js
  TextoPag,
  BotaoInvisivel,
  Galeria,
  Form,
  FormCriarItem,
  FormDropDawn,
  BotaoImagem,
  BotaoItem,
  Form2,
} from './styles';
import logo from '../../images/Achese3.png';
import icone from '../../images/icone.png';
import fotoadmin from '../../images/fotoadmin.PNG';
import iconsair from '../../images/iconsair.png';
import icone2 from '../../images/icone2.png';

const CadastroItem = () => {
  const { signout } = useAuth(); // Utilize useAuth aqui
  const navigate = useNavigate(); // Utilize useNavigate se estiver usando React Router
  return (
    <>
      <Retangulo1 />
      <Retangulo2 />
      <div>
        <Retangulo3 />
        <Retangulo4 />
      </div>

      <Nav>
        <BotObjetos>
          <ImagemLogo src={logo} alt="Logo" />
          <Icone src={icone} alt="Ícone" /> Objetos
        </BotObjetos>
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
        <Fotoadmin src={fotoadmin} alt="Admin" />
        <Iconsair
          src={iconsair}
          alt="Sair"
          onClick={() => [signout(), navigate('/')]}
        />
        <br />
        <br />
        <p className="Administrador">Administrador</p>
      </Nav>
      <TextoPag>
        <BotaoInvisivel>
          <Icone2 src={icone2} alt="Ícone" /> Itens encontrados
        </BotaoInvisivel>
      </TextoPag>

      <Galeria>
        <Form>
          <Form2>
            <br />
            Nome:
            <br />
            <br />
            <FormCriarItem type="text" />
            <br />
            <br />
            Categoria:
            <br />
            <br />
            <FormDropDawn className="FormDropDawn">
              <option value="Smartphones e eletrônicos">
                Smartphones e Eletrônicos
              </option>
              <option value="Materiais e mochilas">Materiais e mochilas</option>
              <option value="Copos e garrafas">Copos e garrafas</option>
              <option value="Acessórios">Acessórios</option>
              <option value="Roupas">Roupas</option>
              <option value="Carregadores e cabos">Materiais e mochilas</option>
              <option value="Documentos">Documentos</option>
              <option value="Outros">Outros</option>
            </FormDropDawn>
          </Form2>

          <Form2>
            <br />
            Cor: <br />
            <br />
            <FormCriarItem type="text" className="FormCriarItem" />
            <br />
            <br />
            Valor estimado: <br />
            <br />
            <FormCriarItem type="text" className="FormCriarItem" />
            <br />
          </Form2>

          <Form2>
            <br />
            Data e hora: <br />
            <br />
            <FormCriarItem type="datetime" className="FormCriarItem" />
            <br />
            <br />
            Marca: <br />
            <br />
            <FormCriarItem type="text" className="FormCriarItem" />
            <br />
          </Form2>
          <Form2>
            <br />
            Local encontrado: <br />
            <br />
            <FormCriarItem type="text" className="FormCriarItem" />
            <br />
          </Form2>
        </Form>
      </Galeria>
      <BotaoImagem className="botaoimagem">Anexar Imagem</BotaoImagem>
      <BotaoItem className="botaoitem">Adicionar Item</BotaoItem>
    </>
  );
};

export default CadastroItem;
