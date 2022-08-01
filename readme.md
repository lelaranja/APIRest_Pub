# 🍻 API REST - PUB

Projeto educacional de finalização do Módulo IV do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/).

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). Como banco de dados, foi utilizado o SQLite.

# Tabela de conteúdos
<!--ts-->
   * [Pré-requisitos](#-pré-requisitos)
   * [Packages](#-packages)
   * [Instalação](#-instalação-da-aplicação)
   * [Inicializando banco de dados](#%EF%B8%8F-inicializando-o-banco-de-dados)
   * [Testes](#bug-testes)
   * [Rotas](#%EF%B8%8F-rotas)
   * [Desenvolvido por](#-desenvolvido-por)
<!--te-->

## 📚 Pré-requisitos
* Node.js  v.16.15.1
* NPM v.8.11.0

## 📦 Packages
- <a href="https://nodejs.org/en/">Node.Js</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a>
- <a href="https://nodemon.io/">Nodemon</a>

## 📥 Instalação da aplicação
Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/lelaranja/APIRest_Pub.git
```

Entrando na pasta:
```
cd APIRest_Pub
```

Instalando os pacotes:
```
npm install
```

Rodando o projeto:
```
npm start
```

## 🗂️ Inicializando o banco de dados
Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:

<h4 align="center">⚠️Em construção</h4>

## :bug: Testes
```
npm test
```

## 🏎️ Rotas

### Cliente

<h4 align="center">⚠️Em construção</h4>

### Funcionário

<h4 align="center">⚠️Em construção</h4>

### Cardápio
 * __GET  /menu__

    Esquema da resposta
    ```json
    {
	"msg": "Aqui estão seus dados",
	"dados": [
		{
			"id": 1,
			"produto": "Calabresa acebolada",
			"valor": 25,
			"descricao": "Uma porçao de 400 gramas de calabresa com cebola frita"
		},
    ```

* __GET  /menu/produto/:produto__

    Esquema da resposta
    ```json
	{
		"msg": "Aqui estão seus dados",
		"dados": {
			"id": 1,
			"produto": "Calabresa acebolada",
			"valor": 25,
			"descricao": "Uma porçao de 400 gramas de calabresa com cebola frita"
		}
	}
    ```
 * __POST /menu__

    Esquema da requisição
    ```json
 	{
		"produto": "Mojito",
		"valor": 25,
		"descricao": "coquetel à base de rum branco originário de Cuba"
	}
    ```

    Esquema da resposta
    ```json
  	{
	  "msg": "dados inseridos com sucesso",
	  "dados": {
		"produto": "Mojito",
		"valor": 25,
		"descricao": "coquetel à base de rum branco originário de Cuba"
		}
	}
    ```

* __PUT /menu/produto/:produto__

    Esquema da requisição
    ```json
    	{
		"produto": "Tequila",
		"valor": 15,
		"descricao": "Dose de 10 ml da Tequila José Cuervo"
	}
    ```

    Esquema da resposta
    ```json
    {
	"msg": "Dados atualizados com sucesso"
    }
    ```
    
* __DELETE  /menu/produto/:produto__

    Esquema da resposta
    ```json
   {
	"msg": "Dados deletados com sucesso onde produto = Tequila"
   }
   ```

### Estoque

<h4 align="center">⚠️Em construção</h4>

### Fornecedor
 * __GET  /suppliers__

    Esquema da resposta
    ```json
     {
	"msg": "Aqui estão seus dados",
	"dados": [
		{
			"id": 1,
			"nome": "Friboi",
			"telefone": "1145236984",
			"cnpj": "12345678956",
			"produto": "carne"
		}
    ```

* __GET  /suppliers/cnpj/:cnpj__

    Esquema da resposta
    ```json
   {
	"msg": {
		"msg": "Aqui estão seus dados",
		"dados": {
			"id": 2,
			"nome": "AMBEV",
			"telefone": "1145236984",
			"cnpj": "34598628901",
			"produto": "cerveja, destilado"
		}
    ```
 * __POST /suppliers__

    Esquema da requisição
    ```json
    {
	    "nome": "Quitanda Fukushima",
	    "telefone": "1145878156",
	    "cnpj":"326789123458",
	    "produto":"vegetais,legumes"
    }
    ```

    Esquema da resposta
    ```json
    {
	    "msg": "dados inseridos com sucesso",
	    "dados": {
		    "nome": "Quitanda Fukushima",
		    "telefone": "1145878156",
		    "cnpj": "326789123458",
		    "produto": "vegetais,legumes"
	    }
    }
    ```

* __PUT /suppliers/cnpj/:cnpj__

    Esquema da requisição
    ```json
    {
	    "nome":"Açougue do Zé",
	    "telefone": "1145878536",
	    "cnpj":"456789123451",
	    "produto":"carne"
    }
    ```

    Esquema da resposta
    ```json
    {
	    "msg": "Dados atualizados com sucesso"
    }
    ```
    
* __DELETE  /suppliers/cnpj/:cnpj__

    Esquema da resposta
    ```json
   {
	    "msg": "Dados deletados com sucesso onde CNPJ = 326789123458"
   }
   
### Transação
 * __GET  /transactions__

    Esquema da resposta
    ```json
  	{
	  "msg": "Aqui estão seus dados",
	  "dados": [
		{
			"id": 1,
			"funcionario": "Kleber Knob",
			"produtos": "Drink de fogo, Caninha da serra, Batata gourmet",
			"valorCompra": 1400,
			"data": "10/04/2022"
		}
    ```

* __GET  /transactions/id/:id__

    Esquema da resposta
    ```json
	 {
		"msg": {
			"msg": "Aqui estão seus dados",
			"dados": {
				"id": 1,
				"funcionario": "Kleberr Knob",
				"produtos": "Drink de fogo, Caninha da serra, Batata gourmet",
				"valorCompra": 1400,
				"data": "10/04/2022"
			}
		}
	}
    ```
 * __POST /transactions__

    Esquema da requisição
    ```json
   	{
		"funcionario": "Anakin Skywalker",
		"produtos": "Cerveja 600ml, porção de calabresa, amendoim 60g",
		"valorCompra": 80,
		"data": "22/05/2022"
	}
    ```

    Esquema da resposta
    ```json
   	{
		"msg": "dados inseridos com sucesso",
		"dados": {
			"funcionario": "Anakin Skywalker",
			"produtos": "Cerveja 600ml, porção de calabresa, amendoim 60g",
			"valorCompra": 80,
			"data": "2022-08-01T15:27:41.465Z"
		}
	}
    ```

* __PUT /transactions/id/:id__

    Esquema da requisição
    ```json
   	{
		"funcionario": "Anakin Skywalker",
		"produtos": "Cerveja 600ml, porção de calabresa",
		"valorCompra": 70,
		"data": "22/05/2022"
	}
     ```

    Esquema da resposta
    ```json
    {
	    "msg": "Dados atualizados com sucesso"
    }
    ```
    
* __DELETE  /transactions/id/:id__

    Esquema da resposta
    ```json
  {
	"msg": "Dados deletados com sucesso onde ID = 4"
  }
     ```

 ### ERROS GERAIS
   Esquema da resposta
    
  - Busca por dado não cadastrado
    
   ```json
   {
	    "msg": "Dados não encontrados"
   }
   ```
   
   - Post com dados faltantes
    
  ```json
  {
	  "msg": "Parece que faltam alguns dados em sua requisição"
  }
  ```
  
  - Post/Put com user diferente de "admin" ou "sub"
  ```json
    {
	"msg": "Usuario não autenticado"
    }
  ```
  
   - Delete com user diferente de "admin"
  ```json
    {
	"msg": "Usuario não autenticado"
    }
  ```

##  🤓 Desenvolvido por

<table align='center'>
  <tr>
    <td align="center"><a href="https://github.com/lelaranja"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/93409210?v=4" width="100px;" alt=""/><br /><sub><b>Letícia Laranja</b></sub></a><br /><a href="https://github.com/lelaranja" title="Letícia">🥤</a></td>
    <td align="center"><a href="https://github.com/Digoassun"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102702258?v=4" width="100px;" alt=""/><br /><sub><b>Rodrigo Assunção</b></sub></a><br /><a href="https://github.com/Digoassun" title="Rodrigo">🍹</a></td>
    <td align="center"><a href="https://github.com/igorsans"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98533716?v=4" width="100px;" alt=""/><br /><sub><b>Igor Santos</b></sub></a><br /><a href="https://github.com/igorsans" title="Igor">🍺</a></td>
     <td align="center"><a href="https://github.com/guimaraesadev"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101408372?v=4" width="100px;" alt=""/><br /><sub><b>Sabrina Guimarães</b></sub></a><br /><a href="https://github.com/guimaraesadev" title="Sabrina">🍸</a></td>
       <td align="center"><a href="https://github.com/SGErik"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102768866?v=4" width="100px;" alt=""/><br /><sub><b>Erik Souza</b></sub></a><br /><a href="https://github.com/SGErik" title="Erik">🍷</a></td>
    <td align="center"><a href="https://github.com/willcrvlh"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101817310?v=4" width="100px;" alt=""/><br /><sub><b>Willian Carvalho</b></sub></a><br /><a href="https://github.com/willcrvlh" title="Willian">🧉</a></td>
  </tr>


