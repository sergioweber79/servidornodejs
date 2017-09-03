var express = require('express')
, app = express()
, bodyParser = require('body-parser')
, multiparty = require('connect-multiparty');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var router = express.Router();

app.use('/enviadas', express.static(__dirname  + '/uploads'));

app.use('/api', router);
   /*insira as rotas aqui */

router.route('/upload')
   .post(multiparty(), require('./controllers/upload'));


//Retorna as consultas
router.route('/consultas')
   .get(require('./controllers/consultas'));


   ///Retorna os dados da consulta atraves do id
router.route('/tabela/:id')
   .get(require('./controllers/tabela'));


app.listen(port);
  
console.log('conectado a porta ' + port);