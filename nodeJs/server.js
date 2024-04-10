const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 8000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Executando na porta 8000');
});

// Função construtora
function Pessoa() {
  this.nome = "Joao";
  this.anoNascimento=1978;
  this.profissa0 = "Estudante";
  this.calculaIdade = function (){
      return new Date().getFullYear() - this.anoNascimento;
  };    
};

const pessoa = new Pessoa();

console.log(pessoa.calculaIdade());

// Função construtora
function Pessoa2(nome, anoNascimento, profissao) {
  this.nome = nome;
  this.anoNascimento=anoNascimento;
  this.profissa0 = profissao;
  this.calculaIdade = function (){
      return new Date().getFullYear() - this.anoNascimento;
  };    
};

const pessoa2 = new Pessoa2("Fernando", 1978, "DBA");

console.log(pessoa2.calculaIdade());


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
