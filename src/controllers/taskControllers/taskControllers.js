class taskControllers{
    show = (req, res)=> {
        res.send({
            id: 1,
            nomeTarefa: 'TODO APP',
            datecreate: '2021-11-09',
            prazo: '2021-11-09',
            dataTermino: '2021-11-09',
            entregaStatus: 'Done',
            userId: 1,
            status: 'Done'
        });  
    };
    
    save = (req, res) => {
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    }
};

module.exports = new taskControllers();

/*
function taskHandler(req, res){
    res.send("Rota ativada com metodo GET!!");

}
module.exports = taskHandler;
*/