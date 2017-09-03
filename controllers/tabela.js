var fs = require('fs');


module.exports = function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    var consultasJson = './baseJson/consultas.json';

    var idConsulta = req.params.id;
   


    var obj;
    var objTabela;
    var arqTabela='';
    fs.readFile(consultasJson, 'utf8', function (err, data) {
        if (err){ 
            res.status(500).json({error: err});
        } 
        arqTabela='';
        obj = JSON.parse(data);
        
        for (var i = 0; i < obj.consulta.length; i++) { 
            if (obj.consulta[i].id==idConsulta){

                arqTabela=obj.consulta[i].arquivo;

            }
            
        }
        console.log(" Tabela: "+arqTabela);

        
                
        fs.readFile(arqTabela, 'utf8', function (err2, data2) {
            if (err2){ 
                res.status(500).json({error: err2});
            } 
            
            objTabela = JSON.parse(data2);
            res.json(objTabela);
        });
  


    });









}