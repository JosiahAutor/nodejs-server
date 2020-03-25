const http = require('http');
const fs = require('fs');
function onRequest(request, response) {
      response.writeHead(200, {'Content-type' : 'text/html'});
      fs.readFile('./simple-form-ts/src/index.html', null, function(err, data){
          if(err){
              response.writeHead(404);
              response.write('file not found');
          } else{
              response.write(data);
          }
          response.end();
      });
}
      
    
 http.createServer(onRequest).listen(3000);