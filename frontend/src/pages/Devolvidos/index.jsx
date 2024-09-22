import { useQuery } from '@tanstack/react-query';
import * as Styled from './styles';
import { http } from '../../api/server';
import Table from '../../components/Table';
import { Title } from '../../styles/base-styles';
import { HandDeposit } from '@phosphor-icons/react';

const Devolvidos = () => {
  const { data } = useQuery({
    queryKey: ['devolutions'],
    queryFn: async () => {
      const response = await http.get('/devolutions');
      return response.data;
    },
  });

  const columns = [
    { label: 'Foto', value: 'imageUrl' },
    { label: 'Objeto', value: 'objectName' },
    { label: 'Categoria', value: 'category' },
    { label: 'Nome', value: 'name' },
    { label: 'CPF', value: 'cpf' },
    { label: 'RG', value: 'rg' },
    { label: 'Data de devolução', value: 'devolutionDate' },
  ];

  if (!data) return null;

  return (
    <Styled.Container>
      <Title style={{ marginBottom: 16 }}>
        <HandDeposit size={32} weight="bold" /> Objetos Devolvidos
      </Title>
      <Styled.Galeria>
        <Table columns={columns} rows={data} />
      </Styled.Galeria>
    </Styled.Container>
  );
};

export default Devolvidos;
