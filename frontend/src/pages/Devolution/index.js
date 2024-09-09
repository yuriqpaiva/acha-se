import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import icone2 from '../../images/icone2.png';
import {
  Icone2, // Importe Iconsair do styles.js
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
