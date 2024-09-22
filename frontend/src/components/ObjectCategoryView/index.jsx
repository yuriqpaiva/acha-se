import { Title } from '../../styles/base-styles';
import * as Styled from './styles';
import Table from '../Table';
import { BackButton } from '../BackButton';
import { useQuery } from '@tanstack/react-query';
import { http } from '../../api/server';
import { ItemActionBar } from '../ItemActionBar';

const ObjectCategoryView = ({ category }) => {
  const { data: items } = useQuery({
    queryKey: ['object', category.key],
    queryFn: async () => {
      const { data } = await http.get(`/objects?category=${category.key}`);
      return data;
    },
  });

  const columns = [
    { label: 'Foto', value: 'imageUrl' },
    { label: 'Nome', value: 'name' },
    { label: 'Marca', value: 'brand' },
    { label: 'Categoria', value: 'category' },
    { label: 'Cor', value: 'color' },
    { label: 'Valor', value: 'value' },
    { label: 'Data', value: 'date' },
    { label: 'Local', value: 'local' },
  ];

  if (!items) return;

  return (
    <Styled.Container>
      <BackButton marginBottom={32} />
      <Title style={{ marginBottom: 16 }}>
        <category.icon size={32} weight="bold" />
        {category.name}
      </Title>
      <Styled.Galeria>
        <Table columns={columns} rows={items} ActionBar={ItemActionBar} />
      </Styled.Galeria>
    </Styled.Container>
  );
};

export default ObjectCategoryView;
