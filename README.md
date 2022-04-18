# Gulp

Kit de ferramentas de automação de tarefas baseada em JavaScript

- Otimizar o fluxo de trabalho (desenvolvimento)
- Organização e orquestração de arquivos
- Ajuda a evitar trabalhos lentos e repetitivo
- Criação de pipelines
- Você cria as configurações necessárias (flexível)
- Tarefas escritas em JS ou plug-ins
- Aplica transformações em arquivos ainda na memória (antes de gravar no disco)

## Porquê automatizar?
- Melhor organização
- Evitar repetição de tarefas
- Mais tempo para focar no mais importante: regras de negócio e experiência do usuário

## Principais recursos
- Minificação de arquivos
- Otimização de imagens (para melhor performance)
- Mescla de arquivos de diferentes origens

## Transpilação para JS
É o processo de transformação (conversão) de escrita em outras linguagens para o JavaScript. Você poderá escrever em TypeScript ou Babel que o código.

Todo o processo é executado a partir node.js e gulp-cli (linha de comando)

## Global x Local
- A instalação do Node.js é global
- Já o Gulp e seus plugins são instalados localmente (em cada projeto)

## Gerenciadores de pacotes
- Dependências do projeto
- NPM: Node Package Manager
- Utiliza o Node.js
- Permite a configuração rápida e fácil de ambientes e plugins Node


## Instalando o Gulp
- Rodar o Node.js
- Agora na pasta do projeto, adicionar o npm: npm init -y
- Instalar o gulp-cli (Command Line Interface) globalmente: npm install gulp-cli -g
- Criar o gulpfile.js

## Trabalhando com Gulp
- Baseado em funções: tasks
- Organização do projeto
- Otimização de arquivos
- Mesclagem e Minificação de CSS e JS
- Diminuição do tamanho (bytes) de imagens

## Rodar o projeto
- Executar o comando:
```
npm install

```

## Principais Comandos

- npm init -y -> Cria o arquivo package.json
- npm install gulp-cli -g -> Instala a interface de programação do gulp
- npm install jquery -> Instala o jquery via npm e coloca na pasta node-modules
- npm install bootstrap-> Instala o bootstrap  na pasta node-modules
- npm i font-awesome -> Instala o fontawesome na pasta node-module
- npm install --global http-server


## Dependencias do gulp

- npm install gulp-concat --save-dev
- npm install gulp-cssmin --save-dev -> arquivos css
- npm install gulp-rename --save-dev
- npm install gulp-uglify --save-dev -> arquivos js
- npm install --save-dev gulp-imagemin@7.1.0"
- npm install --save gulp-htmlmin
