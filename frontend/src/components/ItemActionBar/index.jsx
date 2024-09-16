import { Pencil } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export function ItemActionBar({ row }) {
  return (
    <Styled.Container>
      <Link to={`/item/${row.id}`}>
        <Pencil size={24} />
      </Link>
    </Styled.Container>
  );
}
