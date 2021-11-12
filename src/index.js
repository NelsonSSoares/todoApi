const express = require('express');
const app = express();
const {PORT, APP_NAME} = require('./util/appConfig.js');
//const port = 3000;

const usersHandler = require('./controllers/usersControllers/usersControllers.js');
const taskHandler = require('./controllers/taskControllers/taskControllers.js');
const { application } = require('express');

const users = new usersHandler()
const tasks = new taskHandler()

app.use((req, res, next) =>{
    console.log(req.headers.host, new Date().toLocaleDateString())
    next();
})

app.use(express.json())

// USUARIOS - USERS
app.get('/users', users.show);
app.post('/users', users.show);
// TAREFAS - TASKS
app.get("/tasks", tasks.show);
app.post("/tasks", tasks.save);

app.listen(PORT, ()=> {
    console.log(`Online na porta = http://localhost:${PORT}`);
});



