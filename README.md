# Demo Integractión Giftcard Provider Protocol con Servidor Express y REST API
Boilerplate: https://github.com/rwieruch/node-express-server-rest-api

Un ejemplo práctico de aplicación de backend para simular flujo de Giftcard VTEX como medio de pago de fidelidad.

Documentación de referencia:

* https://help.vtex.com/tutorial/how-to-integrate-with-a-gift-card--tutorials_450
* https://documenter.getpostman.com/view/18468/RVfqmDgC?version=latest
* https://documenter.getpostman.com/view/5517284/S17qU9oo?version=latest
* https://documenter.getpostman.com/view/18468/7TRdAJy?version=latest
* https://documenter.getpostman.com/view/18468/vtex-giftcard-system-api/6YtyvrM?version=latest

## Características

* Babel 7
* Variables de Ambiente
* Express
* API REST

## Requerimientos

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Instalación

* `git clone git@github.com:crisvtex/giftcard-provider-protocol-node-express-api.git`
* `cd giftcard-provider-protocol-node-express-api`
* `npm install`
* `npm start`
* opcional: incluir *.env* en *.gitignore*

### Rutas GET

  * /giftcards
  * /giftcards/{giftcardId}

### Rutas POST

* /giftcards/_search
* /giftcards/{giftcardId}/transactions

#### Postman

* Instalar [Postman](https://www.getpostman.com/apps) para interactuar con la API REST