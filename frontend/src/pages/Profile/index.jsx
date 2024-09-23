import { useMutation, useQuery } from '@tanstack/react-query';
import { http } from '../../api/server';
import * as Styled from './styles';
import { Title, Subtitle } from '../../styles/base-styles';
import { Lock, Pencil, User } from '@phosphor-icons/react';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { queryClient } from '../../lib/react-query';

const updateProfileSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phoneNumber: yup.string().required('Telefone é obrigatório'),
});

const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required('Senha atual é obrigatória'),
  newPassword: yup.string().required('Nova senha é obrigatória'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Senhas não conferem')
    .required('Confirmação de senha é obrigatória'),
});

const Profile = () => {
  const updateInfoForm = useForm({
    resolver: yupResolver(updateProfileSchema),
  });

  const changePasswordForm = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await http.get('/user');
      updateInfoForm.reset({
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
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
      alert('Informações atualizadas com sucesso');
    },
  });

  async function onSubmitUpdateInfo(data) {
    mutate(data);
  }

  async function onSubmitUpdatePassword(data) {
    try {
      await http.put('/user/password', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      changePasswordForm.reset();
      alert('Senha alterada com sucesso');
    } catch (error) {
      if (error.response.status === 400) {
        return alert('Senha atual incorreta');
      }
      alert('Erro ao alterar senha');
    }
  }

  return (
    <Styled.Container>
      <Title style={{ marginBottom: 32 }}>
        <User size={32} weight="bold" />
        Perfil
      </Title>
      <Subtitle style={{ marginBottom: 16 }}>
        <Pencil size={24} weight="bold" />
        Alterar informações básicas
      </Subtitle>
      <Styled.Galeria
        as="form"
        onSubmit={updateInfoForm.handleSubmit(onSubmitUpdateInfo)}
      >
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          error={updateInfoForm.formState.errors.name}
          {...updateInfoForm.register('name')}
        />
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          error={updateInfoForm.formState.errors.email}
          {...updateInfoForm.register('email')}
        />
        <Input
          label="Telefone"
          placeholder="Digite seu telefone"
          error={updateInfoForm.formState.errors.phoneNumber}
          {...updateInfoForm.register('phoneNumber')}
        />
        <Styled.SubmitButton type="submit" loading={isPending}>
          Salvar
        </Styled.SubmitButton>
      </Styled.Galeria>

      <Subtitle style={{ marginTop: 32, marginBottom: 16 }}>
        <Lock size={24} weight="bold" />
        Alterar senha
      </Subtitle>
      <Styled.Galeria
        as="form"
        onSubmit={changePasswordForm.handleSubmit(onSubmitUpdatePassword)}
      >
        <Input
          label="Senha atual"
          placeholder="Digite sua senha atual"
          type="password"
          error={changePasswordForm.formState.errors.currentPassword}
          {...changePasswordForm.register('currentPassword')}
        />
        <Input
          label="Nova senha"
          placeholder="Digite sua nova senha"
          type="password"
          error={changePasswordForm.formState.errors.newPassword}
          {...changePasswordForm.register('newPassword')}
        />
        <Input
          label="Confirmar nova senha"
          placeholder="Confirme sua nova senha"
          type="password"
          error={changePasswordForm.formState.errors.confirmNewPassword}
          {...changePasswordForm.register('confirmNewPassword')}
        />
        <Styled.SubmitButton type="submit">Salvar</Styled.SubmitButton>
      </Styled.Galeria>
    </Styled.Container>
  );
};

export default Profile;
