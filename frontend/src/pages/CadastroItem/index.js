// CadastroItem/index.js
import React, { useRef, useState } from 'react';
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
import { http } from '../../api/server';

const CadastroItem = () => {
  const { signout } = useAuth(); // Utilize useAuth aqui
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    color: '',
    value: '',
    brand: '',
    date: '',
    local: '',
    category: 'ELETRONIC',
  });

  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const createObject = async (event) => {
    event.preventDefault();
    if (!file) {
      alert('Insira o arquivo de imagem ');
      return;
    }
    const body = new FormData();

    for await (const key of Object.keys(formData)) {
      body.append(key, formData[key]);
    }

    body.append('file', file);

    for (var pair of body.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    const data = await http.post('/objects', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (!data) {
      alert('Erro ao cadastrar objeto!');
      return;
    }

    navigate('/');
  };
  return (
    <form onSubmit={createObject}>
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
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
            />
            <br />
            <br />
            Categoria:
            <br />
            <br />
            <FormDropDawn
              required
              defaultValue="ELETRONIC"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="FormDropDawn"
            >
              <option value="ELETRONIC">Smartphones e Eletrônicos</option>
              <option value="MATERIALS_AND_BAGS">Materiais e mochilas</option>
              <option value="CUPS_AND_BOTTLES">Copos e garrafas</option>
              <option value="ACCESSORIES">Acessórios</option>
              <option value="CLOTHES">Roupas</option>
              <option value="CHARGERS_AND_CABLES">Carregadores e cabos</option>
              <option value="DOCUMENTS">Documentos</option>
              <option value="OTHERS">Outros</option>
            </FormDropDawn>
          </Form2>

          <Form2>
            <br />
            Cor: <br />
            <br />
            <FormCriarItem
              required
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
              type="text"
              className="FormCriarItem"
            />
            <br />
            <br />
            Valor estimado: <br />
            <br />
            <FormCriarItem
              required
              onChange={(e) =>
                setFormData({ ...formData, value: e.target.value })
              }
              type="text"
              className="FormCriarItem"
            />
            <br />
          </Form2>

          <Form2>
            <br />
            Data e hora: <br />
            <br />
            <FormCriarItem
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  date: new Date(e.target.value).toISOString(),
                })
              }
              type="datetime-local"
              className="FormCriarItem"
            />
            <br />
            <br />
            Marca: <br />
            <br />
            <FormCriarItem
              required
              onChange={(e) =>
                setFormData({ ...formData, brand: e.target.value })
              }
              type="text"
              className="FormCriarItem"
            />
            <br />
          </Form2>

          <Form2>
            <br />
            Local encontrado: <br />
            <br />
            <FormCriarItem
              required
              onChange={(e) =>
                setFormData({ ...formData, local: e.target.value })
              }
              type="text"
              className="FormCriarItem"
            />
            <br />
            <br />
            Imagem: <br />
            <br />
            {file && (
              <img
                style={{ width: '148px', height: '64px' }}
                src={URL.createObjectURL(file)}
                alt=""
              />
            )}
            <br />
          </Form2>
        </Form>
      </Galeria>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <input
          onChange={handleChange}
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
        />
        <BotaoImagem type="button" onClick={() => fileInputRef.current.click()}>
          Anexar imagem
        </BotaoImagem>
        <BotaoItem type="submit" className="botaoitem">
          Adicionar Item
        </BotaoItem>
      </div>
    </form>
  );
};

export default CadastroItem;
