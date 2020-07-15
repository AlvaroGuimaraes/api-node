# api-node
NodeJs, Express, MongoDB, JEST

# Endpoints
- método POST para cadastrar uma loja
- método PUT para editar uma loja através do ID
- método DELETE para deletar uma loja através do ID
- método GET para pegar as informações de uma loja através do ID
- método GET para listar todas as lojas ou filtrar (por estado/cidade)
- deve ser possível listar todas as lojas cadastradas, todas de um estado e todas de um conjunto estado/cidade

## OBJETO LOJA
- Um exemplo da estrura da loja pode ser visto em: https://github.com/AlvaroGuimaraes/api-node/blob/master/lojas.md

## COMMANDS
- npm start: Inicia a API
- npm test: Executa os testes unitários

### Start docker

#### Start from npm

`npm run docker`

#### List container

`docker ps -a`

#### Stop Container (hash = CONTAINER_ID )

`docker stop {hash}`

#### Remove Container (hash = CONTAINER_ID )

`docker rm {hash}`

#### Up Container (hash = CONTAINER_ID )

`docker-composer stop`

`docker-compose build`

`docker-composer up -d`

`docker-composer start`
