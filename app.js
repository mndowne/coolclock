var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 3000));

app.get('/',function(req,res){

});

app.listen(app.get('port'),function(){
  console.log('server is now up on 3000 or process.env.port');
});

