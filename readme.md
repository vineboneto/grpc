# GRPC com Typescript

Baseando-se no [Guia](https://blog.lsantos.dev/o-guia-do-grpc-3/) para implementar grpc com typescript

## Inciando

```bash
# Compilar proto
$ bash ./compile_proto.sh # linux; win não suportado

# Desenvolvimento
$ yarn dev:server
$ yarn dev:client

# Build
$ yarn build
$ yarn start:server
$ yarn start:client

# Docker
$ docker-compose up # iniciar servidor
$ docker exec -it <container_id> /bin/bash -c "yarn start:client" # executar cliente
```
