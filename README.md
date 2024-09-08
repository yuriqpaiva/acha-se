# Projeto Acha-se

## Como rodar em desenvolvimento?
### Docker
Após fazer o clone do projeto e ter o docker instalado, basta rodar o comando abaixo:
```bash
docker-compose up
```
Com o comando acima, o Docker irá ler o arquivo `docker-compose.yml` e irá subir os containers necessários para rodar a aplicação.

### Instalando dependências do projeto:
Na raiz do projeto, execute o comando abaixo para instalar as dependências do frontend e do backend:
```bash
cd backend && npm install && cd ../frontend && npm install
```

## Portas

- **Frontend**: 3000
- **Backend**: 4000
- **Postgres**: 5432

