import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../images/image.png';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email | !senha) {
      setError('Preencha todos os campos');
      return;
    }
    setIsSubmitting(true);
    try {
      await signin(email, senha);
      navigate('/');
    } catch (error) {
      if (error.response.status === 400) {
        setError('E-mail ou senha invalidos');
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
      <C.Content onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <C.labelError>{error}</C.labelError>
        <Button type="submit" fullWidth loading={isSubmitting}>
          Entrar
        </Button>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
