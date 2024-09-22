import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { MagnifyingGlass, PlusCircle } from '@phosphor-icons/react';
import Button from '../../components/Button';
import { Title } from '../../styles/base-styles';
import { objectCategories } from '../../constants/objects-categories';

const Home = () => {
  return (
    <C.Container>
      <Title>
        <MagnifyingGlass size={32} weight="bold" />
        Itens encontrados
      </Title>
      <C.AddItemButtonWrapper>
        <Button as={Link} to="cadastro-item">
          <PlusCircle size={24} weight="bold" />
          Cadastrar novo item
        </Button>
      </C.AddItemButtonWrapper>
      <C.Galeria>
        {objectCategories.map((item) => (
          <C.ItemGaleria key={item.id} to={item.route}>
            <item.icon size={64} />
            {item.name}
          </C.ItemGaleria>
        ))}
      </C.Galeria>
    </C.Container>
  );
};

export default Home;
