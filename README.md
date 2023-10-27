# Dev-Web-II-C2

Este é meu repositório para o projeto de desenvolvimento da da API para Avaliação C2.

# O QUE FOI USADO:
- A API agora usa o MongoSB Atlas para utilizar como repositorio de banco de dados NoSQL na nuvem.
- Banco de dados PostgreSQL na AWS RDS.
- Repositório da AWS ECR
- Deploy da aplicação no AWS ECS no ip publico: http://18.218.151.98:3000/

# Pré-requisitos para rodar o projeto:

- Você deve ter o Docker e o Docker Compose (versões recentes) instalados;

Atenção: se você não estiver usando Linux, terá que comentar a seção do Portainer no arquivo docker-compose.yml, pois está configurado para rodar em Linux. Veja instruções a seguir.

# Como rodar o projeto:

- Faça o download do diretório c2 e de todo o seu conteúdo (ou faça um clone deste repositório inteiro);
- Dentro do diretório c2/backend existe um arquivo para o Docker Compose, o docker-compose.yml. Dê uma olhada nesse arquivo e:
- Verifique se as portas utilizadas não causarão conflito com alguma porta já em uso no seu computador. As portas que estão configuradas são:

      27017 (para o MongoDB)
      8081 (para o Mondo-Express)
      8080 (para o Adminer)
      3005 (para o Node)
      9000 e 8000 (para o Portainer)

# Como acessar a aplicação:

Como esta aplicação é só a API de backend, todas as interações (GET, POST, PUT, DELETE) devem ser feitas através de arquivos JSON, com o uso do Portman ou do Insomnia. Para requisições GET, o browser serve:

API mongo
- http://localhost:4000(raiz da aplicação)
- http://localhost:4000/api/unidades (API de unidades de saúde)
- http://localhost:4000/api/pessoas (API de pessoas usuárias das unidades de saúde)
- http://localhost:4000/api/agendamento (API de agendamentos)

API postgres
- http://localhost:4000/api/unidadespg (API de unidades de saúde)
- http://localhost:4000/api/pessoaspg (API de pessoas usuárias das unidades de saúde)
- http://localhost:4000/api/agendamentopg (API de agendamentos)

# Banco de dados:

Pelos requisitos da avaliação deveríamos utilizar o MongoDB Atlas e AWS RDS.
