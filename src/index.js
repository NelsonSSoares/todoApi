const express = require('express');
const app = express();
const {PORT, APP_NAME} = require('./util/appConfig.js');
//const port = 3000;

const usersHandler = require('./controllers/usersControllers/usersControllers.js');
const taskHandler = require('./controllers/taskControllers/taskControllers.js');

const users = new usersHandler()
const tasks = new taskHandler()


// USUARIOS - USERS
app.get('/users', users.show);
app.post('/users', users.show);
// TAREFAS - TASKS
app.get("/tasks", tasks.show);
app.post("/tasks", tasks.save);

app.listen(PORT, ()=> {
    console.log(`Online na porta = http://localhost:${PORT}`);
});



