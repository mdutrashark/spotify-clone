<h1>✅ Spotify Clone </h1>

## Objetivo 🎯
Esse projeto foi desenvolvido com o intuito de aprimoramento dos meus conhecimentos com a Linguagem JavaScript, framework React.Js e ambiente Node.js. Além disso, foi importante
para o aprendizado do Framework Express.Js e criação e consumo de API com utilização do pacote Axios, para o aprendizado de manipulação e conexão de Banco de dados com o MongoDB,
no aprendizado de como fazer a conexão do Front-end com o Back-end e na configuração de váriaveis de ambientes com Dotenv para proteger dados sensíveis, por fim, também aprendi a 
configurar as depedências do package.json global para rodar o npm run build e npm run start. 

O Projeto consiste em um site clone do Spotify onde é possivel navegar entre os endpoints Home, Artists e Songs. Além disso, existe um Player funcional que pode reproduzir e pausar a música 
escolhida e conta o tempo de reprodução da mesma. 

## Veja e teste o Projeto original na prática:
- [Acesse aqui o site]( )


## Tecnologias utilizadas 👽

- **Front-end:** React.Js, Vite, CSS e HTML
- **Back-end** Node.Js, Express.Js e JavaScript
- **Banco de Dados** MongoDB
- **Controle de Versão:** Git e GitHub
- **Gerenciamento de Dependências:** Npm
- **Site Hospedeiro** Netlify

## Estrutura do projeto 📁

```bash
spotify-clone/       
│
├── back-end/    
│   ├── api/                      
│   │   ├── connect.js           # Faz a conexão com o Banco de dados
│   │   ├── insertMany.js        # Utilizado para inserir os dados no Banco de dados
│   │   └── server.js            # Criação da API e seus endpoints
│   ├── node_modules/            # Módulos do Node.JS do Back-End
│   ├── .env                     # Váriavel de ambiente para dados sensiveis
│   ├── .gitignore               # Ignora arquivos que não serão enviados ao GitHub
│   └── package.json             # Dependências do Back-end
│      
├── frontend/
│   ├── api/                      
│   │   └── api.js               # Faz o consumo da API no front-end                        
│   ├── dist/                    # Arquivos da Build para Deploy
│   ├── node_modules/            # Módulos do Node.JS do Front-end
│   ├── src/                
│   │   ├── assets/              # Imagens, fontes e etc
│   │   ├── components/          # Componentes do projeto
│   │   ├── pages/               # Endpoints do projeto
│   │   ├── App.jsx              # Arquivo que passa todas as rotas
│   │   ├── index.css            # Arquivo principal de estilização
│   │   └── main.jsx             # Arquivo principal do projeto
│   ├── .gitignore               
│   ├── index.html               # Arquivo auxiliar do HTML
│   ├── package.json             # Dependências do frontend
│   ├── README.md                # Documentação do projeto e instruções
│   └── vite.config.js           # Arquivo para configuração do Vite
│                           
└── package.json                 # Dependências globais

```

> [!IMPORTANT]
> Essa é a estrutura contendo os principais arquivos e pastas, contudo, os demais arquivos
> podem ser visualizados acessando o repositório.


## Referência 🔎
- [Intensivo de 4 dias da Hashtag treinamentos]

