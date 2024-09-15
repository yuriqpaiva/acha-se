import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../images/image.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signup } = useAuth();

  const handleSignup = async (event) => {
    event.preventDefault();

    if (!email || !emailConf || !name || !phoneNumber || !senha) {
      setError('Preencha todos os campos');
      return;
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais');
      return;
    }

    setIsSubmitting(true);
    try {
      await signup(name, phoneNumber, email, senha);
      setIsSubmitting(false);
      alert('Usuário cadatrado com sucesso!');
      navigate('/');
    } catch (error) {
      if (error.response.status === 400) {
        setError('E-mail já cadastrado');
        return;
      }
      setError('Ocorreu um erro inesperado');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <C.Container>
      <C.ImageContainer>
        <img src={Logo} alt="logo" />
      </C.ImageContainer>
      <C.Content onSubmit={handleSignup}>
        <Input
          type="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => [setName(e.target.value), setError('')]}
        />
        <Input
          type="phoneNumber"
          placeholder="Digite seu celular"
          value={phoneNumber}
          onChange={(e) => [setPhoneNumber(e.target.value), setError('')]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <Button type="submit" fullWidth loading={isSubmitting}>
          Inscrever-se
        </Button>
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
