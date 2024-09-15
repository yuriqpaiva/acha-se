import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import {
  Backpack,
  DeviceMobile,
  DotsThreeOutline,
  File,
  Headset,
  Hoodie,
  MagnifyingGlass,
  PintGlass,
  PlugCharging,
  PlusCircle,
} from '@phosphor-icons/react';
import Button from '../../components/Button';

const items = [
  {
    id: 1,
    name: 'Smartphones e eletrônicos',
    icon: DeviceMobile,
    to: '/Smartphones',
  },
  {
    id: 2,
    name: 'Materiais e mochilas',
    icon: Backpack,
    to: '/Materiais',
  },
  {
    id: 3,
    name: 'Copos e garrafas',
    icon: PintGlass,
    to: '/Copos',
  },
  {
    id: 4,
    name: 'Acessórios',
    icon: Headset,
    to: '/Acessorios',
  },
  {
    id: 5,
    name: 'Roupas',
    icon: Hoodie,
    to: '/Roupas',
  },
  {
    id: 6,
    name: 'Documentos',
    icon: File,
    to: '/Documentos',
  },
  {
    id: 7,
    name: 'Carregadores e cabos',
    icon: PlugCharging,
    to: '/Carregadores',
  },
  {
    id: 8,
    name: 'Outros',
    icon: DotsThreeOutline,
    to: '/Outros',
  },
];

const Home = () => {
  return (
    <C.Container>
      <C.Title>
        <MagnifyingGlass size={32} weight="bold" />
        Itens encontrados
      </C.Title>
      <C.AddItemButtonWrapper>
        <Button as={Link} to="cadastro-item">
          <PlusCircle size={24} weight="bold" />
          Cadastrar novo item
        </Button>
      </C.AddItemButtonWrapper>
      <C.Galeria>
        {items.map((item) => (
          <C.ItemGaleria key={item.id} to={item.to}>
            <item.icon size={64} />
            {item.name}
          </C.ItemGaleria>
        ))}
      </C.Galeria>
    </C.Container>
  );
};

export default Home;
