var http = require('http');
var serveSwagger = require('serve-swagger-editor'); 

var app = serveSwagger({
  disableNewUserIntro: true,
  useBackendForStorage: true,
  useYamlBackend: true
}, '/project/swagger.yaml');

var server = http.createServer(app);

server.on('request', function (req, res) {
  res.on('finish', function () {
    console.log(res.statusCode, req.method, req.originalUrl);     
  });
});

server.listen(8080, function () {
  console.log(server.address());
});
