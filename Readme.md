Repositório de atividades e trabalhos das aulas de Programação Web do grupo Augusto, Giuseppe, Vinicius e Willian.

## Aula 03 18/02/2019 #################################################################

[Prática]
Criar um arquivo “.html” contendo a estrutura básica HTML demonstrada anteriormente.
*Ver pasta Aula03-18-02

Document Type Definition (DTD) Exemplo HTML 4.01

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

Exemplo HTML5

<!DOCTYPE html>

Validação de Documentos Web

W3C: http://validator.w3.org
Nu: https://validator.nu/

## Aula 04 25/02/2019 ##################################################################

O CSS é baseado em três elementos principais:
seletor {
  propriedade1:valor; 
  propriedade2:valor;
}

Seletores CSS:
http://www.w3schools.com/cssref/css_selectors.asp

Prorpiedades:
http://www.w3schools.com/cssref/default.asp 

Seletores básicos:
Classe:

.nome_classe {
  propriedade1:valor;
}

Identificador:
#identificador {
	 propriedade1:valor;
}

Marcação:
marcacao {
	 propriedade1:valor;
}

[Prática]
Para a aplicação anterior, adicionar mais um parágrafo com id “cor_cinza”.
Incluir em todos os parágrafos a classe CSS “cor_rosa”.
Definir no CSS externo regra CSS para o ID “cor_cinza” com definição de cor cinza (color: gray)
Definir no CSS externo regra CSS para classe “cor_rosa” com definição de cor rosa (color: pink)
Incluir outras customização de propriedade como:
Text-align
Letter-spacing
Background-color

*Ver pasta Aula04-25-02

## Aula 05 11/03/2019 ##################################################################

[Prática]
Implementar uma página Web que inclui Javascript das das seguintes formas: inline, no documento (head), no documento (body), no arquivo externo
*Ver arquivo ./Aula05-11-03/callJavaScript.html


[Prática]
Escrever um HTML com uma lista não ordenada de itens
Adicione itens com quantidade diversa de texto
Escreva um Javascript que analisa cada item da lista e altera suas propriedades de acordo com 
as seguintes regras:
Item com texto até 10 caracteres, exibir o texto em azul com tamanho de fonte 2em;
Item com texto entre 10 e 20 caracteres, exibir o texto em vermelho com tamanho de fonte 1.5em.
Item com texto com mais de 20 caracteres, exibir o texto em verde com tamanho de fonte 0.5em.
*Ver arquivo ./Aula05-11-03/manupulacaoDOM.html

[Prática]
Escrever um Javascript que insere items numa lista de compras.
Para tanto escreva um formulário com 3 campos: quantidade, unidade e item.
Inclua um botão “Incluir” que quando clicado deve executar um Javascript para incluir os items numa lista não ordenada da seguinte forma:
[quantidade] [unidade] [item]
*Ver arquivo ./Aula05-11-03/eventos.html

[Prática]
Escrever um formulário para endereço com vários campos (CEP, rua, cidade, bairro)
Desenvolver um Javascript que consulta a API do viacep para obter dados de uma API para um determinado endereço quando CEP for preenchido.
Ao obter resposta, atualizar os campos do formulário.
Tratar também casos de erro para dar mensagem indicando erro
*Ver arquivo ./Aula05-11-03/buscacep.html

[Prática]
Escrever um formulário para obter informações de um determinado personagem Marvel.
Obter a lista de personagens da Marvel e então fornecer campo de seleção para o usuário selecionar o personagem. 
Ao selecionar o personagem, informações adicionais como imagem de dados devem ser fornecidos.
*Ver arquivo ./Aula05-11-03/Marvel/herois.html

[Prática]
Para o exercício anterior de consulta a API Marvel, crie agora aplicações simples usando o Angular (6 ou +) ou ReactJS.
*Ver projeto ./Aula05-11-03/marvelAngular

## Aula 06 18/03/2019 ##################################################################

***Fazer Práticas Servlet

## Aula 07 25/03/2019 ##################################################################
[Prática]
Pesquise outro Framework Web MVC (citado ou disponível)
Identifique informações básicas do Framework e suas vantagens.
Crie um projeto simples de teste.
Faça descoberta da arquitetura e também do ciclo de vida do Framework
***Fazer essa prática

## Aula 08 15/04/2019 ##################################################################

[Prática]
Abra a pasta em um editor (Visual Studio Code) 
Crie arquivos, um para cada exercício do tutorial e escreva nestes arquivos a solução.
Para testar a solução, execute:
learnyounode run ex1.js
Para validar o código, execute:
learnyounode verify ex1.js

**terminar essa prática

[Prática]
https://onebitcode.com/react-spa/ 
https://www.loginworks.com/blogs/how-to-develop-a-single-page-web-application-using-angular-6-0/ 
https://medium.freecodecamp.org/how-to-build-a-single-page-application-using-vue-js-vuex-vuetify-and-firebase-838b40721a07 
https://www.adcisolutions.com/knowledge/how-build-single-page-application-spa-vuejs 

Cada grupo escolha um Framework JS (React, Angular e Vue) e crie uma Single Page Application simples.
Usar exemplos de início rápido para criar o exemplo.
Analise o código e descreva a aplicação do ponto de vista do Framework utilizado.

## Aula 09 22/04/2019 ##################################################################

[Prática]
https://github.com/joaoronaldocunha/TodoList_Angular_Firebase

## Aula 10 29/04/2019 ##################################################################

[Prática]
Abrir linha de comando e executar comandos:
dotnet new angular --name AngularNetCore
Abrir projeto no VSCode:
cd AngularNetCore
dotnet run
Abrir URL https do projeto:
https://localhost:5001/
Criar certificado digital (para desenvolvimento)
dotnet dev-certs https --trust
Fechar e abrir o software de novo.
*Ver pasta Aula09-29-04

Exemplo Autenticação Firebase
https://firebase.google.com/docs/auth/web/start?hl=pt-br

[Prática]
Criar projeto no Firebase
Definir métodos de login
Ativar Email/Senha
