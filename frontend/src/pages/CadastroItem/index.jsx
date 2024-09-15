import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Galeria,
  BotaoImagem,
  Container,
  ButtonImageWrapper,
  SubmitButtonWrapper,
} from './styles';
import { http } from '../../api/server';
import { BackButton } from '../../components/BackButton';
import { Title } from '../../styles/base-styles';
import { PlusCircle, Trash } from '@phosphor-icons/react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

const CadastroItem = () => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);
    const data = await http.post('/objects', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (!data) {
      alert('Erro ao cadastrar objeto!');
      return;
    }

    setIsSubmitting(false);
    navigate('/');
  };
  return (
    <Container>
      <BackButton marginBottom={32} />
      <form onSubmit={createObject}>
        <Title style={{ marginBottom: 16 }}>
          <PlusCircle size={32} weight="bold" />
          Cadastrar item
        </Title>

        <Galeria>
          <ButtonImageWrapper>
            {file ? (
              <div className="image-wrapper">
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                >
                  <img
                    style={{ width: 200, height: 200 }}
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                </button>
                <button
                  className="remove-image"
                  type="button"
                  onClick={() => {
                    setFile(null);
                  }}
                >
                  <Trash size={16} weight="bold" />
                  Remover imagem
                </button>
              </div>
            ) : (
              <BotaoImagem
                type="button"
                onClick={() => fileInputRef.current.click()}
              >
                Anexar imagem do item
              </BotaoImagem>
            )}
          </ButtonImageWrapper>
          <Input
            placeholder="Nome do item"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
          />
          <Select
            required
            defaultValue="ELETRONIC"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            options={[
              { value: 'ELETRONIC', label: 'Smartphones e Eletrônicos' },
              { value: 'MATERIALS_AND_BAGS', label: 'Materiais e mochilas' },
              { value: 'CUPS_AND_BOTTLES', label: 'Copos e garrafas' },
              { value: 'ACCESSORIES', label: 'Acessórios' },
              { value: 'CLOTHES', label: 'Roupas' },
              { value: 'CHARGERS_AND_CABLES', label: 'Carregadores e cabos' },
              { value: 'DOCUMENTS', label: 'Documentos' },
              { value: 'OTHERS', label: 'Outros' },
            ]}
          />
          <Input
            placeholder="Cor"
            required
            onChange={(e) =>
              setFormData({ ...formData, color: e.target.value })
            }
            type="text"
          />
          <Input
            placeholder="Valor"
            required
            onChange={(e) =>
              setFormData({ ...formData, value: e.target.value })
            }
            type="text"
          />
          <Input
            placeholder="Data"
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                date: new Date(e.target.value).toISOString(),
              })
            }
            type="datetime-local"
          />
          <Input
            // Marca
            placeholder="Marca"
            required
            onChange={(e) =>
              setFormData({ ...formData, brand: e.target.value })
            }
            type="text"
          />
          <Input
            // Local
            placeholder="Local"
            required
            onChange={(e) =>
              setFormData({ ...formData, local: e.target.value })
            }
            type="text"
          />
          <SubmitButtonWrapper>
            <Button
              type="submit"
              fullWidth
              style={{ marginTop: 16 }}
              loading={isSubmitting}
            >
              <PlusCircle size={24} weight="bold" />
              Adicionar Item
            </Button>
          </SubmitButtonWrapper>
        </Galeria>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <input
            onChange={handleChange}
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
          />
        </div>
      </form>
    </Container>
  );
};

export default CadastroItem;
