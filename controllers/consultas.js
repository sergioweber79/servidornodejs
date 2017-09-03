var fs = require('fs');


module.exports = function(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");

    var consultasJson = './baseJson/consultas.json';


    var obj;
    fs.readFile(consultasJson, 'utf8', function (err, data) {
      if (err){ 
          res.status(500).json({error: err});
      } 
      
      obj = JSON.parse(data);
      res.json(obj);
    });


}