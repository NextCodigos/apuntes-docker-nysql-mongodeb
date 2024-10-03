const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("¡Hola, mundo desde Docker con Node.js 18!");
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}/`);
});
