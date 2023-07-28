# Calculadora de Idade

<h4 align="center"> 
  Status do Projeto : ✅ Concluído
</h4>

![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

## Bem vindo! 👋

Obrigado por entrar no meu projeto!! 

Este foi um desafio proposto pelo [Frontend Mentor](https://www.frontendmentor.io). Um site com divrsos desafios de programação similiares a este.

## Sobre o projeto

### O que quer dizer "Calcular idade"?

Antes de começar a programar, coloquei no papel as considerações gerais do projeto:
- Usuário inserir o dia, mês e ano do seu nascimento
- Após apertar o botão, calcular quantos anos, meses e dias a pessoa tem.

Essa foi minha primeira percepção ao encarar o desafio, porém depois de pensar mais, percebi que não seria tão fácil assim.

Ainda haviam alguns detalhes a se levar em conta:
- Mensagens de erro caso fosse uma data inválida que o usuário inserisse:
  - Campo vazio
  - Dias fora do intervalo 1-31
  - Meses fora do intervalo 1-12
  - Data futura
  - Data inválida como 31/04/2023 (Abril vai até o dia 30)    
- Anos que fossem bissesto, considerar Fevereiro com 29 dias
- Considerar que cada mês tem uma certa quantidade de dias
  - 1,3,5,7,8,10,12: 31 dias
  - 4,6,9,11: 30 dias
  - 2(não bissesto): 28
  - 2(bissesto): 29

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- HTML
- CSS
- JavaScript
- JQuery
