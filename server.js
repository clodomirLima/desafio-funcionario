const app = require("./api/localApi/app");
const Database = require("./api/localApi/database/conectDB");
const Funcionario = require("./api/localApi/models/funcionarioTb");
const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}

app.listen(port, function () {
    abreConexao()
    console.log(`aplicacao rodando na porta: ${port}`)
    fechaConexao()
})

function abreConexao(){
    const timeout = 30000;
    const db = new Database();
    db.init()
    setTimeout(abreConexao, timeout)
}

function fechaConexao(){
    const timeout = 30000;
    const db = new Database();
    db.close()
    setTimeout(fechaConexao, timeout)
}