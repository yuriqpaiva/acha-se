import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Achese3.png';
import icone from '../../images/icone.png';
import fotoadmin from '../../images/fotoadmin.PNG';
import iconsair from '../../images/iconsair.png';
import icone2 from '../../images/icone2.png';
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
  BotaoItem,
  Form2,
} from './styles';
import { http } from '../../api/server';

const Devolution = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    rg: '',
  });

  const handleDevolution = async () => {
    const data = await http.post('/objects/devolution', {
      name: formData.name,
      cpf: formData.cpf,
      rg: formData.rg,
      objectId: params.objectId,
    });

    if (!data) {
      alert('Erro ao cadastrar objeto!');
      return;
    }

    navigate('/');
  };

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
            <FormCriarItem
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
            />
          </Form2>

          <Form2>
            <br />
            RG: <br />
            <br />
            <FormCriarItem
              onChange={(e) => setFormData({ ...formData, rg: e.target.value })}
              type="text"
              className="FormCriarItem"
            />
          </Form2>

          <Form2>
            <br />
            CPF: <br />
            <br />
            <FormCriarItem
              onChange={(e) =>
                setFormData({ ...formData, cpf: e.target.value })
              }
              type="text"
              className="FormCriarItem"
            />
          </Form2>
        </Form>
      </Galeria>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <BotaoItem className="botaoitem" onClick={handleDevolution}>
          Marcar item como devolvido
        </BotaoItem>
      </div>
    </>
  );
};

export default Devolution;
