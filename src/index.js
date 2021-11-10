const express = require('express');
const app = express();
const {PORT, APP_NAME} = require('./util/appConfig.js');
//const port = 3000;

const usersHandler = require('./controllers/usersControllers/usersControllers.js');
const taskHandler = require('./controllers/taskControllers/taskControllers.js');

app.listen(PORT, ()=> {
    console.log(`Online na porta = http://localhost:${PORT}`);
});



//const config = require('./util/appConfig.js');


/*
app.get("/users", (req,resp)=> {
    const usuario = {
        id: 1,
        nome: 'Nelson',
        email: 'punkpunkada@gmail.com',
        datanasc: '1993-09-05',
        senha: 'Unkown'
    }
    resp.send(usuario)
    //resp.send(JSON.parse(usuario));
});
app.get("/tasks", (req,resp)=> {

    const tarefa = {
        id: 1,
        nomeTarefa: 'TODO APP',
        datecreate: '2021-11-09',
        prazo: '2021-11-09',
        dataTermino: '2021-11-09',
        entregaStatus: 'Done',
        userId: 1,
        status: 'Done'
    }


    resp.send(tarefa);
});
*/