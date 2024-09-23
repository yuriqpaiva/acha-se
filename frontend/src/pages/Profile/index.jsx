import { useMutation, useQuery } from '@tanstack/react-query';
import { http } from '../../api/server';
import * as Styled from './styles';
import { Title, Subtitle } from '../../styles/base-styles';
import { User } from '@phosphor-icons/react';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phoneNumber: yup.string().required('Telefone é obrigatório'),
});

const Profile = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await http.get('/user');
      reset({
        name: response.data.name,
        email: response.data.email,
        phoneNumber: response.data.phoneNumber,
      });
      return response.data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await http.put('/user', data);
      return response;
    },
  });

  async function onSubmitUpdateInfo(data) {
    mutate(data);
  }

  return (
    <Styled.Container>
      <Title style={{ marginBottom: 32 }}>
        <User size={32} weight="bold" />
        Perfil
      </Title>
      <Subtitle style={{ marginBottom: 16 }}>
        Alterar informações básicas
      </Subtitle>
      <Styled.Galeria as="form" onSubmit={handleSubmit(onSubmitUpdateInfo)}>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          error={formState.errors.name}
          {...register('name')}
        />
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          error={formState.errors.email}
          {...register('email')}
        />
        <Input
          label="Telefone"
          placeholder="Digite seu telefone"
          error={formState.errors.phoneNumber}
          {...register('phoneNumber')}
        />
        <Styled.SubmitButton type="submit" loading={isPending}>
          Salvar
        </Styled.SubmitButton>
      </Styled.Galeria>
    </Styled.Container>
  );
};

export default Profile;
