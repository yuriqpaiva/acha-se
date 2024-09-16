// CadastroItem/index.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Galeria } from './styles';
import { http } from '../../api/server';
import Table from '../../components/Table';
import { BackButton } from '../../components/BackButton';
import { Title } from '../../styles/base-styles';
import { ItemActionBar } from '../../components/ItemActionBar';
import { DeviceMobile } from '@phosphor-icons/react';

const CadastroItem = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const { data } = await http.get(`/objects?category=ELETRONIC`);
    if (!data) {
      alert('erro ao buscar items');
      navigate('/');
      return;
    }

    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

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

  return (
    <Container>
      <BackButton marginBottom={32} />
      <Title style={{ marginBottom: 16 }}>
        <DeviceMobile size={32} weight="bold" />
        Smartphones
      </Title>
      <Galeria>
        <Table columns={columns} rows={items} ActionBar={ItemActionBar} />
      </Galeria>
    </Container>
  );
};

export default CadastroItem;
