import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { http } from '../../api/server';
import { BackButton } from '../../components/BackButton';

import ObjectForm from '../../components/ObjectForm';

const CadastroItem = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const createObject = async (formData, file) => {
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
      <ObjectForm onSubmit={createObject} isSubmitting={isSubmitting} />
    </Container>
  );
};

export default CadastroItem;
