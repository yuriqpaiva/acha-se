// CadastroItem/index.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Icone2, // Importe Iconsair do styles.js
  TextoPag,
  BotaoInvisivel,
  Galeria,
  Itens,
} from './styles';
import icone2 from '../../images/icone2.png';
import { http } from '../../api/server';

const CadastroItem = () => {
  const navigate = useNavigate(); // Utilize useNavigate se estiver usando React Router
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const { data } = await http.get(`/objects?category=DOCUMENTS`);
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

  return (
    <>
      <TextoPag>
        <BotaoInvisivel>
          <Icone2 src={icone2} alt="Ícone" /> Itens encontrados
        </BotaoInvisivel>
      </TextoPag>

      <Galeria>
        {items.map((item) => {
          return (
            <button onClick={() => navigate(`/item/${item.id}`)} key={item.id}>
              <Itens src={item.imageUrl} alt="Item 1" />
            </button>
          );
        })}
      </Galeria>
    </>
  );
};

export default CadastroItem;
