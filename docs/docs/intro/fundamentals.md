---
title: Fundamentos
sidebar_position: 2
---

Antes das tecnologias e detalhes técnicos de implementação do nosso projeto, é necessário saber os fundamentos e principais ferramentas que possibilitarão o desenvolvimento desse projeto de forma rápida, paralela e eficiente.

Antes de mais nada, é importantíssimo saber Git e Github, duas das ferramentas que serão abordadas no próximo tópico.

Para o gerenciamento das tarefas e responsabilidades, optamos pelo Clickup.

Todo design das telas e componentes da aplicação será feito no Figma.

Algumas aplicações e serviços dependem do Redis, um banco de dados in-memory (Localizado na memória RAM, não disco) comumente utilizado para o cache, sistemas de fila e stack, realtime e etc..., no entanto, ele só está disponível para Linux, para usuários de Windows será necessário instalar e configurar o WSL (Windows Subsystem for Linux), recomendo lerem **inteiro** [este artigo da Microsoft sobre a instalação dele no sistema Windows](https://learn.microsoft.com/pt-br/windows/wsl/install)

Será utilizado JavaScript e TypeScript em todo projeto, então conceitos fundamentais da linguagem serão necessários para construir de forma confiável, funcional e fácil de ler, boa parte desses conceitos já foram abordados em nosso [slideshow de fundamentos de JavaScript](https://guides-tcc-ets.vercel.app) que está no [repositório da nossa organização](https://github.com/ets-einer/guides).

Após isso, podemos partir para ferramentas utilizadas em nosso processo de desenvolvimento a nível de detalhes técnicos, a pra organizar melhor, podemos separar as ferramentas nas seguintes categorias:

### Comum

Ferramentas utilizadas em todas as aplicações

- Jest como framework de testes
- Docusarus como documentação de desenvolvimento de projeto e diário de bordo.
- pnpm como substituto do npm ([veja aqui as principais vantagens](https://www.youtube.com/watch?v=WVnsM7Mp3JM))
- Turborepo sistema de build para todas as aplicações presentes no monorepositório
  - Permite gerenciar o processo de build (transformar código em artifatos que podem ser rodados) de várias aplicações ao mesmo tempo, utilizando uma CLI (Command Line Interface) intuitiva
  - Ao passo que, faz o caching de artifatos anteriores, deixando o processo de rebuild mais rápido.
  - Possibilita executar scripts que executem, compilem e testem todos os apps simultaneamentes (sendo possível também filtrá-los)

### Frontend

- React (através do Vite, substituto do Create React App)
- Tailwindcss (sistema de estilos para aplicar nos componentes e elementos HTML)
- tRPC client para o consumo de APIs em tRPC no server
- Tanstack Query para gerenciar estado assíncrono para o frontend (React)

### Backend

- Express.js com tRPC server
- Prisma (interface com banco de dados type safe)
- Zod (validação de dados)
