// CadastroItem/index.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Icone2, // Importe Iconsair do styles.js
  TextoPag,
  BotaoInvisivel,
  Galeria,
  Form,
  FormCriarItem,
  FormDropDawn,
  BotaoItem,
  Form2,
} from './styles';
import icone2 from '../../images/icone2.png';
import { http } from '../../api/server';

const DetalhesItem = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [item, setItem] = useState();

  const fetchItem = async () => {
    const { data } = await http.get(`/objects/${params.objectId}`);
    if (!data) {
      alert('erro ao buscar item');
      navigate('/');
      return;
    }

    setItem(data);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  if (!item) {
    return;
  }

  return (
    <>
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
            <FormCriarItem disabled value={item.name} type="text" />
            <br />
            <br />
            Categoria:
            <br />
            <br />
            <FormDropDawn
              disabled
              value={item.category}
              className="FormDropDawn"
            >
              <option value="ELETRONIC">Smartphones e Eletrônicos</option>
              <option value="MATERIALS_AND_BAGS">Materiais e mochilas</option>
              <option value="CUPS_AND_BOTTLES">Copos e garrafas</option>
              <option value="ACCESSORIES">Acessórios</option>
              <option value="CLOTHES">Roupas</option>
              <option value="CHARGERS_AND_CABLES">Materiais e mochilas</option>
              <option value="DOCUMENTS">Documentos</option>
              <option value="OTHERS">Outros</option>
            </FormDropDawn>
          </Form2>

          <Form2>
            <br />
            Cor: <br />
            <br />
            <FormCriarItem
              disabled
              value={item.color}
              type="text"
              className="FormCriarItem disabled"
            />
            <br />
            <br />
            Valor estimado: <br />
            <br />
            <FormCriarItem
              disabled
              value={item.value}
              type="text"
              className="FormCriarItem disabled"
            />
            <br />
          </Form2>

          <Form2>
            <br />
            Data e hora: <br />
            <br />
            <FormCriarItem
              disabled
              defaultValue={item.date.substring(0, 10)}
              type="date"
              className="FormCriarItem disabled"
            />
            <br />
            <br />
            Marca: <br />
            <br />
            <FormCriarItem
              disabled
              value={item.brand}
              type="text"
              className="FormCriarItem disabled"
            />
            <br />
          </Form2>

          <Form2>
            <br />
            Local encontrado: <br />
            <br />
            <FormCriarItem
              disabled
              value={item.local}
              type="text"
              className="FormCriarItem disabled"
            />
            <br />
          </Form2>
        </Form>
      </Galeria>
      <BotaoItem
        className="botaoitem"
        onClick={() => navigate(`/devolution/${params.objectId}`)}
      >
        Marcar devolução
      </BotaoItem>
    </>
  );
};

export default DetalhesItem;
