import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Styled from './styles';
import { http } from '../../api/server';
import Input from '../../components/Input';
import { BackButton } from '../../components/BackButton';
import { Title } from '../../styles/base-styles';
import { HandDeposit } from '@phosphor-icons/react';
import Button from '../../components/Button';

const Devolution = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    rg: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDevolution = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
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

    setIsSubmitting(false);
    alert('Objeto devolvido com sucesso!');
    navigate('/');
  };

  return (
    <Styled.Container>
      <BackButton marginBottom={32} />
      <Title style={{ marginBottom: 16 }}>
        <HandDeposit size={32} weight="bold" />
        Devolução de objeto
      </Title>
      <Styled.Galeria onSubmit={handleDevolution}>
        <Input
          placeholder="Nome"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
        />

        <Input
          placeholder="RG"
          onChange={(e) => setFormData({ ...formData, rg: e.target.value })}
          type="text"
          className="FormCriarItem"
        />

        <Input
          placeholder="CPF"
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
          type="text"
          className="FormCriarItem"
        />
        <Button type="submit" loading={isSubmitting}>
          Marcar objeto como devolvido
        </Button>
      </Styled.Galeria>
    </Styled.Container>
  );
};

export default Devolution;
