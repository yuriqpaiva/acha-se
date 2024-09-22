import { Title } from '../../styles/base-styles';
import { Pencil, PlusCircle, Trash } from '@phosphor-icons/react';
import * as Styled from './styles';
import { useEffect, useRef, useState } from 'react';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

const ObjectForm = ({
  defaultValues,
  onSubmit,
  isSubmitting = false,
  isEditing = false,
}) => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: defaultValues?.name || '',
    color: defaultValues?.color || '',
    value: defaultValues?.value || '',
    brand: defaultValues?.brand || '',
    date: defaultValues?.date || '',
    local: defaultValues?.local || '',
    category: defaultValues?.category || 'ELETRONIC',
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    async function fetchFileBlob() {
      const response = await fetch(defaultValues?.imageUrl);
      const blob = await response.blob();
      setFile(blob);
    }

    if (defaultValues?.imageUrl) {
      fetchFileBlob();
    }
  }, [defaultValues]);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData, file);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title style={{ marginBottom: 16 }}>
        {isEditing ? (
          <Pencil size={32} weight="bold" />
        ) : (
          <PlusCircle size={32} weight="bold" />
        )}
        {isEditing ? 'Editar' : 'Adicionar'} Item
      </Title>

      <Styled.Galeria>
        <Styled.ButtonImageWrapper>
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
            <Styled.BotaoImagem
              type="button"
              onClick={() => fileInputRef.current.click()}
            >
              Anexar imagem do item
            </Styled.BotaoImagem>
          )}
        </Styled.ButtonImageWrapper>
        <Input
          placeholder="Nome do item"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
        />
        <Select
          required
          placeholder="Categoria"
          value={formData.category}
          defaultValue={defaultValues?.category || 'ELETRONIC'}
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
          value={formData.color}
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Valor"
          required
          value={formData.value}
          onChange={(e) => setFormData({ ...formData, value: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Data"
          required
          defaultValue={
            defaultValues?.date
              ? new Date(defaultValues.date).toISOString().slice(0, 16)
              : undefined
          }
          onChange={(e) => {
            setFormData({
              ...formData,
              date: new Date(e.target.value).toISOString(),
            });
          }}
          type="datetime-local"
        />
        <Input
          // Marca
          placeholder="Marca"
          required
          value={formData.brand}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          type="text"
        />
        <Input
          // Local
          placeholder="Local"
          required
          value={formData.local}
          onChange={(e) => setFormData({ ...formData, local: e.target.value })}
          type="text"
        />
        <Styled.SubmitButtonWrapper>
          <Button
            type="submit"
            fullWidth
            style={{ marginTop: 16 }}
            loading={isSubmitting}
          >
            {isEditing ? (
              <Pencil size={24} weight="bold" />
            ) : (
              <PlusCircle size={24} weight="bold" />
            )}
            {isEditing ? 'Editar' : 'Adicionar'} Item
          </Button>
        </Styled.SubmitButtonWrapper>
      </Styled.Galeria>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <input
          onChange={handleChange}
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
        />
      </div>
    </form>
  );
};

export default ObjectForm;
