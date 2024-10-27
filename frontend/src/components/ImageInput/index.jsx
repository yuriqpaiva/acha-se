import React from 'react';
import { Trash } from '@phosphor-icons/react';
import * as Styled from './styles';

const ButtonImageWrapper = ({ file, fileInputRef, setFile }) => {
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  return (
    <>
      <Styled.Container>
        {file ? (
          <div className="image-wrapper">
            <button type="button" onClick={() => fileInputRef.current.click()}>
              <img
                style={{ width: 200, height: 200 }}
                src={URL.createObjectURL(file)}
                alt=""
              />
            </button>
            <button
              className="remove-image"
              type="button"
              onClick={() => {
                setFile(null);
              }}
            >
              <Trash size={16} weight="bold" />
              Remover imagem
            </button>
          </div>
        ) : (
          <Styled.BotaoImagem
            type="button"
            onClick={() => fileInputRef.current.click()}
          >
            Anexar imagem do item
          </Styled.BotaoImagem>
        )}
      </Styled.Container>
      <input
        onChange={handleChange}
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
      />
    </>
  );
};

export default ButtonImageWrapper;
