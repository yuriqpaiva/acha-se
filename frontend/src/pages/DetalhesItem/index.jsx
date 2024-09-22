import { useParams } from 'react-router-dom';
import { Container } from './styles';
import { http } from '../../api/server';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BackButton } from '../../components/BackButton';
import ObjectForm from '../../components/ObjectForm';
import { queryClient } from '../../lib/react-query';

const DetalhesItem = () => {
  const params = useParams();

  const { data: item } = useQuery({
    queryKey: ['object', params.objectId],
    queryFn: async () => {
      const { data } = await http.get(`/objects/${params.objectId}`);
      return data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      try {
        await http.put(`/objects/${data.id}`, data.body, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Objeto atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar objeto', error);
      }
    },
    queryKey: ['object', params.objectId],
    onSuccess: () => {
      queryClient.invalidateQueries(['object', params.objectId]);
    },
  });

  const updateObject = async (formData, file) => {
    if (!file) {
      alert('Insira o arquivo de imagem ');
      return;
    }

    const body = new FormData();

    for await (const key of Object.keys(formData)) {
      body.append(key, formData[key]);
    }

    if (file) {
      body.append('file', file);
    }

    mutate({ id: params.objectId, body });
  };

  if (!item) {
    return;
  }

  return (
    <Container>
      <BackButton marginBottom={32} />
      <ObjectForm
        defaultValues={item}
        isEditing
        onSubmit={updateObject}
        isSubmitting={isPending}
      />
    </Container>
  );
};

export default DetalhesItem;
