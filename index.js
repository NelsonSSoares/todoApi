const express = require('express');
const app = express();
const port = 3000;

app.get("/usuario", (req,resp)=> {
    
    const usuario = {
        id = 1,
        nome = 'Nelson',
        email = 'punkpunkada@gmail.com',
        datanasc = '1993-09-05',
        senha = 'Unkown'
    }
      resp.send(usuario);
});
app.get("/tarefa", (req,resp)=> {

    const tarefa = {
        id = 1,
        nomeTarefa = 'TODO APP',
        datecreate = '2021-11-09',
        prazo = '2021-11-09',
        dataTermino = '2021-11-09',
        entregaStatus = 'Done',
        userId = 1,
        status = 'Done'
    }


    resp.send(tarefa);
});
app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
})